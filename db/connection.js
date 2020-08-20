const mysql = require("mysql");

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "15105Touchdownmysql!",
    database: "employees_db"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL");
  });

  module.exports = connection;