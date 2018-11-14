var express = require("express");
var router = express.Router();
var app = express();
//var Article = require("../models/Article.js");
var logger = require("morgan");
var Promise = require("bluebird");
var request = require("request");
var cheerio = require("cheerio");

// var helper = require("../public/helpers.js");

/////  Routes  \\\\\
/////  ======  \\\\\

router.get("/", function(req, res) {
  res.render("index");
});

/*
router.get("/news", function(req,res) {
  Article.find().sort({"scrapeDate":-1}).exec( function(err, found){
    if(err) {
    } else {
      res.render("news",{found:found});
    }
  });
});

router.get("/news2", function(req,res) {
  Article.find().sort({"scrapeDate":-1}).exec( function(err, found){
    if(err) {
    } else {
      res.render("news2",{found:found});
    }
  });
});
*/

// router.get("/news", function(req,res) {
//   PinnedArticle.find().sort({"order":1}).exec( function(err, pinned)

//   Article.find().sort({"scrapeDate":-1}).exec( function(err, found){
//     if(err) {
//     } else {
//       res.render("news",{ pinned:pinned, found:found});
//     }
//   });
// });

router.get("/events", function(req, res) {
  res.render("events");
});

router.get("/donate", function(req, res) {
  res.render("donate");
});

router.get("/media", function(req, res) {
  res.render("media");
});

/*
router.post("/register", function(req, res) {
  console.log("req.body.userName == "+req.body.userName);
  console.log("req.body.email == "+req.body.email);
  console.log("req.body.password == "+req.body.password);
  User.register(new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  }))
});
*/

router.get("/family", function(req, res) {
  res.render("family");
});

module.exports = router;
