//Import orm into burger.js
const orm = require("..config/orm.js");

//Create the code that will call the ORM functions using burger specific input for the ORM
const burger = {
    all(cb) {
        orm.all("burgers", (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.udate("burgers", objColVals, condition, (res) => cb(res));
    },

};
// Export at the end of the `burger.js` file
module.exports = burger;