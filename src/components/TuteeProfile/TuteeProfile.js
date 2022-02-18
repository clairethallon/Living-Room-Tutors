import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

function TuteeProfile(props) {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const flagIcon = <FontAwesomeIcon icon={faStar} />;

  const store = useSelector((store) => store);
  const [tuteeLanguages, setTuteeLanguages] = useState([]);
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  useEffect(() => {
    languageFinder(languages);
    subjectFinder(subjects);
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

  const languageFinder = (languages) => {
    console.log(languages);
    let currentLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].status === true) {
        currentLanguages.push(languages[i].name);
      }
    }
    console.log("CURRENT LANGUAGES", currentLanguages);
    setTuteeLanguages(currentLanguages);
    return currentLanguages;
  };

  const subjectFinder = (subjects) => {
    console.log("in subjectFinder");
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].dbname == props.tutee.subject_1) {
        setSubject1(subjects[i].name);
      }
      if (subjects[i].dbname == props.tutee.subject_2) {
        setSubject2(subjects[i].name);
      }
      if (subjects[i].dbname == props.tutee.subject_3) {
        setSubject3(subjects[i].name);
      }
    }
  };

  return (
    <div>
      <div class="tuteeInfoBackground"> </div>
      <h2 className="tuteeInfo">Tutee General Information</h2>

      <div className="tuteeGeneralInfoRecordsSection">
        <div className="profileTitle">
          <h2 className="profileFirstLastName">
            {props.tutee.tutee_firstname} {props.tutee.tutee_lastname}
          </h2>
          {props.tutee.tutee_pronouns && <p>({props.tutee.tutee_pronouns})</p>}
        </div>

        <div>
          <p className="profileQuestion">
            {emailIcon} Parent/Guardian's Email:
          </p>
          <p className="profileAnswer"> {props.tutee.email_guardian}</p>
        </div>
        <div>
          <p className="profileQuestion">{emailIcon} Student's email:</p>
          <p className="profileAnswer"> {props.tutee.email_student}</p>
        </div>
        <div>
          <p className="profileQuestion">{phoneIcon} Phone number: </p>
          <p className="profileAnswer"> {props.tutee.tutee_phone}</p>
        </div>
        <div>
          <p className="profileQuestion">Grade Level:</p>
          {props.tutee.tutee_grade === "prek_kindergarten" ? (
            <p className="profileAnswer"> Pre-K/Kindergarten</p>
          ) : (
            <p className="profileAnswer"> {props.tutee.tutee_grade}</p>
          )}
        </div>

        <div>
          <p className="profileQuestion">School attending: </p>
          <p className="profileAnswer">{props.tutee.tutee_school}</p>
        </div>

        <div>
          <p className="profileQuestion">Language preference:</p>
          <div className="languagePillContainer">
            {tuteeLanguages.map((language) => {
              return (
                <div className="languagePill">
                  {" "}
                  <span className="languageFlag">{flagIcon}</span> {language}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* -----------SUBJECT SECTION---------- */}

      <div className="tuteeSubjectBackground"></div>
      <h2 className="tuteeSubject">Tutee Subject Preference</h2>
      <div className="tuteeSubjectRecordsSection">
        <div className="subjectContainer">
          <p className="profileQuestion">1st subject choice:</p>
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
          subject1 === "AP/Honors English Literature and Composition " ||
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
          <p className="profileQuestion">2nd subject choice:</p>
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
          subject2 === "AP/Honors English Literature and Composition " ||
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
          <p className="profileQuestion">3nd subject choice:</p>
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
          subject3 === "AP/Honors English Literature and Composition " ||
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

        {props.tutee.tutee_subject_details && (
          <div>
            <p className="profileQuestion">
              Detail description regarding help needed:{" "}
            </p>
            <p className="profileAnswer quote">
              "{props.tutee.tutee_subject_details}"
            </p>
          </div>
        )}
      </div>

      {props.tutee.tutee_misc_info && (
        <div>
          <div className="tuteeAdditionalInfoBackground"></div>
          <h2 className="tuteeAdditionalInfo">Additional Information</h2>
          <div className="tuteeAdditionalInfoRecordsSection">
            <span className="profileAnswer quote">
              "{props.tutee.tutee_misc_info}"
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TuteeProfile;
