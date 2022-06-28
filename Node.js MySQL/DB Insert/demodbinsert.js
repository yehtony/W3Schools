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
    var sql = `INSERT INTO customers (name, address) VALUES('Company Inc', 'Highway 37')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('1 record inserted');
    });
});