import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TuteeProfile from "../TuteeProfile/TuteeProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

function TuteeMatchCard(props) {
  const selectedTutee = useSelector((store) => store.selected_tutee);

  const flagIcon = <FontAwesomeIcon icon={faStar} />;
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");


  useEffect(async () => {
    await subjectFinder(subjects);
  }, []);

  const specialSubjects = [
    "Precalculus/Trigonometry ",
    "Biology/Life Sciences ",
    "Chemistry ",
    "AP/Honors Chemistry ",
    "Physics ",
    "Computer Science ",
    "Chinese ",
    "Spanish ",
    "French ",
    "German ",
    "World History ",
    "U.S. History ",
    "AP/Honors Biology ",
    "AP/Honors Physics ",
    "AP/Honors Calculus AB ",
    "AP/Honors Calculus BC ",
    "AP/Honors Statistics ",
    "AP/Honors Computer Science ",
    "AP/Honors English Literature and Composition ",
    "AP/Honors Language and Composition ",
    "AP/Honors Macroeconomics ",
    "AP/Honors Microeconomics ",
    "AP/Honors Psychology ",
    "AP/Honors United States History ",
    "AP/Honors Government and Politics (US) ",
    "AP/Honors Human Geography ",
    "SAT Subject Tests ",
    "SAT Prep ",
    "ACT Prep ",
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

  const subjectFinder = (subjects) => {
    console.log("in subjectFinder");
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].dbname == selectedTutee.subject_1) {
        setSubject1(subjects[i].name);
      }
      if (subjects[i].dbname == selectedTutee.subject_2) {
        setSubject2(subjects[i].name);
      }
      if (subjects[i].dbname == selectedTutee.subject_3) {
        setSubject3(subjects[i].name);
      }
    }
  };

  const languages = [
    selectedTutee.tutee_language_arabic,
    selectedTutee.tutee_language_chinese,
    selectedTutee.tutee_language_french,
    selectedTutee.tutee_language_hmong,
    selectedTutee.tutee_language_somali,
    selectedTutee.tutee_language_tagalog,
    selectedTutee.tutee_language_vietnamese,
    selectedTutee.tutee_language_spanish,
  ];

  return (
    <div>
      {/* {JSON.stringify(selectedTutee)} */}
      <Accordion className="accordionCard" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="2">
              {selectedTutee.tutee_firstname} {selectedTutee.tutee_lastname}
            </Col>
            <Col xs="2">
              {selectedTutee.tutee_submission_timestamp[5]}{selectedTutee.tutee_submission_timestamp[6]}.
                {selectedTutee.tutee_submission_timestamp[8]}{selectedTutee.tutee_submission_timestamp[9]}.
                {selectedTutee.tutee_submission_timestamp[0]}{selectedTutee.tutee_submission_timestamp[1]}
              {selectedTutee.tutee_submission_timestamp[2]}{selectedTutee.tutee_submission_timestamp[3]}            </Col>
            <Col xs="3">
              {subject1}
              <br></br>
              {subject2}
              <br></br>
              {subject3}
            </Col>
            <Col xs="2" className="flaggedSubjectLanguage">
              {specialSubjects.map((subject) => {
                if (
                  subject === subject1 ||
                  subject === subject2 ||
                  subject === subject3
                ) {
                  return <SubjectFlag />;
                }
              })}
              {languages.map((language) => {
                if (language === true) {
                  return <LanguageFlag />;
                }
              })}
            </Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            <TuteeProfile tutee={selectedTutee} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuteeMatchCard;
