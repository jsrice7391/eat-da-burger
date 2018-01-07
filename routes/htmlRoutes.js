var path = require("path");
const db = require("../config/connection.js")



module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index")

    })

}