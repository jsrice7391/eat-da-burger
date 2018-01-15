const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "burgers_db",
    use_env_variable: process.env.JAWSDB_URL
});

db.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + db.threadId);
});

module.exports = db;