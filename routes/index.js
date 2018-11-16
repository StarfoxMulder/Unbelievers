var express = require("express");
var router = express.Router();
var app = express();
//var Article = require("../models/Article.js");
var logger = require("morgan");
var Promise = require("bluebird");
var request = require("request");
let Poll = require("./../models/poll");

// var helper = require("../public/helpers.js");

/////  Routes  \\\\\
/////  ======  \\\\\

/*
router.get("/", function(req, res) {
  res.render("index");
});
*/
router.get("/", function(req, res) {
  Poll.find().exec((err, polls) => {
    res.render("index", { polls: polls });
  });
});

router.get("/contact", function(req, res) {
  res.render("contact");
});

router.get("/donate", function(req, res) {
  res.render("donate");
});

router.get("/soundboard", function(req, res) {
  res.render("soundboard");
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

module.exports = router;
