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
  console.log('in tutors/active get router');
  const query = `SELECT 
  tutors.id,
  tutor_first_name,
  tutor_last_name,
    pronouns AS tutor_pronouns,
    tutors.phone AS tutor_phone,
tutors.email AS tutor_email,
    grade_level AS tutor_grade,
    school AS tutor_school,
   misc_info AS tutor_miscInfo,
    active_tutor,
    submission_timestamp AS tutor_submission_timestamp,
    "prek_kindergarten" AS mentor_prek_kindergarten,
   "1st" AS mentor_grade_1,
   "2nd" AS mentor_grade_2,
   "3rd" AS mentor_grade_3,
   "4th" AS mentor_grade_4,
   "5th" AS mentor_grade_5,
   "6th" AS mentor_grade_6,
   "7th" AS mentor_grade_7,
   "8th" AS mentor_grade_8,
   "9th" AS mentor_grade_9,
   "10th" AS mentor_grade_10,
   "11th" AS mentor_grade_11,
   "12th" AS mentor_grade_12,
   subjects_tutors."K5_Math" AS tutor_K5_Math,
      subjects_tutors."K5_Reading" AS tutor_K5_Reading,
      subjects_tutors."K5_English_Writing" AS tutor_K5_English_Writing,
      subjects_tutors."K5_Science" AS tutor_K5_Science,
      subjects_tutors."6th_to_8th_language_arts" AS tutor_6th_to_8th_language_arts,
      subjects_tutors."6th_to_8th_science" AS tutor_6th_to_8th_science,
      subjects_tutors."6th_to_8th_social_studies" AS tutor_6th_to_8th_social_studies,
      subjects_tutors."math_pre_algebra" AS tutor_math_pre_algebra,
      subjects_tutors."math_alg1_linear_alg" AS tutor_math_alg1_linear_alg,
      subjects_tutors."math_alg2" AS tutor_math_alg2,
      subjects_tutors."math_geom" AS tutor_math_geom,
      subjects_tutors."math_precalc_trig" AS tutor_math_precalc_trig,
      subjects_tutors."sci_bio_life" AS tutor_sci_bio_life,
      subjects_tutors."sci_chem" AS tutor_sci_chem,
      subjects_tutors."sci_physics" AS tutor_sci_physics,
      subjects_tutors."sci_comp_sci" AS tutor_sci_comp_sci,
      subjects_tutors."lang_chinese" AS tutor_lang_chinese,
      subjects_tutors."lang_german" AS tutor_lang_german,
          subjects_tutors."hist_world" AS tutor_hist_world,
          subjects_tutors."hist_us" AS tutor_hist_us,
          subjects_tutors."ap_bio" AS tutor_ap_bio,
          subjects_tutors."ap_chem" AS tutor_ap_chem,
          subjects_tutors."ap_physics" AS tutor_ap_physics,
          subjects_tutors."ap_calc_AB" AS tutor_ap_calc_AB,
          subjects_tutors."ap_calc_BC" AS tutor_ap_calc_BC,
          subjects_tutors."ap_stats" AS tutor_ap_stats,
          subjects_tutors."ap_comp_sci" AS tutor_ap_comp_sci,
          subjects_tutors."ap_english_lit_comp" AS tutor_ap_english_lit_comp,
          subjects_tutors."ap_lang_comp" AS tutor_ap_lang_comp,
          subjects_tutors."ap_macro_econ" AS tutor_ap_macro_econ,
          subjects_tutors."ap_micro_econ" AS tutor_ap_micro_econ,
          subjects_tutors."ap_psyc" AS tutor_ap_psyc, 
          subjects_tutors."ap_hist_us" AS tutor_ap_hist_us,
  subjects_tutors."ap_gov_politics_us" AS tutor_ap_gov_politics_us,
  subjects_tutors."ap_human_geog" AS tutor_ap_human_geog,
  subjects_tutors."sat_subject_tests" AS tutor_sat_subject_tests,
  subjects_tutors."sat_prep" AS tutor_sat_prep,
  subjects_tutors."act_prep" AS tutor_act_prep,
  subjects_tutors."other" AS tutor_subject_other,
   language."Arabic" AS tutor_language_Arabic,
   language."Chinese" AS tutor_language_Chinese,
   language."French" AS tutor_language_French,
   language."Hmong" AS tutor_language_Hmong,
   language."Somali" AS tutor_language_Somali,
   language."Tagalog" AS tutor_language_Tagalog,
   language."Vietnamese" AS tutor_language_Vietnamese,
   language."Spanish" AS tutor_language_Spanish,
   language."Other" AS tutor_language_Other
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
  console.log('in tutors/deactive get router');

  const query = `SELECT 
  tutors.id,
  tutor_first_name,
  tutor_last_name,
    pronouns AS tutor_pronouns,
    tutors.phone AS tutor_phone,
