var path = require("path");
const db = require("../config/connection.js");
const burger = require("../models/burger.js");




module.exports = function(app) {

    app.get("/", function(req, res) {
        burger.allBurger(function(data) {
            var hbsObject = { burgers: data };
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burgers", function(req, res) {
        burger.newBurger(["burger_name"], [req.body.new_name], function(result) {
            console.log(result.insertId)
            res.json({ id: result.insertId });
        });
    });

    app.put("/api/burgers", function(req, res) {
        let condition = "id = " + req.body.the_id;

        console.log("condition", condition);

        burger.update(condition, function(result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })


    app.delete("/api/burgers", function(req, res) {
        var condition = "id = " + req.body.the_id;
        burger.delete(condition, function(err, result) {
            res.status(200).end();

        });

    })
}