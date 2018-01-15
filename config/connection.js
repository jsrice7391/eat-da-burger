const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "burgers_db",
    use_env_variable: process.env.JAWSDB_URL
});


module.exports = db;