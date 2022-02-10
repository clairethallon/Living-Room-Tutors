import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TuteeProfile from "../TuteeProfile/TuteeProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faFlag } from "@fortawesome/free-solid-svg-icons";

function TuteeMatchCard(props) {
  const selectedTutee = useSelector((store) => store.selected_tutee);

  const flagIcon = <FontAwesomeIcon icon={faFlag} />;
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [prettyTime, setPrettyTime] = useState({
    year: "",
    month: "",
    day: "",
  });

  useEffect(async () => {
    await subjectFinder(subjects);
    await makePrettyTime(selectedTutee.tutee_submission_timestamp);
  }, []);

  const specialSubjects = useSelector((store) => store.specialSubjects);

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

  const makePrettyTime = (timestamp) => {
    console.log(timestamp);
    let newTime = {
      year: "",
      month: "",
      day: "",
    };
    for (let i = 0; i < timestamp.length; i++) {
      if (i < 4) {
        newTime.year += timestamp[i];
      } else if (i > 4 && i < 7) {
        newTime.month += timestamp[i];
      } else if (i > 7 && i < 10) {
        newTime.day += timestamp[i];
      }
      setPrettyTime(newTime);
    }
  };

  const languages = [
    selectedTutee.tutee_language_arabic,
    selectedTutee.tutee_language_chinese,
    selectedTutee.tutee_language_french,
    selectedTutee.tutee_language_hmong,
    selectedTutee.tutee_language_somali,
    selectedTutee.tutee_language_tagalog,
    selectedTutee.tutee_language_tagalog,
    selectedTutee.tutee_language_vietnamese,
    selectedTutee.tutee_language_spanish,
  ];

  return (
    <div>
      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="2">
              {selectedTutee.tutee_firstname} {selectedTutee.tutee_lastname}
            </Col>
            <Col xs="2">
              {prettyTime.month}.{prettyTime.day}.{prettyTime.year}
            </Col>
            <Col xs="3">
              {/* {subject1}
              {subject2}
              {subject3} */}

              <div className="cardSubjects">
                <div className="subjectContainer">
                  {subject1 === "Precalculus/Trigonometry " ||
                  subject1 === "Chemistry " ||
                  subject1 === "Physics " ||
                  subject1 === "Computer Science " ||
                  subject1 === "Chinese " ||
                  subject1 === "Spanish " ||
                  subject1 === "French " ||
                  subject1 === "German " ||
                  subject1 === "World History " ||
                  subject1 === "U.S. History " ||
                  subject1 === "AP/Honors Biology " ||
                  subject1 === "AP/Honors Chemistry " ||
                  subject1 === "AP/Honors Physics " ||
                  subject1 === "AP/Honors Calculus AB " ||
                  subject1 === "AP/Honors Calculus BC " ||
                  subject1 === "AP/Honors Statistics " ||
                  subject1 === "AP/Honors Computer Science " ||
                  subject1 ===
                    "AP/Honors English Literature and Composition " ||
                  subject1 === "AP/Honors Language and Composition " ||
                  subject1 === "AP/Honors Macroeconomics " ||
                  subject1 === "AP/Honors Microeconomics " ||
                  subject1 === "AP/Honors Psychology " ||
                  subject1 === "AP/Honors United States History " ||
                  subject1 === "AP/Honors Government and Politics (US) " ||
                  subject1 === "AP/Honors Human Geography " ||
                  subject1 === "SAT Subject Tests " ||
                  subject1 === "SAT Prep " ||
                  subject1 === "ACT Prep " ? (
                    <div className="subjectPillFlagged">
                      <span className="subjectFlag">{flagIcon}</span> {subject1}
                    </div>
                  ) : (
                    <div className="subjectPill">{subject1}</div>
                  )}
                </div>

                <div className="subjectContainer">
                  {subject2 === "Precalculus/Trigonometry " ||
                  subject2 === "Chemistry " ||
                  subject2 === "Physics " ||
                  subject2 === "Computer Science " ||
                  subject2 === "Chinese " ||
                  subject2 === "Spanish " ||
                  subject2 === "French " ||
                  subject2 === "German " ||
                  subject2 === "World History " ||
                  subject2 === "U.S. History " ||
                  subject2 === "AP/Honors Biology " ||
                  subject2 === "AP/Honors Chemistry " ||
                  subject2 === "AP/Honors Physics " ||
                  subject2 === "AP/Honors Calculus AB " ||
                  subject2 === "AP/Honors Calculus BC " ||
                  subject2 === "AP/Honors Statistics " ||
                  subject2 === "AP/Honors Computer Science " ||
                  subject2 ===
                    "AP/Honors English Literature and Composition " ||
                  subject2 === "AP/Honors Language and Composition " ||
                  subject2 === "AP/Honors Macroeconomics " ||
                  subject2 === "AP/Honors Microeconomics " ||
                  subject2 === "AP/Honors Psychology " ||
                  subject2 === "AP/Honors United States History " ||
                  subject2 === "AP/Honors Government and Politics (US) " ||
                  subject2 === "AP/Honors Human Geography " ||
                  subject2 === "SAT Subject Tests " ||
                  subject2 === "SAT Prep " ||
                  subject2 === "ACT Prep " ? (
                    <div className="subjectPillFlagged">
                      <span className="subjectFlag">{flagIcon}</span> {subject2}
                    </div>
                  ) : (
                    <div className="subjectPill">{subject2}</div>
                  )}
                </div>

                <div className="subjectContainer">
                  {subject3 === "Precalculus/Trigonometry " ||
                  subject3 === "Chemistry " ||
                  subject3 === "Physics " ||
                  subject3 === "Computer Science " ||
                  subject3 === "Chinese " ||
                  subject3 === "Spanish " ||
                  subject3 === "French " ||
                  subject3 === "German " ||
                  subject3 === "World History " ||
                  subject3 === "U.S. History " ||
                  subject3 === "AP/Honors Biology " ||
                  subject3 === "AP/Honors Chemistry " ||
                  subject3 === "AP/Honors Physics " ||
                  subject3 === "AP/Honors Calculus AB " ||
                  subject3 === "AP/Honors Calculus BC " ||
                  subject3 === "AP/Honors Statistics " ||
                  subject3 === "AP/Honors Computer Science " ||
                  subject3 ===
                    "AP/Honors English Literature and Composition " ||
                  subject3 === "AP/Honors Language and Composition " ||
                  subject3 === "AP/Honors Macroeconomics " ||
                  subject3 === "AP/Honors Microeconomics " ||
                  subject3 === "AP/Honors Psychology " ||
                  subject3 === "AP/Honors United States History " ||
                  subject3 === "AP/Honors Government and Politics (US) " ||
                  subject3 === "AP/Honors Human Geography " ||
                  subject3 === "SAT Subject Tests " ||
                  subject3 === "SAT Prep " ||
                  subject3 === "ACT Prep " ? (
                    <div className="subjectPillFlagged">
                      <span className="subjectFlag">{flagIcon}</span> {subject3}
                    </div>
                  ) : (
                    <div className="subjectPill">{subject3}</div>
                  )}
                </div>
              </div>
            </Col>
            {/* {JSON.stringify(specialSubjects)} */}
            <Col xs="2" className="flaggedSubjectLanguage">
              {specialSubjects.map((subject) => {
                if (
                  selectedTutee.subject_1 === subject ||
                  selectedTutee.subject_2 === subject ||
                  selectedTutee.subject_3 === subject
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
