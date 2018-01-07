var path = require("path");
const db = require("../config/connection.js");



module.exports = function(app) {
    app.get("/api", function(req, res) {
        const get_em = "SELECT * FROM burgers";
        db.query(get_em, function(err, results) {
            if (err) throw err;
            res.json(results);
        })

    })

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