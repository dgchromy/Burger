const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} 
else {
    connection = mysql.createConnection({
        host:"localhost",
        port: "3306",
        user: "	fg7y5m5gfqr9qoj9",
        password: "rv4tjxt7w8kly5et",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

module.exports = connection; 
