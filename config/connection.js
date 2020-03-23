const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
    connection = mysql.createConnection({
        host: "gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "n3ky49399nwfw13g",
        password: "i1hutajn3g52dyq4",
        database: "rz6zhv2cujdbah8x"
    });
 }



connection.connect((err) => {
    if (err) {
        console.log(`error during connection: ${err.stack}`);
        return;
    } 
    console.log(`connected to ${connection.threadId}`);
});

module.exports = connection;