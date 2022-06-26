var http = require('http');
var formidable = require('formidable'); //for update file
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        /*file save and move*/
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) { //file temporary saved
            var oldpath = files.filetoupload.filepath;
            var newpath = files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) { //file move to newpath
                if (err) throw err;
                res.write('File uploaded and saved!');
                res.end();
            });
            res.write('File uploaded and saved!');
            res.end();
        });
    }
    else {
        /*file upload*/
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF8' })
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">'); //enctype specifies fow form-data be encoded when submit to server, "multipart/form-data" for upload file
        res.write('<input type="file" name="filetoupload"<br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(9000);