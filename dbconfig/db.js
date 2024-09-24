let mysql = require("mysql2");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "madhavi0908@",
    database: "dbsept",
});

connection.connect((err,con)=>{
    if(err) throw err;
    //console.log("connected");
});

module.exports = connection;