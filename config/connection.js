var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({		
		host: "ysp9sse09kl0tzxj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "vxvpmzw9j9toxez2",
		password: "cd5bh9ihub1pjca1",
		database: "burgers_db"
	});
};

connection.connect();

module.exports = connection;
