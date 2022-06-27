var http = require('http');
var url = require('url'); //include url module

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query; //split query string into readible parts(url)
    var txt = q.year + ' ' + q.month;
    res.end(txt);
}).listen(9000);