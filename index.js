// var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
// [SH] Require Passport
// var passport = require('passport');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(express.json());

const {
	Client
} = require('pg');
const path = require('path');
// const indexPath = path.join(__dirname, './proj/index.html');
// const publicPath = express.static(path.join(__dirname, './proj/dist'));

const client = new Client({
	connectionString: 'postgres://zdihimvhaggjef:49a9e5e7e95cd18cb79a87371fa43d1b7693a671ddc55018d1764adf69789313@ec2-174-129-41-64.compute-1.amazonaws.com:5432/deaqpbge7arr4n',

	ssl: true
});

client.connect();


app.set('port', (process.env.PORT || 4000));
app.use(express.static(path.join(__dirname, 'view_engine')));
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '/view_engine', 'index.html'));
});


// app.post('/update', function (req, res) {
// 	console.log(req.body);
// 	res.send({ operation_name: req.body.operation_name })
// });

// app.post('/aggregate', function (request, response) {
// 	let cid = reqest.body.cid;

// });
function setPassword(pw) {
	let salt = crypto.randomBytes(16).toString('hex');
	let password = crypto.pbkdf2Sync(pw, salt, 1000, 64, 'sha512').toString('hex');
	//store in db
	let info = {};
	info['password'] = password;
	info['salt'] = salt;
	return info;
};

function generateJWT(name, email) {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);
	return jwt.sign({
		name: name,
		email: email,
		exp: parseInt(expiry.getTime() / 1000),
	}, "123");
}

function generateUUID(email) {
	return uuidv3(email, uuidv3.DNS);
};

function validatePassword(password) {
	let email = '12@kds.com';
	const query = {
		// give the query a unique name
		name: 'fetch-user',
		text: 'SELECT * FROM users WHERE email = $1',
		values: [email]
	}
	client.query(query, (err, res) => {
		if (err) {
			console.log(err);
			// response.send({  });
			return false
		} else {
			console.log(JSON.stringify(res.rows[0]));
			// response.send({ result: res });
			let pw = '12';
			let newpassword = crypto.pbkdf2Sync(pw, res.rows[0].salt, 1000, 64, 'sha512').toString('hex');
			//get hash from db
			let checker = res.rows[0].password === newpassword ? true : false;
			return checker;
		}
	})
}
app.post('/userlogin', function (req, response) {
	console.log(req.body);
	// { name: '121', email: '12@kds.com', password: '12' }
	// let pw_number = parseInt(req.body.pw);
	// const text = 'INSERT INTO users(name, email,salt,password) VALUES($1, $2, $3, $4)'
	//123@321.com
	//123
	const {
		email,
		password
	} = req.body;
	const query = {
		// give the query a unique name
		name: 'fetch-user',
		text: 'SELECT * FROM users WHERE email = $1',
		values: [email]
	}
	client.query(query, (err, res) => {
		if (err) {
			console.log(err);
			// response.send({  });
		} else {
			console.log(JSON.stringify(res.rows[0]));
			// response.send({ result: res });
			let newpassword = crypto.pbkdf2Sync(password, res.rows[0].salt, 1000, 64, 'sha512').toString('hex');
			//get hash from db
			let checker = res.rows[0].password === newpassword ? true : false;
			// console.log(str);
			if (checker) {
				let token = generateJWT(res.rows[0].name, res.rows[0].email);
				// console.log(getUserDetails(token));
				response.send({
					user: token
				})
			} else {
				response.send({
					user: null
				})
			}

		}
	})
});
// client.query("SELECT MIN(U.cost) FROM utilities U, utilitiesmanager UM WHERE U.uid = UM.uid AND UM.mid =" + mid, (err, res) => {
// 	if (err) {
// 		console.log(err);
// 		response.send({ result: null, info: 'find Min util unsuccessful' });
// 	} else {
// 		console.log('result send');
// 		response.send({ result: res });
// 	}
// }
// )
// app.post('/seecoachutilities', function (req, response) {
// 	let cid = parseInt(req.body.cid);
// 	// let filter = req.body.filter;
// 	//let filter = ['cost', 'approved', 'cid']
// 	let filter = '';
// 	if (req.body.filter.length === 0) {
// 		filter = '*';
// 	} else {
// 		filter = req.body.filter.join(',');
// 	}
// 	client.query("SELECT " + filter + " FROM utilities U, utilitiescoach UC WHERE U.uid = UC.uid and UC.cid = " + cid, (err, res) => {
// 		if (err) {
// 			console.log(err);
// 			response.send({ info: 'cannot find coach utilities', result: null });
// 		} else {
// 			console.log(res.rows);
// 			response.send({ result: res, info: 'data sent' });
// 		}
// 	});

// });

// app.post('/seeplayerutilities', function (req, response) {
// 	let pid = parseInt(req.body.pid);
// 	let filter = '';
// 	if (req.body.filter.length === 0) {
// 		filter = '*';
// 	} else {
// 		filter = req.body.filter.join(',');
// 	}
// 	client.query("SELECT " + filter + " FROM utilitiesplayer WHERE pid = " + pid, (err, res) => {
// 		if (err) {
// 			console.log(err);
// 			response.send({ info: 'cannot find player utilities', result: null });
// 		} else {
// 			console.log(res.rows);
// 			response.send({ result: res, info: 'data sent' });
// 		}
// 	});
// });


