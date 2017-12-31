var connection = require("./connection.js");
var express = require("express");

var orm = {
    selectAll: function(res){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err,result){
            if (err) {
                return result.status(500).end();
            }
    
            res.render("index", { burgers: result });
        })
    },
    insertOne: function(newBurger, res){
        var queryString = "INSERT INTO burgers SET ?";

        connection.query(queryString, {
            burger_name: newBurger
        }, function(err, result){
            if (err) {
                return result.status(500).end();
            }

            res.render("index", { burgers: result });
        })
    },
    updateOne: function (burger_id, res){
        var queryString = "UPDATE burgers SET ? WHERE ?";

        connection.query(queryString, 
            [  
                {
                    devoured: "1",
                },
                {
                    id: burger_id,
                }
            ], 
            function(err, result){
            if (err) {
                return result.status(500).end();
            }

            res.render("index", { burgers: result});
        })
    }
}


module.exports = orm;