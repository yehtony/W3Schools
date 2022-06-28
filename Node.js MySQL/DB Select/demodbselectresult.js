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
    var sql = `SELECT * FROM customers`;
    // Result object will return the query result
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log(result[15].name);
    });
});