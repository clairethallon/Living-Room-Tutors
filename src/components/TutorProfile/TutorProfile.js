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
  // const [tutorLanguages, setTutorLanguages] = useState([]);

  // useEffect(() => {
  //   languageFinder(languages);
  // }, []);

  // const languages = [
  //   { name: "Arabic ", status: props.tutor.tutor_language_arabic },
  //   { name: "Chinese ", status: props.tutor.tutor_language_chinese },
  //   { name: "French ", status: props.tutor.tutor_language_french },
  //   { name: "Hmong ", status: props.tutor.tutor_language_hmong },
  //   { name: "Somali ", status: props.tutor.tutor_language_somali },
  //   { name: "Tagalog ", status: props.tutor.tutor_language_tagalog },
  //   { name: "Vietnamese ", status: props.tutor.tutor_language_vietnamese },
  //   { name: "Spanish ", status: props.tutor.tutor_language_spanish },
  // ];

  // const subjects = [
  //   { name: "K-5 Math ", status: props.tutee.tutee_language_arabic },
  //   { name: "K-5 Reading ", status: props.tutee.tutee_language_chinese },
  //   { name: "K-5 English/Writing ", status: props.tutee.tutee_language_french },
  //   { name: "K-5 Social Studies ", status: props.tutee.tutee_language_hmong },
  //   { name: "K-5 Science ", status: props.tutee.tutee_language_somali },
  //   { name: "6-8th Language Arts ", status: props.tutee.tutee_language_tagalog },
  //   { name: "6-8th Science ", status: props.tutee.tutee_language_vietnamese },
  //   { name: "6-8th Social Studies ", status: props.tutee.tutee_language_spanish },
  //   { name: "Math: Pre-Algebra ", status: props.tutee.tutee_language_arabic },
  //   { name: "Math: Algebra I/ Linear Algebra ", status: props.tutee.tutee_language_chinese },
  //   { name: "Math: Algebra II ", status: props.tutee.tutee_language_french },
  //   { name: "Math: Geometry ", status: props.tutee.tutee_language_hmong },
  //   { name: "Math: Precalculus/Trigonometry ", status: props.tutee.tutee_language_somali },
  //   { name: "Science: Biology/Life Sciences ", status: props.tutee.tutee_language_tagalog },
  //   { name: "Science: Chemistry ", status: props.tutee.tutee_language_vietnamese },
  //   { name: "Science: Physics ", status: props.tutee.tutee_language_spanish },
  //   { name: "Science: Computer Science ", status: props.tutee.tutee_language_arabic },
  //   { name: "Language: Chinese ", status: props.tutee.tutee_language_chinese },
  //   { name: "Language: Spanish ", status: props.tutee.tutee_language_french },
  //   { name: "Language: French ", status: props.tutee.tutee_language_hmong },
  //   { name: "Language: German ", status: props.tutee.tutee_language_somali },
  //   { name: "History: World History ", status: props.tutee.tutee_language_tagalog },
  //   { name: "History: U.S. History ", status: props.tutee.tutee_language_vietnamese },
  //   { name: "AP/Honors Biology ", status: props.tutee.tutee_language_spanish },
  //   { name: "AP/Honors Chemistry ", status: props.tutee.tutee_language_arabic },
  //   { name: "AP/Honors Physics ", status: props.tutee.tutee_language_chinese },
  //   { name: "AP/Honors Calculus AB ", status: props.tutee.tutee_language_french },
  //   { name: "AP/Honors Calculus BC ", status: props.tutee.tutee_language_hmong },
  //   { name: "AP/Honors Statistics ", status: props.tutee.tutee_language_somali },
  //   { name: "AP/Honors Computer Science ", status: props.tutee.tutee_language_tagalog },
  //   { name: "AP/Honors English Literature and Composition ", status: props.tutee.tutee_language_vietnamese },
  //   { name: "AP/Honors Language and Composition ", status: props.tutee.tutee_language_spanish },
  //   { name: "AP/Honors Macroeconomics ", status: props.tutee.tutee_language_tagalog },
  //   { name: "AP/Honors Microeconomics ", status: props.tutee.tutee_language_vietnamese },
  //   { name: "AP/Honors Psychology ", status: props.tutee.tutee_language_spanish },
  //   { name: "AP/Honors United States History ", status: props.tutee.tutee_language_tagalog },
  //   { name: "AP/Honors Government and Politics (US) ", status: props.tutee.tutee_language_vietnamese },
  //   { name: "AP/Honors Human Geography ", status: props.tutee.tutee_language_spanish },
  //   { name: "SAT Subject Tests ", status: props.tutee.tutee_language_spanish },
  //   { name: "SAT Prep ", status: props.tutee.tutee_language_spanish },
  //   { name: "ACT Prep ", status: props.tutee.tutee_language_spanish },

  // ];

  // const languageFinder = (languages) => {
  //   console.log(languages);
  //   let currentLanguages = [];
  //   for (let i = 0; i < languages.length; i++) {
  //     if (languages[i].status === true) {
  //       currentLanguages.push(languages[i].name);
  //     }
  //   }
  //   console.log('CURRENT LANGUAGES', currentLanguages);
  //   setTutorLanguages(currentLanguages);
  //   return currentLanguages;
  // };

  return (
    <div>
      {/* <p>{JSON.stringify(props)}</p> */}
      <h2>first name last name (pronouns){props.tutor.tutor_first_name}</h2>
      <p>Tutor's email:</p>
      <p>Phone number:</p>
      <p>Grade Level:</p>
      <p>School attending:</p>
      <p>Grades comfortable tutoring:</p>
      <p>Subjects comfortable tutoring:</p>
      <p>Languages:</p>
      <p>Additional information:</p>
    </div>
  );
}

export default TutorProfile;
