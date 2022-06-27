var http = require('http'); //include 'http' module

/*creat a server object*/
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); //http header(server displays as html)
    res.end('Hello World!'); //end the response
 }).listen(9000);