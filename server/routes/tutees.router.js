const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */

router.get("/", (req, res) => {
  const query = `SELECT * FROM tutees
  ORDER BY submission_timestamp ASC;
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get test", err);
      res.sendStatus(500);
    });
});

router.get("/active", (req, res) => {
  const query = `SELECT 
  tutee.id,
  student_first_name,
student_last_name,
pronouns,
student_or_guardian,
email_guardian,
email_student,
grade_level,
school,
subject_other,
subject_details,
misc_info,
submission_timestamp,
active_tutee,
language_tutee_id,
language."Arabic",
language."Chinese",
language."French",
language."Hmong",
language."Somali",
language."Tagalog",
language."Vietnamese",
language."Spanish",
language."Other",
matched,
Subject1.subject AS subject_1, 
Subject2.subject AS subject_2,
  Subject3.subject AS subject_3
  FROM tutees AS tutee
  inner join subjects_tutees AS Subject1 on Subject1.id = tutee.subject_1
   inner join subjects_tutees AS Subject2 on Subject2.id = tutee.subject_2
    inner join subjects_tutees AS Subject3 on Subject3.id = tutee.subject_3
  JOIN "language" ON tutee.language_tutee_id = "language".id
  WHERE tutee.active_tutee = true and tutee.matched = false
  ORDER BY submission_timestamp ASC;`;

  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get test", err);
      res.sendStatus(500);
    });
});

router.get("/deactive", (req, res) => {
  const query = `SELECT 
  tutee.id,
  student_first_name,
student_last_name,
pronouns,
student_or_guardian,
email_guardian,
email_student,
grade_level,
school,
subject_other,
subject_details,
misc_info,
submission_timestamp,
active_tutee,
language_tutee_id,
language."Arabic",
language."Chinese",
language."French",
language."Hmong",
language."Somali",
language."Tagalog",
language."Vietnamese",
language."Spanish",
language."Other",
matched,
Subject1.subject AS subject_1, 
Subject2.subject AS subject_2,
  Subject3.subject AS subject_3
  FROM tutees AS tutee
  inner join subjects_tutees AS Subject1 on Subject1.id = tutee.subject_1
   inner join subjects_tutees AS Subject2 on Subject2.id = tutee.subject_2
    inner join subjects_tutees AS Subject3 on Subject3.id = tutee.subject_3
  JOIN "language" ON tutee.language_tutee_id = "language".id
  WHERE tutee.active_tutee = false and tutee.matched = false
  ORDER BY submission_timestamp ASC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get test", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
