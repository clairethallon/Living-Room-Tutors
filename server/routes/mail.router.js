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
    "1//04lwwFNn-S9yTCgYIARAAGAQSNwF-L9IrJsLTDCMcZ6LH_lSBeM56LfTsroka__l0sXFsMy7OweyrOHppSUcCj2xwr73OQs9lwfA",
};

oauth2Client.setCredentials({
  refresh_token:
    "1//04lwwFNn-S9yTCgYIARAAGAQSNwF-L9IrJsLTDCMcZ6LH_lSBeM56LfTsroka__l0sXFsMy7OweyrOHppSUcCj2xwr73OQs9lwfA",
});

const accessToken = oauth2Client.getAccessToken();

router.post("/", cors(), async (req, res) => {
  console.log("email post route hit");
  console.log(req.body.email);
  let email = req.body.email;

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

  let info = await transporter
    .sendMail({
      from: gconfig.mailUser,
      to: `${email}`,
      subject: "Thank You For Contacting Living Room Tutors!",
      text: "Thank you so much for submitting an application to Living Room Tutors! An administrator is reviewing your application and will be in touch with you soon. If you have any questions in the meantime, please email livingroomtutor@gmail.com. Thank you so much! Living Room Tutors",
      html: `<div className="email" >
      <h3>Thank you so much for contacting Living Room Tutors!</h3>
      <p>An administrator is reviewing your application and will be in touch with you soon.</p>
      <p>If you have any questions in the meantime, please email livingroomtutor@gmail.com.</p>
      <p>Thanks again!</p>
      <h3>Living Room Tutors</h3>
    </div>`,
    })
    .catch(console.error);
  // console.log("Message sent: %s", info.messageId);
});

module.exports = router;
