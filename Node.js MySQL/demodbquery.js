var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yehtony292968',
});

// Example format for DB query, 'sql' should be sql syntax (ex. SELECT * FROM...)
con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Result: ' + result);
    });
});