const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || 3000, function(req, res){
  console.log("server is running on 3000 ")
});

//
// 1f3eab003b50b1a336d705c1ca97beb2-us14
// audience id
// 4b2507afba
