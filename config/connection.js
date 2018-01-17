const mysql = require("mysql");
require("dotenv").config();

var connection;
if (process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //local host
    connection = mysql.createConnection({
        root: 3000,
        host: process.env.HOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: "burgers_db",
    });
};