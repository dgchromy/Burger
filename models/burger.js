var orm = require("../config/orm");

var burger = {
    selectALL: function (cb) {

        orm.selectAll("burgers", cb);

    },
};

module.exports = burger;