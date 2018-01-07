const orm = require("../config/orm.js");



var burger = {
    newBurger: function(cols, vals, callback) {
        orm.addOne('burgers', cols, vals, function(res) {
            callback(res);
        });
    },
    allBurger: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });

    },
    oneBurger: function(id) {
        orm.selectOne("burgers", "id", id)
    },
    update: function(id, cb) {
        orm.update('burgers', id, function(res) {
            cb(res);


        });
    }
}




module.exports = burger;