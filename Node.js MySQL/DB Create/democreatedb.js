var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yehtony292968',
});

// Create DB
con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    con.query('CREATE DATABASE w3schools_nodejs_mysql', function (err, result) {
        if (err) throw err;
        console.log('Database created!');
    });
});