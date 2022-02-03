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
  console.log("in tutees/active get router");
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
  console.log("in tutees/deactive get router");
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

router.put("/changeStatus/", (req, res) => {
  console.log("in /changeStatus", req.body.id);
  const queryString = `UPDATE "tutees" SET active_tutee = NOT active_tutee WHERE id=${req.body.id};`;
  pool
    .query(queryString)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log("changeStatus failed: ", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log("newTutorObject:", req.body);
  console.log("POST tutee route hit");
  const tuteeLanguageQuery = `
  INSERT INTO "language" ( "Spanish", "Somali", "Arabic", "Chinese", "Tagalog", "French", "Vietnamese", "Hmong", "Other" )
  VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING "id";`;
  pool
    .query(tuteeLanguageQuery, [
      req.body.Spanish,
      req.body.Somali,
      req.body.Arabic,
      req.body.Chinese,
      req.body.Tagalog,
      req.body.French,
      req.body.Vietnamese,
      req.body.Hmong,
      req.body.Other,
    ])
    .then((result) => {
      const languageTuteeId = result.rows[0].id;
      console.log("LanguageTuteeID:", languageTuteeId);
      const submissionTimestamp = new Date(Date.now()).toISOString();
      const insertTuteeQuery = `
              INSERT INTO "tutees" ("student_first_name", "student_last_name", "pronouns", "student_or_guardian", "email_guardian", "email_student", "phone", "grade_level", "school", "language_tutee_id", "subject_1", "subject_2", "subject_3", "subject_details", "misc_info", "submission_timestamp", "active_tutee", "matched"  )
              VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18 );`;
      pool
        .query(insertTuteeQuery, [
          req.body.firstName,
          req.body.lastName,
          req.body.pronouns,
          req.body.studentOrGuardian,
          req.body.emailGuardian,
          req.body.emailStudent,
          req.body.phone,
          req.body.gradeLevel,
          req.body.school,
          languageTuteeId,
          req.body.subject1,
          req.body.subject2,
          req.body.subject3,
          req.body.subjectDetails,
          req.body.miscInfo,
          submissionTimestamp,
          true,
          false,
        ])
        .then((result) => {
          res.sendStatus(201);
        })
        .catch((err) => {
          //CATCH FOR SECOND QUERY
          console.log("error posting to tutee table:", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      //CATCH FOR FIRST QUERY
      console.log("error posting to language table", err);
      res.sendStatus(500);
    });
});

module.exports = router;
