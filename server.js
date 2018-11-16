var express = require("express");
var bodyParser = require("body-parser");
// var router = require('./controllers/controller.js');
var methodOverride = require("method-override");
var path = require("path");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");
var Promise = require("bluebird");
var app = express();
var PORT = process.env.PORT || 3000;
//let Poll = require("./../models/poll");

mongoose.Promise = Promise;

// Setting up express
app.use(express.static("./public"));
app.use(methodOverride("_method"));

//Body-Parser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Setting up handlebars

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Configuring protected_dust database
var databaseUri = "mongodb://localhost/unbelievers";
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  /////  DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/4.x/docs/connections.html#use-mongo-client
  console.log("Mongoose connection successful.");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var routes = require("./routes/index.js");
app.use("/", routes);
app.use("/polls", routes);
app.use("/soundboard", routes);
app.use("/contact", routes);
app.use("/donate", routes);
app.use("/PollResultsForUs", routes);

// Start mongoDB
// "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"
//
// Connect to MongoDB
// "C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"
