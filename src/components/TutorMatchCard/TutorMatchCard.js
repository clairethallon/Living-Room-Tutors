import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import CompleteMatchButton from "../CompleteMatchButton/CompleteMatchButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TutorProfile from "../TutorProfile/TutorProfile";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorCard with the name for the new component.
function TutorMatchCard(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  const languageFilter = useSelector((store) => store.languageFilter);
  const selected_tutee = useSelector((store) => store.selected_tutee);

  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  useEffect(() => {
    subjectFinder(subjects);
  }, []);

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
      if (subjects[i].dbname == selected_tutee.subject_1) {
        setSubject1(subjects[i].name);
      }
      if (subjects[i].dbname == selected_tutee.subject_2) {
        setSubject2(subjects[i].name);
      }
      if (subjects[i].dbname == selected_tutee.subject_3) {
        setSubject3(subjects[i].name);
      }
    }
  };

  return (
    <div>
      {languageFilter === [] || languageFilter === null || languageFilter == 'View All' ||
        languageFilter === 'Chinese' && props.tutor.tutor_language_chinese === true ||
        languageFilter === 'Arabic' && props.tutor.tutor_language_arabic === true ||
        languageFilter === 'French' && props.tutor.tutor_language_french === true ||
        languageFilter === 'Hmong' && props.tutor.tutor_language_hmong === true ||
        languageFilter === 'Other' && props.tutor.tutor_language_other === true ||
        languageFilter === 'Somali' && props.tutor.tutor_language_somali === true ||
        languageFilter === 'Spanish' && props.tutor.tutor_language_spanish === true ||
        languageFilter === 'Tagalog' && props.tutor.tutor_language_tagalog === true ||
        languageFilter === 'Vietnamese' && props.tutor.tutor_language_vietnamese === true
        ?
        <Accordion className="mb-3" defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {/* <Row> */}
              <Col xs="2">
                {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}
              </Col>
              <Col xs="2">{props.tutor.submission_timestamp}</Col>
              <Col xs="3">{subject1}</Col>
              <Col xs="1" className="flaggedSubjectLanguage">
                <SubjectFlag />
                <LanguageFlag />
              </Col>
              <Col xs="2"></Col>
              <Col>
                <CompleteMatchButton tutor={props.tutor} />
              </Col>
              {/* </Row> */}
            </Accordion.Header>
            <Accordion.Body>
              {/* {JSON.stringify(props.tutor)} */}
              <TutorProfile tutor={props.tutor} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        : <span></span>}
    </div>
  );
}

export default TutorMatchCard;
