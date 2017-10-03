var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'p.kavithacs@gmail.com',
    pass: 'hatelove@2'
  }
});

var mailOptions = {
  from: 'p.kavithacs@gmail.com',
  to: 'p.kavithacs@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});