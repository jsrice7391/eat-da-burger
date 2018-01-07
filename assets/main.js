$(document).ready(function() {

    get_the_items();


    // The original load of the items from the database
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


    // Clicking on the items and moving them to the eaten column
    $("#new").on("click", ".item", function() {
        var theData = $(this).attr("data");
        update_post(theData, "PUT");
    })



    $("#submit_new_burger").on("click", function(event) {
        event.preventDefault();
        const theNextOne = $("#burger").val().trim();

        if (theNextOne.length > 5) {
            post_new_burger(theNextOne);

        } else {
            alert("NO NO NO");
        }
    })


    // Moving the text to the unfinished column
    function update_post(theData) {
        $.ajax({
            type: "PUT",
            url: "/api",
            data: {
                the_id: parseInt(theData)
            }
        }).then(function() {
            get_the_items();
        })
    };


    // THe new post 
    function post_new_burger(name) {
        $.ajax({
            type: "POST",
            url: "/api",
            data: {
                new_name: name
            }
        }).then(function() {
            get_the_items();
        })
    };

})