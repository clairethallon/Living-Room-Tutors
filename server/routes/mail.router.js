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
  console.log(req.body);
  let { email } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "test@test.com",
    subject: "test email",
    html: `<div className="email">
      <h2>Thank you so much for contacting Living Room Tutors!</h2>
      <p>An admin is reviewing your submission. You should hear back from us shortly.</p>
      <p>Thanks again, Living Room Tutors</p>
    </div>`,
  });
});

module.exports = router;
