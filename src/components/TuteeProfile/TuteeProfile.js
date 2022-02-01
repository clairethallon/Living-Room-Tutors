import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../TuteeProfile/TuteeProfile.css";

function TuteeProfile(props) {
  const store = useSelector((store) => store);
  const [tuteeLanguages, setTuteeLanguages] = useState([]);
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  useEffect(() => {
    languageFinder(languages);
    subjectFinder(subjects);
  }, []);

  const languages = [
    { name: "Arabic ", status: props.tutee.tutee_language_arabic },
    { name: "Chinese ", status: props.tutee.tutee_language_chinese },
    { name: "French ", status: props.tutee.tutee_language_french },
    { name: "Hmong ", status: props.tutee.tutee_language_hmong },
    { name: "Somali ", status: props.tutee.tutee_language_somali },
    { name: "Tagalog ", status: props.tutee.tutee_language_tagalog },
    { name: "Vietnamese ", status: props.tutee.tutee_language_vietnamese },
    { name: "Spanish ", status: props.tutee.tutee_language_spanish },
  ];

  const subjects = [
    { name: "K-5 Math ", dbname: "K5_Math" },
    { name: "K-5 Reading ", dbname: "K5_Reading" },
    { name: "K-5 English/Writing ", dbname: "K5_English_Writing" },
    { name: "K-5 Social Studies ", dbname: "K5_Science" },
    { name: "K-5 Science ", dbname: "K5_social_studies" },
    { name: "6-8th Language Arts ", dbname: "6th_to_8th_language_arts" },
    { name: "6-8th Science ", dbname: "6th_to_8th_science" },
    { name: "6-8th Social Studies ", dbname: "6th_to_8th_social_studies" },
    { name: "Pre-Algebra ", dbname: "math_pre_algebra" },
    { name: "Algebra I/ Linear Algebra ", dbname: "math_alg1_linear_alg" },
    { name: "Algebra II ", dbname: "math_alg2" },
    { name: "Geometry ", dbname: "math_geom" },
    { name: "Precalculus/Trigonometry ", dbname: "math_precalc_trig" },
    { name: "Biology/Life Sciences ", dbname: "sci_bio_life" },
    { name: "Chemistry ", dbname: "sci_chem" },
    { name: "Physics ", dbname: "sci_physics" },
    { name: "Computer Science ", dbname: "sci_comp_sci" },
    { name: "Chinese ", dbname: "lang_chinese" },
    { name: "Spanish ", dbname: "lang_spanish" },
    { name: "French ", dbname: "lang_french" },
    { name: "German ", dbname: "lang_german" },
    { name: "World History ", dbname: "hist_world" },
    { name: "U.S. History ", dbname: "hist_us" },
    { name: "AP/Honors Biology ", dbname: "ap_bio" },
    { name: "AP/Honors Chemistry ", dbname: "ap_chem" },
    { name: "AP/Honors Physics ", dbname: "ap_physics" },
    { name: "AP/Honors Calculus AB ", dbname: "ap_calc_AB" },
    { name: "AP/Honors Calculus BC ", dbname: "ap_calc_BC" },
    { name: "AP/Honors Statistics ", dbname: "ap_stats" },
    { name: "AP/Honors Computer Science ", dbname: "ap_comp_sci" },
    {
      name: "AP/Honors English Literature and Composition ",
      dbname: "ap_english_lit_comp",
    },
    { name: "AP/Honors Language and Composition ", dbname: "ap_lang_comp" },
    { name: "AP/Honors Macroeconomics ", dbname: "ap_macro_econ" },
    { name: "AP/Honors Microeconomics ", dbname: "ap_micro_econ" },
    { name: "AP/Honors Psychology ", dbname: "ap_psyc" },
    { name: "AP/Honors United States History ", dbname: "ap_hist_us" },
    {
      name: "AP/Honors Government and Politics (US) ",
      dbname: "ap_gov_politics_us",
    },
    { name: "AP/Honors Human Geography ", dbname: "ap_human_geog" },
    { name: "SAT Subject Tests ", dbname: "sat_subject_tests" },
    { name: "SAT Prep ", dbname: "sat_prep" },
    { name: "ACT Prep ", dbname: "act_prep" },
  ];

  const languageFinder = (languages) => {
    console.log(languages);
    let currentLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].status === true) {
        currentLanguages.push(languages[i].name);
      }
    }
    console.log("CURRENT LANGUAGES", currentLanguages);
    setTuteeLanguages(currentLanguages);
    return currentLanguages;
  };

  const subjectFinder = (subjects) => {
    console.log("in subjectFinder");
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].dbname == props.tutee.subject_1) {
        setSubject1(subjects[i].name);
      }
      if (subjects[i].dbname == props.tutee.subject_2) {
        setSubject2(subjects[i].name);
      }
      if (subjects[i].dbname == props.tutee.subject_3) {
        setSubject3(subjects[i].name);
      }
    }
  };

  return (
    <div>
      <h2>
        {props.tutee.tutee_firstname} {props.tutee.tutee_lastname} (
        {props.tutee.tutee_pronouns})
      </h2>
      <p>
        Parent/Guardian's email (if applicable): {props.tutee.email_guardian}
      </p>
      <p>Student's email: {props.tutee.email_student}</p>
      <p>Phone number: {props.tutee.tutee_phone}</p>
      <p>Grade Level: {props.tutee.grade_level}</p>
      <p>School attending: {props.tutee.school}</p>

      <p>
        Language preference (if not English):{" "}
        {tuteeLanguages.map((language) => {
          return <p>{language}</p>;
        })}
      </p>
      <p>1st subject choice: {subject1}</p>
      <p>2st subject choice: {subject2}</p>
      <p>3st subject choice: {subject3}</p>
      <p>other subject (if applicable): </p>
      <p>Detail description regarding help needed:</p>
      <p>Addition information:</p>
    </div>
  );
}

export default TuteeProfile;
