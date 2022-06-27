var fs = require('fs')

/*append filecontent 'Hello content!', if file not exist then create the file */
fs.appendFile('mynewfile.txt', 'Hello content!\n', function (err) {
    if (err) throw err;
    console.log('saved!');
})

/* append content*/
fs.appendFile('mynewfile.txt', 'New append content!\n', function (err) {
    if (err) throw err;
    console.log('saved!');
})