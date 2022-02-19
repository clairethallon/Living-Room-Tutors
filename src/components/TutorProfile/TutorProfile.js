import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

function TutorProfile(props) {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const flagIcon = <FontAwesomeIcon icon={faStar} />;

  const store = useSelector((store) => store);
  const [tutorLanguages, setTutorLanguages] = useState([]);
  const [tutorSubjects, setTutorSubjects] = useState([]);
  const [mentorChosenGrade, setMentorChosenGrade] = useState([]);

  useEffect(() => {
    languageFinder(languages);
    subjectFinder(subjects);
    gradeFinder(grades);
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
    { name: props.tutor.tutor_language_other, status: true },
  ];

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
    { name: "AP/Honors Calculus AB ", status: props.tutor.tutor_ap_calc_ab },
    { name: "AP/Honors Calculus BC ", status: props.tutor.tutor_ap_calc_bc },
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

  const grades = [
    {
      name: "Pre-K/Kindergarten",
      status: props.tutor.mentor_prek_kindergarten,
    },
    { name: "1st Grade", status: props.tutor.mentor_grade_1 },
    { name: "2nd Grade", status: props.tutor.mentor_grade_2 },
    { name: "3rd Grade", status: props.tutor.mentor_grade_3 },
    { name: "4th Grade", status: props.tutor.mentor_grade_4 },
    { name: "5th Grade", status: props.tutor.mentor_grade_5 },
    { name: "6th Grade", status: props.tutor.mentor_grade_6 },
    { name: "7th Grade", status: props.tutor.mentor_grade_7 },
    { name: "8th Grade", status: props.tutor.mentor_grade_8 },
    { name: "9th Grade", status: props.tutor.mentor_grade_9 },
    { name: "10th Grade", status: props.tutor.mentor_grade_10 },
    { name: "11th Grade", status: props.tutor.mentor_grade_11 },
    { name: "12th Grade", status: props.tutor.mentor_grade_12 },
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
    setTutorLanguages(currentLanguages);
    return currentLanguages;
  };

  const subjectFinder = (subjects) => {
    // console.log(subjects);
    let mentor_subjects = [];
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].status === true) {
        console.log(subjects[i].name, subjects[i].status);
        mentor_subjects.push(subjects[i].name);
      }
    }
    console.log("MENTORING_SUBJECTS", mentor_subjects);
    setTutorSubjects(mentor_subjects);
    return mentor_subjects;
  };

  const gradeFinder = (grades) => {
    console.log(grades);
    let chosenGrade = [];
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].status === true) {
        chosenGrade.push(grades[i].name);
      }
    }
    console.log("MENTOR GRADE", chosenGrade);
    setMentorChosenGrade(chosenGrade);
    return chosenGrade;
  };

  return (
    <div>
      <div className="tutorAdditionalInfoBackground"></div>
      <h2 className="tutorGeneralInfo">Tutor General Information</h2>
      <div className="tutorGeneralInfoSection">
        <div className="profileTitle">
          <h2 className="profileFirstLastName">
            {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}
          </h2>
          {props.tutor.tutor_pronouns && <p>({props.tutor.tutor_pronouns})</p>}
        </div>

        <div>
          <p className="profileQuestion">{emailIcon} Tutor's email: </p>
          <p className="profileAnswer">{props.tutor.tutor_email}</p>
        </div>

        <div>
          <p className="profileQuestion">{phoneIcon} Phone number: </p>
          <p className="profileAnswer">{props.tutor.tutor_phone}</p>
        </div>

        <div>
          <p className="profileQuestion">Grade Level:</p>
          <p className="profileAnswer">{props.tutor.tutor_grade}</p>
        </div>

        <div>
          <p className="profileQuestion">School attending:</p>
          <p className="profileAnswer"> {props.tutor.tutor_school}</p>
        </div>
        <div>
          <p className="profileQuestion">Languages comfortable tutoring in:</p>
          <div className="languagePillContainer">
            {tutorLanguages.map((language) => {
              if (language !== null) {
                return (
                  <div className="languagePill">
                    <span className="languageFlag">{flagIcon}</span> {language}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* ---------GRADES & SUBJECTS SECTION---------- */}

      <div className="tutorSubjectGradePreferenceBackground"></div>
      <h2 className="tutorSubjectGradePreference">
        Tutor Subject & Grade Preference
      </h2>
      <div className="tutorSubjectGradePreferenceSection">
        <div>
          <p className="profileQuestion">Grades comfortable tutoring: </p>
          <div className="gradesPillContainer">
            {mentorChosenGrade.map((grade) => {
              return <div className="gradesPill">{grade}</div>;
            })}{" "}
          </div>
        </div>
        <div>
          <p className="profileQuestion">Subjects comfortable tutoring: </p>
          <div className="subjectPillContainer">
            {tutorSubjects.map((subject) => {
              if (
                subject === "Precalculus/Trigonometry " ||
                subject === "Chemistry " ||
                subject === "Biology/Life Sciences " ||
                subject === "Physics " ||
                subject === "Computer Science " ||
                subject === "Chinese " ||
                subject === "Spanish " ||
                subject === "French " ||
                subject === "German " ||
                subject === "World History " ||
                subject === "U.S. History " ||
                subject === "AP/Honors Biology " ||
                subject === "AP/Honors Chemistry " ||
                subject === "AP/Honors Physics " ||
                subject === "AP/Honors Calculus AB " ||
                subject === "AP/Honors Calculus BC " ||
                subject === "AP/Honors Statistics " ||
                subject === "AP/Honors Computer Science " ||
                subject === "AP/Honors English Literature and Composition " ||
                subject === "AP/Honors Language and Composition " ||
                subject === "AP/Honors Macroeconomics " ||
                subject === "AP/Honors Microeconomics " ||
                subject === "AP/Honors Psychology " ||
                subject === "AP/Honors United States History " ||
                subject === "AP/Honors Government and Politics (US) " ||
                subject === "AP/Honors Human Geography " ||
                subject === "SAT Subject Tests " ||
                subject === "SAT Prep " ||
                subject === "ACT Prep "
              ) {
                return (
                  <div className="subjectPillFlagged">
                    <span className="subjectFlag">{flagIcon}</span> {subject}
                  </div>
                );
              } else {
                return <div className="subjectPill">{subject}</div>;
              }
            })}
          </div>
        </div>
      </div>

      {props.tutor.tutor_miscinfo && (
        <div>
          <div className="tuteeAdditionalInfoBackground"></div>
          <h2 className="tuteeAdditionalInfo">Additional Information</h2>
          <div className="tuteeAdditionalInfoRecordsSection">
            <span className="profileAnswer quote">
              "{props.tutor.tutor_miscinfo}"
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TutorProfile;
