$(document).ready(function() {

    // Clicking on the items and moving them to the eaten column
    $(".change-status").on("click", function() {

        var theData = $(this).data("id");
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
            url: "/api/burgers",
            data: {
                the_id: parseInt(theData)
            }
        }).then(function() {
            console.log("Posted");
        })
    };


    // THe new post 
    function post_new_burger(name) {
        $.ajax({
            type: "POST",
            url: "/api/burgers",
            data: {
                new_name: name
            }
        }).then(function() {
            console.log("Posted");
        })
    };

})