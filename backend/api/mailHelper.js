require("dotenv").config();
const cron = require('node-cron')
const nodemailer = require("nodemailer");
const db = require("../models");
const Subm = db.submission;
const Users = db.users;
const { Op } = require("sequelize");

let transporter = nodemailer.createTransport({
  host: "smtp.rutgers.edu",
  port: 25, //  25 587 465
  secure: false, // false unless port is 465
  auth: {
    user: process.env.MAIL_SEND,
    pass: process.env.MAIL_SECRET,
  },
  logger: true,
});

// console.log(
//   "!!!!! @@@@@ -----  transporter",
//   JSON.stringify(transporter.options, null, 1)
// );

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// send an email every day at noon if pending subs
cron.schedule("00 05 * * *", async () => {
  console.log(`@@@@---running cron job---@@@@`)
  try {
    let pending = await Subm.findAll({
      where: {
        [Op.or]: [
          {photosReviewed: null},
          {[Op.and]: [
            {specimenReceived: {[Op.not]: null}}, 
            {specimenIdentified: null}
          ]}
        ]
        
      }
    })
    
    if (pending.length > 0) {
      let recipients = await Users.findAll({where: { emailAlerts: true}, attributes: ["email"]})
      let emails = recipients.map(email => email.email)
      let message = `There are tick submissions waiting for review at <a href='${process.env.CORS_ORIGIN}/admin'>Ticks4Science!</a>`
  
      let mailOptions = {
        to: emails,
        from: process.env.MAIL_USER,
        subject: "Tick System Message",
        html: `<p>${message}</p>`,
      };
      // Send email
      transporter
        .sendMail(mailOptions)
        .then((info) => {
          console.log(`@@@@---Email sent to ${emails}---@@@@`)
          return console.log(`Email sent: ${info.response}`);
        })
        .catch((err) => {
          console.log(`@@@@@Email errors!!!@@@@@@`);
          return console.log(err.message);
        });
    
    }
   
  } catch (err) { 
    console.log(`email error`, err.message)
  } 
})

exports.mailUser = async (email, subject, message) => {
  console.log('mail user message', message)
  let mailOptions = {
      from: process.env.MAIL_USER,
    to: email,
    subject: subject,
    html: message,
  };

  console.log('mailOptions', mailOptions)
  await transporter
    .sendMail(mailOptions)
    .then((info) => {
      return console.log(`Email sent: ${info.response}`);
    })
    .catch((error) => {
      return console.log('email error', error);
    });
};


exports.sendMail = async (email, message) => {
  console.log('send mail message', message)
  let mailOptions = {
      from: process.env.MAIL_USER,
    to: email,
    subject: "Tick System Message",
    html: message,
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