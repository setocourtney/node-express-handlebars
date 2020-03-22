const orm = require("../config/orm.js");

const burgers = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res, err) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: (newName, cb) => {
        orm.insertOne("burgers", "burger_name", newName, (res, err) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: (newObj, updateId, cb) => {
        orm.updateOne("burgers", newObj, "id", updateId, (res, err) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = burgers;