// app.post('/averagecost', function (req, response) {
// 	let mid = parseInt(req.body.mid);
// 	console.log(JSON.stringify(req.body));
// 	client.query("SELECT AVG(U.cost) FROM utilities U, utilitiesmanager UM WHERE U.uid = UM.uid AND UM.mid =" + mid, (err, res) => {
// 		if (err) {
// 			console.log(err);
// 			response.send({ result: null, info: 'find Avg cost unsuccessful' });
// 		} else {
// 			console.log('result avg send');
// 			response.send({ result: res });
// 		}
// 	})
// });

// app.post('/mostexpensive', function (req, response) {
// 	console.log(JSON.stringify(req.body));
// 	console.log('enter')
// 	let mid = parseInt(req.body.mid);
// 	client.query("SELECT MAX(U.cost) FROM utilities U, utilitiesmanager UM WHERE U.uid = UM.uid AND UM.mid =" + mid, (err, res) => {
// 		if (err) {
// 			console.log(err);
// 			response.send({ result: null, info: 'find Max util unsuccessful' });
// 		} else {
// 			console.log('result send');
// 			response.send({ result: res });
// 		}
// 	}
// 	)
// });
// app.post('/cheapest', function (req, response) {
// 	let mid = parseInt(req.body.mid);
// client.query("SELECT MIN(U.cost) FROM utilities U, utilitiesmanager UM WHERE U.uid = UM.uid AND UM.mid =" + mid, (err, res) => {
// 	if (err) {
// 		console.log(err);
// 		response.send({ result: null, info: 'find Min util unsuccessful' });
// 	} else {
// 		console.log('result send');
// 		response.send({ result: res });
// 	}
// }
// )
// });

// app.post('/assignedutility', function (request, response) {
// 	client.query("SELECT * FROM Utilities U WHERE NOT EXISTS ((SELECT M.mid FROM Manager M) EXCEPT (SELECT UM.mid FROM UtilitiesManager UM WHERE U.uid = UM.uid))", (err, res) => {
// 		if (err) {
// 			console.log(err);
// 			response.send({ result: null, info: 'find Min util unsuccessful' });
// 		} else {
// 			console.log('result send');
// 			response.send({ result: res });
// 		}
// 	});
// })
// app.post('/averagebudget', function (request, response) {
// 	let mid = request.body.mid;
// 	client.query("SELECT AVG(B.totalamount) FROM budget B, budgetmanager BM WHERE BM.bid = B.bid AND BM.mid =" + mid, (err, res) => {
// 		if (err) {
// 			console.log(err);
// 			response.send({ result: null, info: 'find Avg budget unsuccessful' });
// 		} else {
// 			console.log('result send');
// 			response.send({ result: res });
// 		}
// 	}
// 	)
// });
// app.post('/explainutilities', function (request, response) {
// 	let name = request.body.name;
// 	let res = null;
// 	let filter = 'MAX';
// 	if (request.body.radio === 'Min') {
// 		filter = 'MIN';
// 	}
// 	client.query("SELECT " + name + ", AVG(cost) FROM utilities GROUP BY " + name + "", (err, resp) => {
// 		if (err) {
// 			//console.log(err);
// 			response.send({ result: null, info: 'cannot group' });
// 		} else {
// 			res = resp;
// 			client.query("SELECT " + filter + "(avg) FROM (SELECT " + name + ", AVG(cost) FROM utilities GROUP BY " + name + ") T", (error, respo) => {
// 				if (error) {
// 					console.log(error);
// 					response.send({ result: null, info: 'cannot find max/min after grouping' });
// 				} else {
// 					let str = '';
// 					if (filter === 'MAX') {
// 						str = 'the max after grouping is ' + Math.round(respo.rows[0].max);
// 					} else if (filter === 'MIN') {
// 						str = 'the min after grouping is ' + Math.round(respo.rows[0].min);
// 					}
// 					// console.log('result send');
// 					// console.log(JSON.stringify(respo))
// 					response.send({ result: res, info: str });
// 				}
// 			})
// 		}
// 	}
// 	)
// });
// app.post('/updatecost', function (request, response) {
// 	console.log(JSON.stringify(request.body));
// 	let cost = parseInt(request.body.cost);
// 	let uid = parseInt(request.body.uid);
// 	client.query("UPDATE utilities SET cost = " + cost + " WHERE uid =" + uid, (err, res) => {
// 		if (err) {
// 			console.log('update unsuccessful');
// 			response.send({ result: null, info: 'update unsuccessful' });
// 		} else {
// 			client.query("SELECT * FROM utilities" + " WHERE uid =" + uid, (err, res) => {
// 				console.log('update successful');
// 				response.send({ result: res, info: 'update successful' });
// 			})
// 		}
// 	});
// });
// app.post('/seeutilities', function (request, response) {
// 	let uid = parseInt(request.body.uid);
// 	client.query("SELECT * FROM utilities" + " WHERE uid =" + uid, (err, res) => {
// 		console.log('update successful');
// 		response.send({ result: res, info: 'update successful' });
// 	})
// });




app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});