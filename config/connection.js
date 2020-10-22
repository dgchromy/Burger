const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} 
else {
    conncetion = mysql.createConnection({
        host:"localhost",
        port: "3306",
        user: "",
        password: "",
        database: "burger_db"
    });
};

conncetion.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

module.exports = connection; 
