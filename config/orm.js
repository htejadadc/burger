var connection = require("../config/connection.js");

function addMarkstorequest(length) {
	var qmarks  = [];
	for (i = 0; i < length; i++) {
		qmarks.push("?");
	}
	return qmarks.toString();
};

function addObjectsql(obj) {
	var objarr = [];
	for (var key in obj) {
		if (Object.hasOwnProperty.call(obj, key)) {
			objarr.push(key + "=" + obj[key]);
		}
	}
	return objarr.toString();
};

var orm = {
	all: function(tableName, cb) {
		var queryString = "SELECT * FROM " + tableName + ";";
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function(table, columns, valuesArray, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += columns.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += addMarkstorequest(valuesArray.length);
		queryString += ") ";
		connection.query(queryString, valuesArray, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	update: function(table, columnvals, condition, cb) {
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += addObjectsql(columnvals);
		queryString += " WHERE ";
		queryString += condition;
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	delete: function(table, condition, cb) {
		var queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;