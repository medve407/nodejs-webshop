var mysql 	   = require('mysql');
// Set some basic options for mysql conenction.
var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodejs'
});
// Connect to the database
con.connect();
// Open the connection to the database.
export = con;