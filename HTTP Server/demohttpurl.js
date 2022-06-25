var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var url2 = req.url.slice(1) //part of the url comes after the domain name(扣除'/')
    res.write(url2); //寫入url
    res.end();
}).listen(9000);