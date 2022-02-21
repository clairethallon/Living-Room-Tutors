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
    { name: props.tutee.tutee_language_other, status: false },
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
    if (props.tutee.tutee_language_other !== null) {
      currentLanguages.push(props.tutee.tutee_language_other);
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
          {subjects.map((tuteeSubj) => {
            if (tuteeSubj.dbname === props.tutee.subject_1 && (
              tuteeSubj.name === "Precalculus/Trigonometry " ||
              tuteeSubj.name === "Chemistry " ||
              tuteeSubj.name === "Biology/Life Sciences " ||
              tuteeSubj.name === "Physics " ||
              tuteeSubj.name === "Computer Science " ||
              tuteeSubj.name === "Chinese " ||
              tuteeSubj.name === "Spanish " ||
              tuteeSubj.name === "French " ||
              tuteeSubj.name === "German " ||
              tuteeSubj.name === "World History " ||
              tuteeSubj.name === "U.S. History " ||
              tuteeSubj.name === "AP/Honors Biology " ||
              tuteeSubj.name === "AP/Honors Chemistry " ||
              tuteeSubj.name === "AP/Honors Physics " ||
              tuteeSubj.name === "AP/Honors Calculus AB " ||
              tuteeSubj.name === "AP/Honors Calculus BC " ||
              tuteeSubj.name === "AP/Honors Statistics " ||
              tuteeSubj.name === "AP/Honors Computer Science " ||
              tuteeSubj.name ===
              "AP/Honors English Literature and Composition " ||
              tuteeSubj.name === "AP/Honors Language and Composition " ||
              tuteeSubj.name === "AP/Honors Macroeconomics " ||
              tuteeSubj.name === "AP/Honors Microeconomics " ||
              tuteeSubj.name === "AP/Honors Psychology " ||
              tuteeSubj.name === "AP/Honors United States History " ||
              tuteeSubj.name === "AP/Honors Government and Politics (US) " ||
              tuteeSubj.name === "AP/Honors Human Geography " ||
              tuteeSubj.name === "SAT Subject Tests " ||
              tuteeSubj.name === "SAT Prep " ||
              tuteeSubj.name === "ACT Prep ")) {
              return (
                <div className="subjectPillFlagged">
                  {" "}
                  <span className="subjectFlag">
                    {flagIcon}
                  </span>{" "}
                  {tuteeSubj.name}
                </div>
              );
            }
            else if (tuteeSubj.dbname === props.tutee.subject_1) {
              return (
                <div className="subjectPill">
                  {" "}
                  {tuteeSubj.name}
                </div>
              );
            }
          })}
        </div>

        <div className="subjectContainer">
          <p className="profileQuestion">2nd subject choice:</p>
          {subjects.map((tuteeSubj) => {
            if (tuteeSubj.dbname === props.tutee.subject_2 && (
              tuteeSubj.name === "Precalculus/Trigonometry " ||
              tuteeSubj.name === "Chemistry " ||
              tuteeSubj.name === "Biology/Life Sciences " ||
              tuteeSubj.name === "Physics " ||
              tuteeSubj.name === "Computer Science " ||
              tuteeSubj.name === "Chinese " ||
              tuteeSubj.name === "Spanish " ||
              tuteeSubj.name === "French " ||
              tuteeSubj.name === "German " ||
              tuteeSubj.name === "World History " ||
              tuteeSubj.name === "U.S. History " ||
              tuteeSubj.name === "AP/Honors Biology " ||
              tuteeSubj.name === "AP/Honors Chemistry " ||
              tuteeSubj.name === "AP/Honors Physics " ||
              tuteeSubj.name === "AP/Honors Calculus AB " ||
              tuteeSubj.name === "AP/Honors Calculus BC " ||
              tuteeSubj.name === "AP/Honors Statistics " ||
              tuteeSubj.name === "AP/Honors Computer Science " ||
              tuteeSubj.name ===
              "AP/Honors English Literature and Composition " ||
              tuteeSubj.name === "AP/Honors Language and Composition " ||
              tuteeSubj.name === "AP/Honors Macroeconomics " ||
              tuteeSubj.name === "AP/Honors Microeconomics " ||
              tuteeSubj.name === "AP/Honors Psychology " ||
              tuteeSubj.name === "AP/Honors United States History " ||
              tuteeSubj.name === "AP/Honors Government and Politics (US) " ||
              tuteeSubj.name === "AP/Honors Human Geography " ||
              tuteeSubj.name === "SAT Subject Tests " ||
              tuteeSubj.name === "SAT Prep " ||
              tuteeSubj.name === "ACT Prep ")) {
              return (
                <div className="subjectPillFlagged">
                  {" "}
                  <span className="subjectFlag">
                    {flagIcon}
                  </span>{" "}
                  {tuteeSubj.name}
                </div>
              );
            }
            else if (tuteeSubj.dbname === props.tutee.subject_2) {
              return (
                <div className="subjectPill">
                  {" "}
                  {tuteeSubj.name}
                </div>
              );
            }
          })}
        </div>

        <div className="subjectContainer">
          <p className="profileQuestion">3nd subject choice:</p>
          {subjects.map((tuteeSubj) => {
            if (tuteeSubj.dbname === props.tutee.subject_3 && (
              tuteeSubj.name === "Precalculus/Trigonometry " ||
              tuteeSubj.name === "Chemistry " ||
              tuteeSubj.name === "Biology/Life Sciences " ||
              tuteeSubj.name === "Physics " ||
              tuteeSubj.name === "Computer Science " ||
              tuteeSubj.name === "Chinese " ||
              tuteeSubj.name === "Spanish " ||
              tuteeSubj.name === "French " ||
              tuteeSubj.name === "German " ||
              tuteeSubj.name === "World History " ||
              tuteeSubj.name === "U.S. History " ||
              tuteeSubj.name === "AP/Honors Biology " ||
              tuteeSubj.name === "AP/Honors Chemistry " ||
              tuteeSubj.name === "AP/Honors Physics " ||
              tuteeSubj.name === "AP/Honors Calculus AB " ||
              tuteeSubj.name === "AP/Honors Calculus BC " ||
              tuteeSubj.name === "AP/Honors Statistics " ||
              tuteeSubj.name === "AP/Honors Computer Science " ||
              tuteeSubj.name ===
              "AP/Honors English Literature and Composition " ||
              tuteeSubj.name === "AP/Honors Language and Composition " ||
              tuteeSubj.name === "AP/Honors Macroeconomics " ||
              tuteeSubj.name === "AP/Honors Microeconomics " ||
              tuteeSubj.name === "AP/Honors Psychology " ||
              tuteeSubj.name === "AP/Honors United States History " ||
              tuteeSubj.name === "AP/Honors Government and Politics (US) " ||
              tuteeSubj.name === "AP/Honors Human Geography " ||
              tuteeSubj.name === "SAT Subject Tests " ||
              tuteeSubj.name === "SAT Prep " ||
              tuteeSubj.name === "ACT Prep ")) {
              return (
                <div className="subjectPillFlagged">
                  {" "}
                  <span className="subjectFlag">
                    {flagIcon}
                  </span>{" "}
                  {tuteeSubj.name}
                </div>
              );
            }
            else if (tuteeSubj.dbname === props.tutee.subject_3) {
              return (
                <div className="subjectPill">
                  {" "}
                  {tuteeSubj.name}
                </div>
              );
            }
          })}
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
