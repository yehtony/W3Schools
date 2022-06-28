var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yehtony292968',
    database: 'w3schools_nodejs_mysql'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    var sql = `SELECT name, address FROM customers`;
    // Fleids object will return the info of result
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
        console.log(fields[1].db);
    });
});