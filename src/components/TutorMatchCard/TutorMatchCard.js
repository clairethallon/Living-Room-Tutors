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

  useEffect(async () => {
    await subjectFinder(subjects);
  }, []);


  const languages = [
    { name: "Arabic ", status: props.tutor.tutor_language_arabic },
    { name: "Chinese ", status: props.tutor.tutor_language_chinese },
    { name: "French ", status: props.tutor.tutor_language_french },
    { name: "Hmong ", status: props.tutor.tutor_language_hmong },
    { name: "Somali ", status: props.tutor.tutor_language_somali },
    { name: "Tagalog ", status: props.tutor.tutor_language_tagalog },
    { name: "Vietnamese ", status: props.tutor.tutor_language_vietnamese },
    { name: "Spanish ", status: props.tutor.tutor_language_spanish },
    { name: props.tutor.tutor_language_other, status: false },
  ];
  const specialSubjects = useSelector((store) => store.specialSubjects);

  const tutorSubject = [
    { name: "K-5 Math ", status: props.tutor.tutor_K5_Math },
    { name: "K-5 Reading ", status: props.tutor.tutor_K5_Reading },
    {
      name: "K-5 English/Writing ",
      status: props.tutor.tutor_K5_English_Writing,
    },
    { name: "K-5 Social Studies ", status: props.tutor.tutor_K5_Science },
    { name: "K-5 Science ", status: props.tutor.tutor_K5_social_studies },
    {
      name: "6-8th Language Arts ",
      status: props.tutor.tutor_6th_to_8th_language_arts,
    },
    { name: "6-8th Science ", status: props.tutor.tutor_6th_to_8th_science },
    {
      name: "6-8th Social Studies ",
      status: props.tutor.tutor_6th_to_8th_social_studies,
    },
    { name: "Pre-Algebra ", status: props.tutor.tutor_math_pre_algebra },
    {
      name: "Algebra I/ Linear Algebra ",
      status: props.tutor.tutor_math_alg1_linear_alg,
    },
    { name: "Algebra II ", status: props.tutor.tutor_math_alg2 },
    { name: "Geometry ", status: props.tutor.tutor_math_geom },
    {
      name: "Precalculus/Trigonometry ",
      status: props.tutor.tutor_math_precalc_trig,
    },
    {
      name: "Biology/Life Sciences ",
      status: props.tutor.tutor_sci_bio_life,
    },
    { name: "Chemistry ", status: props.tutor.tutor_sci_chem },
    { name: "Physics ", status: props.tutor.tutor_sci_physics },
    { name: "Computer Science ", status: props.tutor.tutor_sci_comp_sci },
    { name: "Chinese ", status: props.tutor.tutor_lang_chinese },
    { name: "Spanish ", status: props.tutor.tutor_lang_spanish },
    { name: "French ", status: props.tutor.tutor_lang_french },
    { name: "German ", status: props.tutor.tutor_lang_german },
    { name: "World History ", status: props.tutor.tutor_hist_world },
    { name: "U.S. History ", status: props.tutor.tutor_hist_us },
    { name: "AP/Honors Biology ", status: props.tutor.tutor_ap_bio },
    { name: "AP/Honors Chemistry ", status: props.tutor.tutor_ap_chem },
    { name: "AP/Honors Physics ", status: props.tutor.tutor_ap_physics },
    { name: "AP/Honors Calculus AB ", status: props.tutor.tutor_ap_calc_AB },
    { name: "AP/Honors Calculus BC ", status: props.tutor.tutor_ap_calc_BC },
    { name: "AP/Honors Statistics ", status: props.tutor.tutor_ap_stats },
    {
      name: "AP/Honors Computer Science ",
      status: props.tutor.tutor_ap_comp_sci,
    },
    {
      name: "AP/Honors English Literature and Composition ",
      status: props.tutor.tutor_ap_english_lit_comp,
    },
    {
      name: "AP/Honors Language and Composition ",
      status: props.tutor.tutor_ap_lang_comp,
    },
    {
      name: "AP/Honors Macroeconomics ",
      status: props.tutor.tutor_ap_macro_econ,
    },
    {
      name: "AP/Honors Microeconomics ",
      status: props.tutor.tutor_ap_micro_econ,
    },
    { name: "AP/Honors Psychology ", status: props.tutor.tutor_ap_psyc },
    {
      name: "AP/Honors United States History ",
      status: props.tutor.tutor_ap_hist_us,
    },
    {
      name: "AP/Honors Government and Politics (US) ",
      status: props.tutor.tutor_ap_gov_politics_us,
    },
    {
      name: "AP/Honors Human Geography ",
      status: props.tutor.tutor_ap_human_geog,
    },
    {
      name: "SAT Subject Tests ",
      status: props.tutor.tutor_sat_subject_tests,
    },
    { name: "SAT Prep ", status: props.tutor.tutor_sat_prep },
    { name: "ACT Prep ", status: props.tutor.tutor_act_prep },
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


  const AccordionClose = (e) => {
    console.log('in AccordionClose');
    e.stopPropagation();
  }
  return (
    <div>
      {languageFilter.length == 0 ||
        languageFilter == "View All" ||
        (languageFilter === "Chinese" &&
          props.tutor.tutor_language_chinese === true) ||
        (languageFilter === "Arabic" &&
          props.tutor.tutor_language_arabic === true) ||
        (languageFilter === "French" &&
          props.tutor.tutor_language_french === true) ||
        (languageFilter === "Hmong" &&
          props.tutor.tutor_language_hmong === true) ||
        (languageFilter === "Other" &&
          props.tutor.tutor_language_other === true) ||
        (languageFilter === "Somali" &&
          props.tutor.tutor_language_somali === true) ||
        (languageFilter === "Spanish" &&
          props.tutor.tutor_language_spanish === true) ||
        (languageFilter === "Tagalog" &&
          props.tutor.tutor_language_tagalog === true) ||
        (languageFilter === "Vietnamese" &&
          props.tutor.tutor_language_vietnamese === true) ? (
          <Accordion className="accordionCard" defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {/* <Row> */}
                <Col xs="2">
                  {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}
                </Col>
                <Col xs="2">
                  {props.tutor.tutor_submission_timestamp[5]}{props.tutor.tutor_submission_timestamp[6]}.
                {props.tutor.tutor_submission_timestamp[8]}{props.tutor.tutor_submission_timestamp[9]}.
                {props.tutor.tutor_submission_timestamp[0]}{props.tutor.tutor_submission_timestamp[1]}
                  {props.tutor.tutor_submission_timestamp[2]}{props.tutor.tutor_submission_timestamp[3]}
                </Col>
                {props.group === "A" ? (
                  <Col xs="3">
                    {subject1}
                    <br></br> {subject2}
                    <br></br>
                    {subject3}
                  </Col>
                ) : props.group === "B" ? (
                  <Col xs="3">
                    {subject1}
                    <br></br> {subject2}
                  </Col>
                ) : props.group === "C" ? (
                  <Col xs="3">
                    {subject1}
                    <br></br>
                    {subject3}
                  </Col>
                ) : (
                        <Col xs="3">{subject1}</Col>
                      )}
                <Col xs="2" className="flaggedSubjectLanguage">
                  {tutorSubject.map((subject) => {
                    if (subject.status === true && (
                      subject.name === "Precalculus/Trigonometry " ||
                      subject.name === "Biology/Life Sciences " ||
                      subject.name === "Chemistry " ||
                      subject.name === "Physics " ||
                      subject === "Computer Science " ||
                      subject.name === "Chinese " ||
                      subject.name === "Spanish " ||
                      subject.name === "French " ||
                      subject.name === "German " ||
                      subject.name === "World History " ||
                      subject.name === "U.S. History " ||
                      subject.name === "AP/Honors Biology " ||
                      subject.name === "AP/Honors Chemistry " ||
                      subject.name === "AP/Honors Physics " ||
                      subject.name === "AP/Honors Calculus AB " ||
                      subject.name === "AP/Honors Calculus BC " ||
                      subject.name === "AP/Honors Statistics " ||
                      subject.name === "AP/Honors Computer Science " ||
                      subject.name ===
                      "AP/Honors English Literature and Composition " ||
                      subject.name ===
                      "AP/Honors Language and Composition " ||
                      subject.name === "AP/Honors Macroeconomics " ||
                      subject.name === "AP/Honors Microeconomics " ||
                      subject.name === "AP/Honors Psychology " ||
                      subject.name === "AP/Honors United States History " ||
                      subject.name ===
                      "AP/Honors Government and Politics (US) " ||
                      subject.name === "AP/Honors Human Geography " ||
                      subject.name === "SAT Subject Tests " ||
                      subject.name === "SAT Prep " ||
                      subject.name === "ACT Prep "
                    )) {
                      return <SubjectFlag />;
                    }
                  })}
                  {languages.map((language) => {
                    if (language.status === true) {
                      return <LanguageFlag />;
                    }
                  })}
                  {props.tutor.tutor_language_other !== null ?
                    <LanguageFlag />
                    : <span></span>}
                </Col>
                <Col xs="1"></Col>
                <Col onClick={(e) => AccordionClose(e)}>
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
        ) : (
          <span></span>
        )}
    </div>
  );
}

export default TutorMatchCard;
