$(document).ready(function() {

    get_the_items();


    console.log("Winner winner");


    function get_the_items() {
        $("#new").empty();
        $("#eaten").empty();

        $.ajax({
            type: "GET",
            url: "/api",
        }).done(function(results) {
            $.each(results, function(index, burger) {
                if (burger.eaten == 0) {
                    $("#new").append("<li class='item' data='" + burger.id + "'>" + burger.id + " " + burger.burger_name + "</li>");
                } else {
                    $("#eaten").append("<li class='item' data='" + burger.id + "'>" + burger.id + " " + burger.burger_name + "</li>");
                }
            });
        });
    }



    $("#new").on("click", ".item", function() {
        var theData = $(this).attr("data");
        console.log(theData);

        update_post(theData);

    })

    function update_post(theData) {
        $.ajax({
            type: "POST",
            url: "/api",
            data: {
                the_id: parseInt(theData)
            }
        }).then(function() {

            get_the_items();
        })
    }



});