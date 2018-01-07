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



    app.post("/api", function(req, res) {
        console.log(req.body);

        const newer = "INSERT INTO burgers (burger_name) VALUE (?);";
        db.query(newer, req.body.new_name, function(err, results) {
            if (err) throw err;
            return res.json(results);
        })
    })

    app.put("/api", function(req, res) {
        const updateQuer = "UPDATE burgers SET eaten = true WHERE id = " + parseInt(req.body.the_id) + ";";

        db.query(updateQuer, function(err, results) {
            if (err) throw err;
            return res.json(results);
        })



    })
}