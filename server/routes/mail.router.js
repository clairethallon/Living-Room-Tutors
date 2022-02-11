const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
require("dotenv").config();
const cors = require("cors");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

let mailOptions = {
  from: "test@gmail.com",
  to: process.env.EMAIL,
  subject: "Nodemailer API",
  text: "Hi from your nodemailer API",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});

/**
 * POST route template
 */
// router.post("/", cors(), async (req, res) => {
//   console.log("email post route hit");
//   console.log(req.body.email);
//   let email = req.body.email;

//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "stars4mimi@gmail.com",
//       pass: "fatfarley",
//     },
//   });

//   let info = await transporter
//     .sendMail({
//       from: "miriammcnamara@icloud.com", //not showing up in email
//       to: `${email}`,
//       subject: "test email",
//       text: "Thank you so much for contacting Living Room Tutors! This is a test. Thanks again, Living Room Tutors.",
//       html: `<div className="email" >
//       <h2>Thank you so much for contacting Living Room Tutors!</h2>
//       <p>This is a test.</p>
//       <p>Thanks again, Living Room Tutors</p>
//     </div>`,
//     })
//     .catch(console.error);
//   // console.log("Message sent: %s", info.messageId);
// });

module.exports = router;
