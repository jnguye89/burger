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