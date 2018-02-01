// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();


var connection;

if (process.env.JAWSDB_URL) {
    console.log("USING JAWS");
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: process.env.HOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: "burgers_db"
    });
}


// console.log("Here is the connection" + connection)


// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;