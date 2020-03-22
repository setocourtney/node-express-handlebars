const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.log(`error during connection: ${err.stack}`);
        return;
    } 
    console.log(`connected to ${connection.threadId}`);
});

module.exports = connection;