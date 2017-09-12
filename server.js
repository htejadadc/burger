var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var routes = require("./controllers/burgers_Controller.js");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function() {
	console.log("Listening on Port: ", PORT);
});