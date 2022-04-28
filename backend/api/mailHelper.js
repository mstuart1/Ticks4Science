// require("dotenv").config();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "127.0.0.1",
  port: 25,
  secure: false,
  // service: "gmail",
  // auth: {
  //   user: process.env.MAIL_USER,
  //   pass: process.env.MAIL_PASS,
  // },
});

exports.sendMail = async (email, message) => {
    let mailOptions = {
    //   from: process.env.MAIL_USER,
      to: email,
      subject: "Tick System Message",
      html: `<p>${message}</p>`,
    };
  
    await transporter
      .sendMail(mailOptions)
      .then((info) => {
        // console.log(mailOptions)
        return console.log(`Email sent: ${info.response}`);
      })
      .catch((error) => {
        return console.log(error);
      });
  };