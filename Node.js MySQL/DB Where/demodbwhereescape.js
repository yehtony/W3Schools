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
    var adr = 'Taoyuan';
    // mysql.escape() methods will escape query values(prevent SQL injections)
    var sql1 = `SELECT * FROM customers WHERE address =` + mysql.escape(adr);
    var sql2 = `SELECT * FROM customers WHERE address = ?`;
    con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    con.query(sql2, [adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});