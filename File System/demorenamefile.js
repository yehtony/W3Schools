var fs = require('fs');

fs.appendFile('mynewfile4.txt',"",function(){});

/*rename file 'mynewfile.txt' => 'myrenamedfile.txt'*/
fs.rename('mynewfile4.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File renamed!');
})