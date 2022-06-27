var nodemailer = require('nodemailer'); //include nodemailer module for sending email

/*create transport for your server email*/
//service & auth should be your computer account info
var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'yehtony880208@outlook.com',
        pass: 'yehtony292968'
    }
});

//email info 
var mailOptions = {
    from: 'yehtony880208@outlook.com',
    //to: 'yexuanncu@gmail.com',
    to: 'yexuanncu@gmail.com, ttyehtony880208@gmail.com', //multiple receivers
    subject: 'Sending Email use Node.js from PC',
    //text: 'W3Schools Node.js Tutorials - Node.js Email => Send Email use Nodemailer Module'
    html: '<h1>W3Schools Node.js Tutorials - Node.js Email</h1><h3>Send Email use Nodemailer Module</h3>' //html format text
};

//email send
transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Email sent: ', info.response);
    }
});