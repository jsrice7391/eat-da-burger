const connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

const orm = {
    addOne: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, results) {
            if (err) throw err;
            callback(results);
        })
    },
    selectAll: function(tableToSearch, callBack) {
        let queryString = "SELECT * FROM burgers_db.burgers;";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            callBack(results);
        })

    },
    selectOne: function(tableToSearch, parameter, theId) {
        let queryString = "SELECT * FROM ? WHERE  ?? = ?";
        connection.query(queryString, [tableToSearch, parameter, theId], function(err, results) {
            if (err) throw err;
            return results;
        })
    },
    updateOne: function(tableName, param, value, trackedValue, newValue) {
        const updateQuer = "UPDATE ?? SET ?? = ?? WHERE ?? = ? ;";

        connection.query(updateQuer, [tableName, param, value, trackedValue, newValue], function(err, results) {
            if (err) throw err;
            return results;
        })

    }
}




module.exports = orm;