var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "raga73=MS_17",
		database: "burgers_db"
	});
};

connection.connect();

module.exports = connection;