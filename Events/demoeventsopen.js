var fs = require('fs');
var rs = fs.createReadStream('demofile.txt'); //ReadStream object fires(trigger) events

/*Write to the console when the file is opened*/
rs.on('open', function () {
    console.log('The file is opened');
})