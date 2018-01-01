var express = require("express");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");
var exphbs = require("express-handlebars");
var path = require("path");

var app = express();
var port = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.get("/", function(req, res) {
   orm.selectAll(res);
});

app.post("/newBurger", function(req, res){
    // console.log(req.body.burger);
    orm.insertOne(req.body.burger, res);
    // res.redirect("/");
})

app.post("/devoured", function(req, res){
    // console.log(req.body.id);
    orm.updateOne(req.body.id, res);
    // res.redirect("/");
})

app.post("/devoureAgain", function(req, res){
    // console.log(req.body.id);
    orm.updateOneAgain(req.body.id, res);
    // res.redirect("/");
})

app.listen(port, function() {
    console.log("listening on port", port);
   
  });
  