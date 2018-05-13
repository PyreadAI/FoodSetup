const { Client } = require('pg');
var crypto = require('crypto');
const client = new Client({
	connectionString: 'postgres://zdihimvhaggjef:49a9e5e7e95cd18cb79a87371fa43d1b7693a671ddc55018d1764adf69789313@ec2-174-129-41-64.compute-1.amazonaws.com:5432/deaqpbge7arr4n',

	ssl: true
});

client.connect();
// export interface User{
//   uuid:string,
//   email:string,
//   password:string,
//   name:string,
//   salt:string
// }

// 'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)'
// client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT not null, email TEXT not null, salt TEXT not null,password TEXT not null)', (err, res) => {
//   if (err) {
//     console.log(err);

//   } else {
//     console.log('insert success');
//   }
// });
// client.query('DROP TABLE users', (err, res) => {
//   if (err) {
//     console.log(err);

//   } else {
//     console.log('drop success');
//   }
// });
// const text = 'INSERT INTO users(name, email,salt,password) VALUES($1, $2, $3, $4)'
// const values = ['ew', 'nw@gnew.com','sdf','sdfsdfsd']
// client.query(text,values, (err, res) => {
  // if(err){
  //   console.log(err);
  // }else{
  //   console.log(JSON.stringify(res))
  // }
// });

// client.query('SELECT * from users', (err, res) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(JSON.stringify(res.rows))
//   }
// });
// function validatePassword(pw) {
// 	let hash = crypto.pbkdf2Sync('12', res.rows[0].salt, 1000, 64, 'sha512').toString('hex');
// 	//get hash from db
// 	return this.hash === hash;
// }
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
	} else {
		console.log(JSON.stringify(res.rows[0]));
    // response.send({ result: res });
    let pw = '12';
    let newpassword = crypto.pbkdf2Sync(pw, res.rows[0].salt, 1000, 64, 'sha512').toString('hex');
    //get hash from db
    let str = res.rows[0].password === newpassword? 'true':'false';
    console.log(str);
	}
}
)

// client.query('SELECT * from coach', (err, res) => {
//   console.log(err,res)
// });

// client.query('SELECT * from player', (err, res) => {
//   console.log(err,res)
// });

// client.query('SELECT * from budget', (err, res) => {
//   console.log(err,res)
// });

// client.query('SELECT * from utilities', (err, res) => {
//   console.log(err,res)
// });


// Result {
//   command: 'SELECT',
//   rowCount: 15,
//   oid: null,
//   rows:
//    [ anonymous { id: 1, name: 'manager1', phonenumber: '1111111111' },
//      anonymous { id: 2, name: 'manager2', phonenumber: '2222222222' },
//      anonymous { id: 3, name: 'coach3', phonenumber: '3333333333' },
//      anonymous { id: 4, name: 'coach4', phonenumber: '4444444444' },
//      anonymous { id: 5, name: 'coach5', phonenumber: '5555555555' },
//      anonymous { id: 6, name: 'coach6', phonenumber: '6666666666' },
//      anonymous { id: 7, name: 'player7', phonenumber: '7777777777' },
//      anonymous { id: 8, name: 'player8', phonenumber: '8888888888' },
//      anonymous { id: 9, name: 'player9', phonenumber: '9999999999' },
//      anonymous { id: 10, name: 'player10', phonenumber: '1010101010' },
//      anonymous { id: 11, name: 'player11', phonenumber: '1111111111' },
//      anonymous { id: 12, name: 'player12', phonenumber: '1212121212' },
//      anonymous { id: 13, name: 'player13', phonenumber: '1313131313' },
//      anonymous { id: 14, name: 'player14', phonenumber: '1414141414' },
//      anonymous { id: 6652, name: 'a', phonenumber: 'undefined' } ],
//   fields:
//    [ Field {
//        name: 'id',
//        tableID: 7699797,
//        columnID: 1,
//        dataTypeID: 23,
//        dataTypeSize: 4,
//        dataTypeModifier: -1,
//        format: 'text' },
//      Field {
//        name: 'name',
//        tableID: 7699797,
//        columnID: 2,
//        dataTypeID: 25,
//        dataTypeSize: -1,
//        dataTypeModifier: -1,
//        format: 'text' },
//      Field {
//        name: 'phonenumber',
//        tableID: 7699797,
//        columnID: 3,
//        dataTypeID: 25,
//        dataTypeSize: -1,
//        dataTypeModifier: -1,
//        format: 'text' } ],
//   _parsers:
//    [ [Function: parseInteger],
//      [Function: noParse],
//      [Function: noParse] ],
//   RowCtor: [Function: anonymous],
//   rowAsArray: false,
//   _getTypeParser: [Function: bound ] }