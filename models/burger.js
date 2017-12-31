$("#submit").on("click", function(event){
    event.preventDefault();

    var burger = $("#newBurger").val().trim();
    console.log(burger);
})

console.log("connected to javascript");