const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
require("dotenv").config();
const cors = require("cors");
const nodemailer = require("nodemailer");

/**
 * POST route template
 */
router.post("/", cors(), async (req, res) => {
  console.log("email post route hit");
  console.log(req.body.email);
  let email = req.body.email;

  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "202a8468949e33",
      pass: "39db06ed4c2ca5",
    },
  });

  let info = await transporter
    .sendMail({
      from: "miriammcnamara@icloud.com",
      to: `${email}`,
      subject: "test email",
      text: "Thank you so much for contacting Living Room Tutors! This is a test. Thanks again, Living Room Tutors.",
      html: `<div className="email" >
      <h2>Thank you so much for contacting Living Room Tutors!</h2>
      <p>This is a test.</p>
      <p>Thanks again, Living Room Tutors</p>
    </div>`,
    })
    .catch(console.error);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = router;
