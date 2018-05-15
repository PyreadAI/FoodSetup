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




app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});