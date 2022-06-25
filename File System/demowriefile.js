var fs = require('fs')

/*write file content 'Hello comtent!', if file not exist then create the file*/
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
})

/*replace the file content*/
fs.writeFile('mynewfile3.txt', 'Replace content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
})