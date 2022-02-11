const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { config } = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  "974624020655-keep76op2bshp75g2dufkih1rkt1p1cf.apps.googleusercontent.com",
  "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",
  "https://developers.google.com/oauthplayground"
);

const gconfig = {
  mailUser: "noreply.livingroomtutors@gmail.com",
  clientId:
    "974624020655-keep76op2bshp75g2dufkih1rkt1p1cf.apps.googleusercontent.com",
  clientSecret: "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",
  refreshToken:
    "1//04FfHgyNFP33qCgYIARAAGAQSNwF-L9IrvntuCyXKwqxHVdeskB1L19PeRPs7GEPFc5drcGsf5Xtv_x63BD0OyceuK3kslVS12sc",
};

oauth2Client.setCredentials({
  refresh_token:
    "1//04FfHgyNFP33qCgYIARAAGAQSNwF-L9IrvntuCyXKwqxHVdeskB1L19PeRPs7GEPFc5drcGsf5Xtv_x63BD0OyceuK3kslVS12sc",
});

const accessToken = oauth2Client.getAccessToken();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: gconfig.mailUser,
    clientId: gconfig.clientId,
    clientSecret: gconfig.clientSecret,
    refreshToken: gconfig.refreshToken,
    accessToken: accessToken,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

let mailOptions = {
  from: "test@gmail.com",
  to: gconfig.mailUser,
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
//       user: "blahblah@gmail.com",
//       pass: "blooper",
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
