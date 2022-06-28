var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yehtony292968',
    database: 'w3schools_nodejs_mysql' // Add DB
});

// Create table & Alter table
con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    //var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))'; 
    var sql1 = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))'; // Create table
    var sql2 = 'ALTER TABLE customers ADD id INT AUTO_INCREMENT PRIMARY KEY'; // Alter table(add column)
    con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log('Table created!');
    });
    con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log('Table altered!');
    });
});