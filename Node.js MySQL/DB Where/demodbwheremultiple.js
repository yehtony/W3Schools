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
    var name = 'Yehtony';
    var adr = 'Highway 71';
    // Multiple placeholders
    var sql = `SELECT * FROM customers WHERE name = ? OR address = ?`;
    con.query(sql, [name, adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});