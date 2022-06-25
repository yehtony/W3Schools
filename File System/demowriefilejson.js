var fs = require('fs')

var a = '{"a": "A", "b": "B"}'
fs.writeFile('mynewfile3.json', String(a), function (err) {
    if (err) throw err;
    console.log('Saved!');
})

