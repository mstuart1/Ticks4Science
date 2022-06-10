require("dotenv").config();
const cron = require('node-cron')
const nodemailer = require("nodemailer");
const db = require("../models");
const Subm = db.submission;
const Users = db.users;
// const { Op } = require("sequelize");

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

// send an email every day at noon if pending subs
cron.schedule("09 15 * * *", async () => {
  
  let pending = await Subm.findAll({
    where: {
      specimenIdentified: null
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
 
  
})


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