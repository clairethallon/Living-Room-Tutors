import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../TuteeProfile/TuteeProfile.css";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteeProfile with the name for the new component.
function TuteeProfile(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");
  const [tuteeLanguages, setTuteeLanguages] = useState([]);

  useEffect(() => {
    languageFinder(languages);
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


  const languageFinder = (languages) => {
    console.log(languages);
    let currentLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].status === true) {
        currentLanguages.push(languages[i].name);
      }
    }
    console.log('CURRENT LANGUAGES', currentLanguages);
    setTuteeLanguages(currentLanguages);
    return currentLanguages;
  };

  return (
    <div>
      {/* {JSON.stringify(currentLanguages)} */}
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
        Language preference (if not English): {tuteeLanguages.map((language) => { return <p>{language}</p> })}
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
