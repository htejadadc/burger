var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(columns, valuesArray, cb) {
		orm.create("burgers", columns, valuesArray, function(res) {
			cb(res);
		});
	},
	update: function(columnvals, condition, cb) {
		orm.update("burgers", columnvals, condition, function(res) {
			cb(res);
		});
	}	
};

module.exports = burger;
