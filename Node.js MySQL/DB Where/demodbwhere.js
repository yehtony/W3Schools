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
    var sql1 = `SELECT * FROM customers WHERE address = 'Taoyuan'`;
    // <str>% use to select result begin with <str>
    var sql2 = `SELECT * FROM  customers WHERE address LIKE 'S%'`; 
    con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});