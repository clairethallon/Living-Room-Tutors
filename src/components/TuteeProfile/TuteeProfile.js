import React, { useState } from "react";
import { useSelector } from "react-redux";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteeProfile with the name for the new component.
function TuteeProfile(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  // const languages = [
  //   props.tutee.tutee_language_arabic,
  //   props.tutee.tutee_language_chinese,
  //   props.tutee.tutee_language_french,
  //   props.tutee.tutee_language_hmong,
  //   props.tutee.tutee_language_somali,
  //   props.tutee.tutee_language_tagalog,
  //   props.tutee.tutee_language_vietnamese,
  //   props.tutee.tutee_language_spanish,
  // ];

  // const languageFinder = (languages) => {
  //   let currentLanguages = [];
  //   for (let i = 0; i < languages.length; i++) {
  //     if (languages[0] === true) {
  //       currentLanguages.push("Arabic");
  //     }
  //   }
  // };

  return (
    <div>
      {/* {JSON.stringify(languages)} */}
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
        Language preference (if not English): {props.tutee.language_tutee_id}
      </p>
      <p>1st subject choice: {props.tutee.subject_1}</p>
      <p>2st subject choice: {props.tutee.subject_2}</p>
      <p>3st subject choice: {props.tutee.subject_3}</p>
      <p>other subject (if applicable): </p>
      <p>Detail description regarding help needed:</p>
      <p>Addition information:</p>
    </div>
  );
}

export default TuteeProfile;
