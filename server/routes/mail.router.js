const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { config } = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");

const { google } = require("googleapis");

router.post("/", cors(), async (req, res) => {
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();

  console.log("email post route hit");
  console.log(req.body.email);
  let email = req.body.email;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USER,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  let info = await transporter
    .sendMail({
      from: process.env.MAIL_USER,
      to: `${email}`,
      subject: "Thank You For Contacting Living Room Tutors!",
      text: "Thank you so much for submitting an application to Living Room Tutors! An administrator is reviewing your application and will be in touch with you soon. If you have any questions in the meantime, please email team@livingroomtutors.com. Thank you so much! Living Room Tutors",
      html: `<div className="email" >
      <h3>Thank you so much for contacting Living Room Tutors!</h3>
      <p>An administrator is reviewing your application and will be in touch with you soon.</p>
      <p>If you have any questions in the meantime, please email team@livingroomtutors.com.</p>
      <p>Thanks again!</p>
      <h3>Living Room Tutors</h3>
    </div>`,
    })
    .catch(console.error);
  res.send('meow');
  // console.log("Message sent: %s", info.messageId);
});

module.exports = router;
