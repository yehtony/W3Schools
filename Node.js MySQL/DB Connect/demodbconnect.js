var mysql = require('mysql2'); //include mysql2(replace mysql) module to manipulate MySQL DB 


// Create connection to your database, your database info
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yehtony292968'
});

// DB connection
con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
});