var http = require('http');
var fs = require('fs') //include filesystem module

http.createServer(function (req, res) {
    /*read file*/
    // fs.readFile('demofile1.html', function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // });
    var data = fs.readFileSync('demofile.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
}).listen(9000);