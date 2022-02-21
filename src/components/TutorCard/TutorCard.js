import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TutorActivateDeactivateButton from "../TutorActivateDeactivateButton/TutorActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TutorProfile from "../TutorProfile/TutorProfile";

function TutorCard(props) {
  const specialSubjects = useSelector((store) => store.specialSubjects);

  const [tutorSubjects, setTutorSubjects] = useState([]);


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

  const [prettyTime, setPrettyTime] = useState({
    year: "",
    month: "",
    day: "",
  });

  const makePrettyTime = (timestamp) => {
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

  const AccordionClose = (e) => {
    console.log('in test');
    e.stopPropagation();
  }

  useEffect(() => {
    subjectFinder(subjects);
    makePrettyTime(props.tutor.tutor_submission_timestamp);
  }, []);

  const subjects = [
    { name: "K-5 Math ", status: props.tutor.tutor_k5_math },
    { name: "K-5 Reading ", status: props.tutor.tutor_k5_reading },
    {
      name: "K-5 English/Writing ",
      status: props.tutor.tutor_k5_english_writing,
    },
    { name: "K-5 Social Studies ", status: props.tutor.tutor_k5_science },
    { name: "K-5 Science ", status: props.tutor.tutor_k5_social_studies },
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

  const subjectFinder = (subjects) => {
    // console.log(subjects);
    let mentor_subjects = [];
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].status === true) {
        mentor_subjects.push(subjects[i].name);
        console.log(
          props.tutor.tutor_first_name,
          subjects[i].name,
          subjects[i].status
        );
      }
    }
    console.log("MENTORING_SUBJECTS", mentor_subjects);
    setTutorSubjects(mentor_subjects);
    return mentor_subjects;
  };

  return (
    <div>
      <Accordion className="accordionCard" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3" className="cardFirstLastName">
              {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}
            </Col>
            <Col xs="2">
              {prettyTime.month}.{prettyTime.day}.{prettyTime.year}
            </Col>
            <Col xs="2">{props.tutor.tutor_grade}</Col>
            <Col xs="2" className="flaggedSubjectLanguage">
              {/* <SubjectFlag /> */}

              {subjects.map((subject) => {
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
            <Col className="cardButtons" xs="2" onClick={(e) => AccordionClose(e)}>
              <TutorActivateDeactivateButton active={props.tutor} />
              {/* <--conditionally render the MatchButton to only show up when the Tutor is activated. */}
            </Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            <TutorProfile tutor={props.tutor} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TutorCard;
