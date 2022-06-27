var url = require('url'); //include url module

var adr = 'http://localhost:9000/default.htm?year=2022&month=June';
var q = url.parse(adr, true);

console.log(q.host); //retuen 'localhost:9000'
console.log(q.pathname); //retuen '/default.htm'
console.log(q.search); //return '?year=2017&month=July

var qdata = q.query; //return an object: { year : 2017, month : June }
console.log(qdata.month); //return 'June'