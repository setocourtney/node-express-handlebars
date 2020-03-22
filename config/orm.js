const connection = require("./connection.js");

let orm = {
    selectAll: (table, cb) => {
        let query = `SELECT * FROM ??`;
        connection.query(query, table, (res, err) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: (table, cols, vals, cb) => {
        let query = `INSERT INTO ?? (${cols}) VALUES (${vals}))`;
        connection.query(query, [table], (res, err) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: (table, newVals, col, criteria, cb) => {
        let query = `UPDATE ?? SET ${newVals} WHERE ?=?`
        connection.query(query, [table, col, criteria], (res, err) => {
            if (err) throw err;
            cb(err);
        });
    }
};

module.exports = orm;