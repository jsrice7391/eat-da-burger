var path = require("path");
const db = require("../config/connection.js")



module.exports = function(app) {
    app.get("/", function(req, res) {
        db.query("SELECT * FROM burgers", function(err, results) {
            if (err) throw err;

            res.render("index", { burgers: results });

        })

    })
}