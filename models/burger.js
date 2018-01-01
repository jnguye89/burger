// var orm = require("./config/orm.js");

$("#submit").on("click", function(event){
    event.preventDefault();

    var burger = {
      burger: $("#newBurger").val().trim(),
    }

    $.post("/newBurger", burger, function(data){
        location.reload();

    })
})

$(".devBurger").on("click", function(event){
    event.preventDefault();

    var burgerID = {
        id: $(this).attr("data-burgerid"),
    }

    $.post("/devoured", burgerID, function(data){
        location.reload();
    })
})

// data-burgeridAgain="{{this.id}}" class="devBurgerAgain"

$(".devBurgerAgain").on("click", function(event){
    event.preventDefault();

    var burgerID = {
        id: $(this).attr("data-burgeridAgain"),
    }

    $.post("/devoureAgain", burgerID, function(data){
        location.reload();
    })
    
})


console.log("connected to javascript");