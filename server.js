var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

// var db = require("./models");

var PORT = 3000;

var app= express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/mongoHeadlines", { userNewUrlParser: true});

app.get("/scrape", function(req, res) {
    axios.get("").then(function(response) {
        var $ = cheerio.load(response.data);
        $("article h2").each(function(i, element) {
            var result = {};
            
        }
    })
});

app.listen(PORT, function() {
    console.log("App running on port" + PORT + "!");
});