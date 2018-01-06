const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@GoPats2017",
    database: "burgers_db"
});


module.exports = db;