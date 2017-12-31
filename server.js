var express = require("express");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");
var exphbs = require("express-handlebars");

var app = express();
var port = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.get("/", function(req, res) {
   orm.selectAll(res);
});

app.post("/newBurger", function(req, res){
    // console.log(req.body.burger);
    orm.insertOne(req.body.burger, res);
})


app.listen(port, function() {
    console.log("listening on port", port);
  });
  