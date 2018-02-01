const connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
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
    update: function(table, condition, cb) {
        var queryString = "UPDATE burgers ";

        queryString += " SET eaten = true WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table + " WHERE " + condition + ";";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);


        })
    }
};





module.exports = orm;