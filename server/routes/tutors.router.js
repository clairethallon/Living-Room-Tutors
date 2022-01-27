const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */

router.get("/", (req, res) => {
  console.log('in tutors.router/get');
  const query = `SELECT * FROM tutors`;
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
  const query = `  SELECT *, 
  "1st",
 "2nd",
 "3rd",
 "4th",
 "5th",
 "6th",
 "7th",
 "8th",
 "9th",
 "10th",
 "11th",
 "12th",
 language."Arabic",
 language."Chinese",
 language."French",
 language."Hmong",
 language."Somali",
 language."Tagalog",
 language."Vietnamese",
 language."Spanish",
 language."Other"
  FROM tutors
   JOIN subjects_tutors ON tutors.subjects_id = subjects_tutors.id
   JOIN "language" ON tutors.language_tutor_id = "language".id
   JOIN mentoring_grade ON tutors.mentoring_grade_id = mentoring_grade.id
   WHERE tutors.active_tutor = true and tutors.matched = false 
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
  const query = `  SELECT *, 
  "1st",
 "2nd",
 "3rd",
 "4th",
 "5th",
 "6th",
 "7th",
 "8th",
 "9th",
 "10th",
 "11th",
 "12th",
 language."Arabic",
 language."Chinese",
 language."French",
 language."Hmong",
 language."Somali",
 language."Tagalog",
 language."Vietnamese",
 language."Spanish",
 language."Other"
  FROM tutors
   JOIN subjects_tutors ON tutors.subjects_id = subjects_tutors.id
   JOIN "language" ON tutors.language_tutor_id = "language".id
   JOIN mentoring_grade ON tutors.mentoring_grade_id = mentoring_grade.id
   WHERE tutors.active_tutor = false and tutors.matched = false 
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
