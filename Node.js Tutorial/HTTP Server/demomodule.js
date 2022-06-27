var http = require('http');
var dt = require('./myfirstmodule') //加入自創module

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<head><meta charset="utf-8"/></head>') //utf-8編碼(不然中文會是亂碼)
    res.write('The date and time are currently: ' + dt.myDateTime()); //write response to client(現在時間)
    res.end();
}).listen(9000);