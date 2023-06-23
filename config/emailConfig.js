const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    outlookEmail: process.env.MAIL,
    outlookPassword: process.env.MAIL_PWD,
  },
});

module.exports=transporter
