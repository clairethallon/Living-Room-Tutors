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
  console.log('in tutees/active get router');
  const query = `SELECT 
  tutee.id,
  student_first_name AS tutee_firstname,
student_last_name AS tutee_lastname,
pronouns AS tutee_pronouns,
student_or_guardian,
email_guardian,
email_student,
phone AS tutee_phone,
grade_level AS tutee_grade,
school AS tutee_school,
subject_other AS tutee_subject_other,
subject_details AS tutee_subject_details,
misc_info AS tutee_misc_info,
submission_timestamp AS tutee_submission_timestamp,
active_tutee,
language_tutee_id,
language."Arabic" AS tutee_language_Arabic,
language."Chinese" AS tutee_language_Chinese,
language."French" AS tutee_language_French,
language."Hmong" AS tutee_language_Hmong,
language."Somali" AS tutee_language_Somali,
language."Tagalog" AS tutee_language_Tagalog,
language."Vietnamese" AS tutee_language_Vietnamese,
language."Spanish" AS tutee_language_Spanish,
language."Other" AS tutee_language_Other,
matched AS tutee_matched,
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
  console.log('in tutees/deactive get router');
  const query = `SELECT 
  tutee.id,
  student_first_name AS tutee_firstname,
student_last_name AS tutee_lastname,
pronouns AS tutee_pronouns,
student_or_guardian,
email_guardian,
email_student,
phone AS tutee_phone,
grade_level AS tutee_grade,
school AS tutee_school,
subject_other AS tutee_subject_other,
subject_details AS tutee_subject_details,
misc_info AS tutee_misc_info,
submission_timestamp AS tutee_submission_timestamp,
active_tutee,
language_tutee_id,
language."Arabic" AS tutee_language_Arabic,
language."Chinese" AS tutee_language_Chinese,
language."French" AS tutee_language_French,
language."Hmong" AS tutee_language_Hmong,
language."Somali" AS tutee_language_Somali,
language."Tagalog" AS tutee_language_Tagalog,
language."Vietnamese" AS tutee_language_Vietnamese,
language."Spanish" AS tutee_language_Spanish,
language."Other" AS tutee_language_Other,
matched AS tutee_matched,
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