tutors.email AS tutor_email,
    grade_level AS tutor_grade,
    school AS tutor_school,
   misc_info AS tutor_miscInfo,
    active_tutor,
    submission_timestamp AS tutor_submission_timestamp,
    "prek_kindergarten" AS mentor_prek_kindergarten,
   "1st" AS mentor_grade_1,
   "2nd" AS mentor_grade_2,
   "3rd" AS mentor_grade_3,
   "4th" AS mentor_grade_4,
   "5th" AS mentor_grade_5,
   "6th" AS mentor_grade_6,
   "7th" AS mentor_grade_7,
   "8th" AS mentor_grade_8,
   "9th" AS mentor_grade_9,
   "10th" AS mentor_grade_10,
   "11th" AS mentor_grade_11,
   "12th" AS mentor_grade_12,
   subjects_tutors."K5_Math" AS tutor_K5_Math,
      subjects_tutors."K5_Reading" AS tutor_K5_Reading,
      subjects_tutors."K5_English_Writing" AS tutor_K5_English_Writing,
      subjects_tutors."K5_Science" AS tutor_K5_Science,
      subjects_tutors."6th_to_8th_language_arts" AS tutor_6th_to_8th_language_arts,
      subjects_tutors."6th_to_8th_science" AS tutor_6th_to_8th_science,
      subjects_tutors."6th_to_8th_social_studies" AS tutor_6th_to_8th_social_studies,
      subjects_tutors."math_pre_algebra" AS tutor_math_pre_algebra,
      subjects_tutors."math_alg1_linear_alg" AS tutor_math_alg1_linear_alg,
      subjects_tutors."math_alg2" AS tutor_math_alg2,
      subjects_tutors."math_geom" AS tutor_math_geom,
      subjects_tutors."math_precalc_trig" AS tutor_math_precalc_trig,
      subjects_tutors."sci_bio_life" AS tutor_sci_bio_life,
      subjects_tutors."sci_chem" AS tutor_sci_chem,
      subjects_tutors."sci_physics" AS tutor_sci_physics,
      subjects_tutors."sci_comp_sci" AS tutor_sci_comp_sci,
      subjects_tutors."lang_chinese" AS tutor_lang_chinese,
      subjects_tutors."lang_german" AS tutor_lang_german,
          subjects_tutors."hist_world" AS tutor_hist_world,
          subjects_tutors."hist_us" AS tutor_hist_us,
          subjects_tutors."ap_bio" AS tutor_ap_bio,
          subjects_tutors."ap_chem" AS tutor_ap_chem,
          subjects_tutors."ap_physics" AS tutor_ap_physics,
          subjects_tutors."ap_calc_AB" AS tutor_ap_calc_AB,
          subjects_tutors."ap_calc_BC" AS tutor_ap_calc_BC,
          subjects_tutors."ap_stats" AS tutor_ap_stats,
          subjects_tutors."ap_comp_sci" AS tutor_ap_comp_sci,
          subjects_tutors."ap_english_lit_comp" AS tutor_ap_english_lit_comp,
          subjects_tutors."ap_lang_comp" AS tutor_ap_lang_comp,
          subjects_tutors."ap_macro_econ" AS tutor_ap_macro_econ,
          subjects_tutors."ap_micro_econ" AS tutor_ap_micro_econ,
          subjects_tutors."ap_psyc" AS tutor_ap_psyc, 
          subjects_tutors."ap_hist_us" AS tutor_ap_hist_us,
  subjects_tutors."ap_gov_politics_us" AS tutor_ap_gov_politics_us,
  subjects_tutors."ap_human_geog" AS tutor_ap_human_geog,
  subjects_tutors."sat_subject_tests" AS tutor_sat_subject_tests,
  subjects_tutors."sat_prep" AS tutor_sat_prep,
  subjects_tutors."act_prep" AS tutor_act_prep,
  subjects_tutors."other" AS tutor_subject_other,
   language."Arabic" AS tutor_language_Arabic,
   language."Chinese" AS tutor_language_Chinese,
   language."French" AS tutor_language_French,
   language."Hmong" AS tutor_language_Hmong,
   language."Somali" AS tutor_language_Somali,
   language."Tagalog" AS tutor_language_Tagalog,
   language."Vietnamese" AS tutor_language_Vietnamese,
   language."Spanish" AS tutor_language_Spanish,
   language."Other" AS tutor_language_Other
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
