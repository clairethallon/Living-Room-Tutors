import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteeProfile with the name for the new component.
function TutorProfile(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
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
  ];

  const subjects = [
    { name: "K-5 Math ", status: props.tutor.tutor_K5_Math },
    { name: "K-5 Reading ", status: props.tutor.tutor_K5_Reading },
    { name: "K-5 English/Writing ", status: props.tutor.tutor_K5_English_Writing },
    { name: "K-5 Social Studies ", status: props.tutor.tutor_K5_Science },
    { name: "K-5 Science ", status: props.tutor.tutor_K5_social_studies },
    { name: "6-8th Language Arts ", status: props.tutor.tutor_6th_to_8th_language_arts },
    { name: "6-8th Science ", status: props.tutor.tutor_6th_to_8th_science },
    { name: "6-8th Social Studies ", status: props.tutor.tutor_6th_to_8th_social_studies },
    { name: "Pre-Algebra ", status: props.tutor.tutor_math_pre_algebra },
    { name: "Algebra I/ Linear Algebra ", status: props.tutor.tutor_math_alg1_linear_alg },
    { name: "Algebra II ", status: props.tutor.tutor_math_alg2 },
    { name: "Geometry ", status: props.tutor.tutor_math_geom },
    { name: "Precalculus/Trigonometry ", status: props.tutor.tutor_math_precalc_trig },
    { name: "Biology/Life Sciences ", status: props.tutor.tutor_sci_bio_life },
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
    { name: "AP/Honors Computer Science ", status: props.tutor.tutor_ap_comp_sci },
    { name: "AP/Honors English Literature and Composition ", status: props.tutor.tutor_ap_english_lit_comp },
    { name: "AP/Honors Language and Composition ", status: props.tutor.tutor_ap_lang_comp },
    { name: "AP/Honors Macroeconomics ", status: props.tutor.tutor_ap_macro_econ },
    { name: "AP/Honors Microeconomics ", status: props.tutor.tutor_ap_micro_econ },
    { name: "AP/Honors Psychology ", status: props.tutor.tutor_ap_psyc },
    { name: "AP/Honors United States History ", status: props.tutor.tutor_ap_hist_us },
    { name: "AP/Honors Government and Politics (US) ", status: props.tutor.tutor_ap_gov_politics_us },
    { name: "AP/Honors Human Geography ", status: props.tutor.tutor_ap_human_geog },
    { name: "SAT Subject Tests ", status: props.tutor.tutor_sat_subject_tests },
    { name: "SAT Prep ", status: props.tutor.tutor_sat_prep },
    { name: "ACT Prep ", status: props.tutor.tutor_act_prep },

  ];

  const grades = [
    { name: "Pre-K/Kindergarten", status: props.tutor.mentor_prek_kindergarten },
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
    { name: "12th Grade", status: props.tutor.mentor_grade_12 }
  ]

  const languageFinder = (languages) => {
    console.log(languages);
    let currentLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].status === true) {
        currentLanguages.push(languages[i].name);
      }
    }
    console.log('CURRENT LANGUAGES', currentLanguages);
    setTutorLanguages(currentLanguages);
    return currentLanguages;
  };

  const subjectFinder = (subjects) => {
    // console.log(subjects);
    let mentor_subjects = [];
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].status === true) {
        mentor_subjects.push(subjects[i].name);
      }
    }
    console.log('MENTORING_SUBJECTS', mentor_subjects);
    setTutorSubjects(mentor_subjects);
    return mentor_subjects;
  };


  const gradeFinder = (grades) => {
    console.log(grades);
    let chosenGrade = []
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].status === true) {
        chosenGrade.push(grades[i].name);
      }
    }
    console.log('MENTOR GRADE', chosenGrade);
    setMentorChosenGrade(chosenGrade);
    return chosenGrade;
  }

  return (
    <div>
      {/* <p>{JSON.stringify(props)}</p> */}
      <h2>first name last name (pronouns){props.tutor.tutor_first_name}</h2>
      <p>Tutor's email: {props.tutor.tutor_email}</p>
      <p>Phone number: {props.tutor.tutor_phone}</p>
      <p>Grade Level: {props.tutor.tutor_grade}</p>
      <p>School attending: {props.tutor.tutor_school}</p>
      <p>Grades comfortable tutoring: {mentorChosenGrade.map((grade) => { return <p>{grade}</p> })} </p>
      <p>Subjects comfortable tutoring: {tutorSubjects.map((subject) => { return <p>{subject}</p> })}</p>
      <p>Languages comfortable tutoring in: {tutorLanguages.map((language) => { return <p>{language}</p> })}

      </p>
      <p>Additional information:</p>
    </div>
  );
}

export default TutorProfile;
