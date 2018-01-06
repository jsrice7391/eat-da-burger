var path = require("path");
const db = require("../config/connection.js");



module.exports = function(app) {
    app.get("/api", function(req, res) {

        const query = "SELECT * FROM burgers";
        db.query(query, function(err, results) {
            if (err) throw err;
            res.json(results);
        })

    })
}