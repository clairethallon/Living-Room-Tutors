import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../Header/Header";
import TutorProgressBar from "../TutorProgressBar/TutorProgressBar";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function TutorSubjects(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const presenting = true;

  const setDefaults = () => {
    if (presenting) {
      setPreK(true);
      setFirstGrade(true);
      setSecondGrade(true);
      setThirdGrade(true);
      setFourthGrade(true);
      setFifthGrade(true);
      setSixthGrade(true);
      setSeventhGrade(true);
      setEighthGrade(true);
      setNinthGrade(true);
      setTenthGrade(true);
      setEleventhGrade(true);
      setTwelfthGrade(false);
      setK5Math(true);
      setK5Reading(true);
      setK5EnglishWriting(true);
      setK5SocialStudies(true);
      setK5Science(true);
      setSixToEightLanguageArts(true);
      setSixToEightScience(true);
      setSixToEightSocialStudies(true);
      setAPHonorsUSHistory(true);
      setArabic(true);
    }
  };

  const history = useHistory();

  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;
  const newtutorSubj = useSelector((store) => store.newtutor.newtutorSubjectReducer);


  useEffect(() => {
    scrollToTop();
    checkReducer(newtutorSubj);
  }, []);

  const checkReducer = (newtutorSubj) => {
    console.log('in checkReducer', newtutorSubj);
    if (newtutorSubj.length == 0) {
      console.log('EMPTY');
      return false;
    }
    else {
      setPreK(newtutorSubj.PreK)
      setFirstGrade(newtutorSubj.FirstGrade)
      setSecondGrade(newtutorSubj.SecondGrade)
      setThirdGrade(newtutorSubj.ThirdGrade)
      setFourthGrade(newtutorSubj.FourthGrade)
      setFifthGrade(newtutorSubj.FifthGrade)
      setSixthGrade(newtutorSubj.SixthGrade)
      setSeventhGrade(newtutorSubj.SeventhGrade)
      setEighthGrade(newtutorSubj.EighthGrade)
      setNinthGrade(newtutorSubj.NinthGrade)
      setTenthGrade(newtutorSubj.TenthGrade)
      setEleventhGrade(newtutorSubj.EleventhGrade)
      setTwelfthGrade(newtutorSubj.TwelfthGrade)

      setK5Math(newtutorSubj.K5Math)
      setK5Reading(newtutorSubj.K5Reading)
      setK5EnglishWriting(newtutorSubj.K5EnglishWriting)
      setK5SocialStudies(newtutorSubj.K5SocialStudies)
      setK5Science(newtutorSubj.K5Science)
      setSixToEightLanguageArts(newtutorSubj.SixToEightLanguageArts)
      setSixToEightScience(newtutorSubj.SixToEightScience)
      setSixToEightSocialStudies(newtutorSubj.SixToEightSocialStudies)
      setMathPreAlgebra(newtutorSubj.MathPreAlgebra)
      setMathLinearAlgebra(newtutorSubj.MathLinearAlgebra)
      setMathGeometry(newtutorSubj.MathGeometry)
      setMathAlgebraII(newtutorSubj.MathAlgebraII)
      setMathPrecalculusTrigonometry(newtutorSubj.MathPrecalculusTrigonometry)
      setBiologyLifeSciences(newtutorSubj.BiologyLifeSciences)
      setScienceChemistry(newtutorSubj.ScienceChemistry)
      setSciencePhysics(newtutorSubj.SciencePhysics)
      setComputerScience(newtutorSubj.ComputerScience)
      setLanguageChinese(newtutorSubj.LanguageChinese)
      setLanguageSpanish(newtutorSubj.LanguageSpanish)
      setLanguageFrench(newtutorSubj.LanguageFrench)
      setLanguageGerman(newtutorSubj.LanguageGerman)
      setWorldHistory(newtutorSubj.WorldHistory)
      setUSHistory(newtutorSubj.USHistory)
      setAPHonorsBiology(newtutorSubj.APHonorsBiology)
      setAPHonorsChemistry(newtutorSubj.APHonorsChemistry)
      setAPHonorsPhysics(newtutorSubj.APHonorsPhysics)
      setAPHonorsComputerScience(newtutorSubj.APHonorsComputerScience)
      setAPHonorsCalculusAB(newtutorSubj.APHonorsCalculusAB)
      setAPHonorsCalculusBC(newtutorSubj.APHonorsCalculusBC)
      setAPHonorsStatistics(newtutorSubj.APHonorsStatistics)
      setAPHonorsEnglishLiterature(newtutorSubj.APHonorsEnglishLiterature)
      setAPHonorsEnglishLanguage(newtutorSubj.APHonorsEnglishLanguage)
      setAPHonorsMacroeconomics(newtutorSubj.APHonorsMacroeconomics)
      setAPHonorsMicroeconomics(newtutorSubj.APHonorsMicroeconomics)
      setAPHonorsPsychology(newtutorSubj.APHonorsPsychology)
      setAPHonorsUSHistory(newtutorSubj.APHonorsUSHistory)
      setAPHonorsGovernmentPolitics(newtutorSubj.APHonorsGovernmentPolitics)
      setAPHonorsHumanGeography(newtutorSubj.APHonorsHumanGeography)
      setSATSubjectTests(newtutorSubj.SATSubjectTests)
      setSATPrep(newtutorSubj.SATPrep)
      setACTPrep(newtutorSubj.ACTPrep)
      setOther(newtutorSubj.Other)

      setSpanish(newtutorSubj.Spanish)
      setSomali(newtutorSubj.Somali)
      setArabic(newtutorSubj.Arabic)
      setChinese(newtutorSubj.Chinese)
      setTagalog(newtutorSubj.Tagalog)
      setFrench(newtutorSubj.French)
      setVietnamese(newtutorSubj.Vietnamese)
      setHmong(newtutorSubj.Hmong)
      setIsLangChecked(newtutorSubj.IsLangChecked)
      setotherLanguage(newtutorSubj.otherLanguage)
    }
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // ******** GRADE CHECK BOXES **************
  const [PreK, setPreK] = useState(false);
  const [FirstGrade, setFirstGrade] = useState(false);
  const [SecondGrade, setSecondGrade] = useState(false);
  const [ThirdGrade, setThirdGrade] = useState(false);
  const [FourthGrade, setFourthGrade] = useState(false);
  const [FifthGrade, setFifthGrade] = useState(false);
  const [SixthGrade, setSixthGrade] = useState(false);
  const [SeventhGrade, setSeventhGrade] = useState(false);
  const [EighthGrade, setEighthGrade] = useState(false);
  const [NinthGrade, setNinthGrade] = useState(false);
  const [TenthGrade, setTenthGrade] = useState(false);
  const [EleventhGrade, setEleventhGrade] = useState(false);
  const [TwelfthGrade, setTwelfthGrade] = useState(false);
  // ******** GRADE CHECK BOXES **************

  // ******** SUBJECT CHECK BOXES **************
  const [K5Math, setK5Math] = useState(false);
  const [K5Reading, setK5Reading] = useState(false);
  const [K5EnglishWriting, setK5EnglishWriting] = useState(false);
  const [K5SocialStudies, setK5SocialStudies] = useState(false);
  const [K5Science, setK5Science] = useState(false);
  const [SixToEightLanguageArts, setSixToEightLanguageArts] = useState(false);
  const [SixToEightScience, setSixToEightScience] = useState(false);
  const [SixToEightSocialStudies, setSixToEightSocialStudies] = useState(false);
  const [MathPreAlgebra, setMathPreAlgebra] = useState(false);
  const [MathLinearAlgebra, setMathLinearAlgebra] = useState(false);
  const [MathGeometry, setMathGeometry] = useState(false);
  const [MathAlgebraII, setMathAlgebraII] = useState(false);
  const [MathPrecalculusTrigonometry, setMathPrecalculusTrigonometry] =
    useState(false);
  const [BiologyLifeSciences, setBiologyLifeSciences] = useState(false);
  const [ScienceChemistry, setScienceChemistry] = useState(false);
  const [SciencePhysics, setSciencePhysics] = useState(false);
  const [ComputerScience, setComputerScience] = useState(false);
  const [LanguageChinese, setLanguageChinese] = useState(false);
  const [LanguageSpanish, setLanguageSpanish] = useState(false);
  const [LanguageFrench, setLanguageFrench] = useState(false);
  const [LanguageGerman, setLanguageGerman] = useState(false);
  const [WorldHistory, setWorldHistory] = useState(false);
  const [USHistory, setUSHistory] = useState(false);
  const [APHonorsBiology, setAPHonorsBiology] = useState(false);
  const [APHonorsChemistry, setAPHonorsChemistry] = useState(false);
  const [APHonorsPhysics, setAPHonorsPhysics] = useState(false);
  const [APHonorsComputerScience, setAPHonorsComputerScience] = useState(false);
  const [APHonorsCalculusAB, setAPHonorsCalculusAB] = useState(false);
  const [APHonorsCalculusBC, setAPHonorsCalculusBC] = useState(false);
  const [APHonorsStatistics, setAPHonorsStatistics] = useState(false);
  const [APHonorsEnglishLiterature, setAPHonorsEnglishLiterature] =
    useState(false);
  const [APHonorsEnglishLanguage, setAPHonorsEnglishLanguage] = useState(false);
  const [APHonorsMacroeconomics, setAPHonorsMacroeconomics] = useState(false);
  const [APHonorsMicroeconomics, setAPHonorsMicroeconomics] = useState(false);
  const [APHonorsPsychology, setAPHonorsPsychology] = useState(false);
  const [APHonorsUSHistory, setAPHonorsUSHistory] = useState(false);
  const [APHonorsGovernmentPolitics, setAPHonorsGovernmentPolitics] =
    useState(false);
  const [APHonorsHumanGeography, setAPHonorsHumanGeography] = useState(false);
  const [SATSubjectTests, setSATSubjectTests] = useState(false);
  const [SATPrep, setSATPrep] = useState(false);
  const [ACTPrep, setACTPrep] = useState(false);
  const [Other, setOther] = useState(false);
  // ******** SUBJECT CHECK BOXES **************

  // ******** LANGUAGE CHECK BOXES **************
  const [Spanish, setSpanish] = useState(false);
  const [Somali, setSomali] = useState(false);
  const [Arabic, setArabic] = useState(false);
  const [Chinese, setChinese] = useState(false);
  const [Tagalog, setTagalog] = useState(false);
  const [French, setFrench] = useState(false);
  const [Vietnamese, setVietnamese] = useState(false);
  const [Hmong, setHmong] = useState(false);
  const [IsLangChecked, setIsLangChecked] = useState(true);
  const [otherLanguage, setotherLanguage] = useState('');
  // ******** LANGUAGE CHECK BOXES **************

  // *********** TUTOR GRADE LEVELS ****************
  const changePreK = () => {
    setPreK(!PreK);
    console.log("PreK", PreK);
  };

  const changeFirstGrade = () => {
    setFirstGrade(!FirstGrade);
    console.log("FirstGrade", FirstGrade);
  };

  const changeSecondGrade = () => {
    setSecondGrade(!SecondGrade);
    console.log("SecondGrade", SecondGrade);
  };

  const changeThirdGrade = () => {
    setThirdGrade(!ThirdGrade);
    console.log("ThirdGrade", ThirdGrade);
  };

  const changeFourthGrade = () => {
    setFourthGrade(!FourthGrade);
    console.log("FourthGrade", FourthGrade);
  };

  const changeFifthGrade = () => {
    setFifthGrade(!FifthGrade);
    console.log("FifthGrade", FifthGrade);
  };

  const changeSixthGrade = () => {
    setSixthGrade(!SixthGrade);
    console.log("SixthGrade", SixthGrade);
  };

  const changeSeventhGrade = () => {
    setSeventhGrade(!SeventhGrade);
    console.log("SeventhGrade", SeventhGrade);
  };

  const changeEighthGrade = () => {
    setEighthGrade(!EighthGrade);
    console.log("EighthGrade", EighthGrade);
  };

  const changeNinthGrade = () => {
    setNinthGrade(!NinthGrade);
    console.log("NinthGrade", NinthGrade);
  };

  const changeTenthGrade = () => {
    setTenthGrade(!TenthGrade);
    console.log("TenthGrade", TenthGrade);
  };

  const changeEleventhGrade = () => {
    setEleventhGrade(!EleventhGrade);
    console.log("EleventhGrade", EleventhGrade);
  };

  const changeTwelfthGrade = () => {
    setTwelfthGrade(!TwelfthGrade);
    console.log("TwelfthGrade", TwelfthGrade);
  };
  // *********** TUTOR GRADE LEVELS *****************

  // **************** TUTOR SUBJECTS *******************
  const changeK5Math = () => {
    setK5Math(!K5Math);
    console.log("K5Math", K5Math);
  };

  const changeK5Reading = () => {
    setK5Reading(!K5Reading);
    console.log("K5Reading", K5Reading);
  };

  const changeK5EnglishWriting = () => {
    setK5EnglishWriting(!K5EnglishWriting);
    console.log("K5EnglishWriting", K5EnglishWriting);
  };

  const changeK5SocialStudies = () => {
    setK5SocialStudies(!K5SocialStudies);
    console.log("K5SocialStudies", K5SocialStudies);
  };

  const changeK5Science = () => {
    setK5Science(!K5Science);
    console.log("K5Science", K5Science);
  };

  const changeSixToEightLanguageArts = () => {
    setSixToEightLanguageArts(!SixToEightLanguageArts);
    console.log("SixToEightLanguageArts", SixToEightLanguageArts);
  };

  const changeSixToEightScience = () => {
    setSixToEightScience(!SixToEightScience);
    console.log("SixToEightScience", SixToEightScience);
  };

  const changeSixToEightSocialStudies = () => {
    setSixToEightSocialStudies(!SixToEightSocialStudies);
    console.log("SixToEightSocialStudies", SixToEightSocialStudies);
  };

  const changeMathPreAlgebra = () => {
    setMathPreAlgebra(!MathPreAlgebra);
    console.log("MathPreAlgebra", MathPreAlgebra);
  };

  const changeMathLinearAlgebra = () => {
    setMathLinearAlgebra(!MathLinearAlgebra);
    console.log("MathLinearAlgebr", MathLinearAlgebra);
  };

  const changeMathAlgebraII = () => {
    setMathAlgebraII(!MathAlgebraII);
    console.log("MathAlgebraII", MathAlgebraII);
  };

  const changeMathGeometry = () => {
    setMathGeometry(!MathGeometry);
    console.log("MathGeometry", MathGeometry);
  };

  const changeMathPrecalculusTrigonometry = () => {
    setMathPrecalculusTrigonometry(!MathPrecalculusTrigonometry);
    console.log("MathPrecalculusTrigonometry", MathPrecalculusTrigonometry);
  };

  const changeBiologyLifeSciences = () => {
    setBiologyLifeSciences(!BiologyLifeSciences);
    console.log("BiologyLifeSciences", BiologyLifeSciences);
  };

  const changeScienceChemistry = () => {
    setScienceChemistry(!ScienceChemistry);
    console.log("ScienceChemistry", ScienceChemistry);
  };

  const changeSciencePhysics = () => {
    setSciencePhysics(!SciencePhysics);
    console.log("SciencePhysics", SciencePhysics);
  };

  const changeComputerScience = () => {
    setComputerScience(!ComputerScience);
    console.log("ComputerScience", ComputerScience);
  };

  const changeLanguageChinese = () => {
    setLanguageChinese(!LanguageChinese);
    console.log("LanguageChinese", LanguageChinese);
  };

  const changeLanguageSpanish = () => {
    setLanguageSpanish(!LanguageSpanish);
    console.log("LanguageSpanish", LanguageSpanish);
  };

  const changeLanguageFrench = () => {
    setLanguageFrench(!LanguageFrench);
    console.log("LanguageFrench", LanguageFrench);
  };

  const changeLanguageGerman = () => {
    setLanguageGerman(!LanguageGerman);
    console.log("LanguageGerman", LanguageGerman);
  };

  const changeWorldHistory = () => {
    setWorldHistory(!WorldHistory);
    console.log("WorldHistory", WorldHistory);
  };

  const changeUSHistory = () => {
    setUSHistory(!USHistory);
    console.log("USHistory", USHistory);
  };

  const changeAPHonorsBiology = () => {
    setAPHonorsBiology(!APHonorsBiology);
    console.log("APHonorsBiology", APHonorsBiology);
  };

  const changeAPHonorsChemistry = () => {
    setAPHonorsChemistry(!APHonorsChemistry);
    console.log("APHonorsChemistry", APHonorsChemistry);
  };

  const changeAPHonorsPhysics = () => {
    setAPHonorsPhysics(!APHonorsPhysics);
    console.log("APHonorsPhysics", APHonorsPhysics);
  };

  const changeAPHonorsComputerScience = () => {
    setAPHonorsComputerScience(!APHonorsComputerScience);
    console.log("APHonorsComputerScience", APHonorsComputerScience);
  };

  const changeAPHonorsCalculusAB = () => {
    setAPHonorsCalculusAB(!APHonorsCalculusAB);
    console.log("APHonorsCalculusAB", APHonorsCalculusAB);
  };

  const changeAPHonorsCalculusBC = () => {
    setAPHonorsCalculusBC(!APHonorsCalculusBC);
    console.log("APHonorsCalculusBC", APHonorsCalculusBC);
  };

  const changeAPHonorsStatistics = () => {
    setAPHonorsStatistics(!APHonorsStatistics);
    console.log("APHonorsStatistics", APHonorsStatistics);
  };

  const changeAPHonorsEnglishLiterature = () => {
    setAPHonorsEnglishLiterature(!APHonorsEnglishLiterature);
    console.log("APHonorsEnglishLiterature", APHonorsEnglishLiterature);
  };

  const changeAPHonorsEnglishLanguage = () => {
    setAPHonorsEnglishLanguage(!APHonorsEnglishLanguage);
    console.log("APHonorsEnglishLanguage", APHonorsEnglishLanguage);
  };

  const changeAPHonorsMacroeconomics = () => {
    setAPHonorsMacroeconomics(!APHonorsMacroeconomics);
    console.log("APHonorsMacroeconomics", APHonorsMacroeconomics);
  };

  const changeAPHonorsMicroeconomics = () => {
    setAPHonorsMicroeconomics(!APHonorsMicroeconomics);
    console.log("APHonorsMicroeconomics", APHonorsMicroeconomics);
  };

  const changeAPHonorsPsychology = () => {
    setAPHonorsPsychology(!APHonorsPsychology);
    console.log("APHonorsPsychology", APHonorsPsychology);
  };

  const changeAPHonorsUSHistory = () => {
    setAPHonorsUSHistory(!APHonorsUSHistory);
    console.log("APHonorsUSHistory", APHonorsUSHistory);
  };

  const changeAPHonorsGovernmentPolitics = () => {
    setAPHonorsGovernmentPolitics(!APHonorsGovernmentPolitics);
    console.log("APHonorsGovernmentPolitics", APHonorsGovernmentPolitics);
  };
  const changeAPHonorsHumanGeography = () => {
    setAPHonorsHumanGeography(!APHonorsHumanGeography);
    console.log("APHonorsHumanGeography", APHonorsHumanGeography);
  };

  const changeSATSubjectTests = () => {
    setSATSubjectTests(!SATSubjectTests);
    console.log("SATSubjectTests", SATSubjectTests);
  };

  const changeSATPrep = () => {
    setSATPrep(!SATPrep);
    console.log("SATPrep", SATPrep);
  };

  const changeACTPrep = () => {
    setACTPrep(!ACTPrep);
    console.log("ACTPrep", ACTPrep);
  };

  // **************** TUTOR SUBJECTS *******************

  // ******** LANGUAGE CHECK BOXES **************
  const changeSpanish = () => {
    setSpanish(!Spanish);
    console.log("Spanish", Spanish);
  };

  const changeSomali = () => {
    setSomali(!Somali);
    console.log("Somali", Somali);
  };

  const changeArabic = () => {
    setArabic(!Arabic);
    console.log("Arabic", Arabic);
  };

  const changeChinese = () => {
    setChinese(!Chinese);
    console.log("Chinese", Chinese);
  };

  const changeTagalog = () => {
    setTagalog(!Tagalog);
    console.log("Tagalog:", Tagalog);
  };

  const changeFrench = () => {
    setFrench(!French);
    console.log("French", French);
  };

  const changeVietnamese = () => {
    setVietnamese(!Vietnamese);
    console.log("Vietnamese", Vietnamese);
  };

  const changeHmong = () => {
    setHmong(!Hmong);
    console.log("Hmong", Hmong);
  };

  const changeIsLangChecked = () => {
    setIsLangChecked(!IsLangChecked);
    console.log("is other checked?", IsLangChecked);
  };

  const changeotherLangauge = () => {
    console.log("in other langauge", otherLanguage);
    setotherLanguage(event.target.value);
  };

  // ******** END LANGUAGE CHECK BOXES **************

  const AddNewTutorSubjects = () => {
    //package up new info in object
    const newTutorSubjects = {
      PreK: PreK,
      FirstGrade: FirstGrade,
      SecondGrade: SecondGrade,
      ThirdGrade: ThirdGrade,
      FourthGrade: FourthGrade,
      FifthGrade: FifthGrade,
      SixthGrade: SixthGrade,
      SeventhGrade: SeventhGrade,
      EighthGrade: EighthGrade,
      NinthGrade: NinthGrade,
      TenthGrade: TenthGrade,
      EleventhGrade: EleventhGrade,
      TwelfthGrade: TwelfthGrade,

      K5Math: K5Math,
      K5Reading: K5Reading,
      K5EnglishWriting: K5EnglishWriting,
      K5SocialStudies: K5SocialStudies,
      K5Science: K5Science,
      SixToEightLanguageArts: SixToEightLanguageArts,
      SixToEightScience: SixToEightScience,
      SixToEightSocialStudies: SixToEightSocialStudies,
      MathPreAlgebra: MathPreAlgebra,
      MathLinearAlgebra: MathPreAlgebra,
      MathGeometry: MathGeometry,
      MathAlgebraII: MathAlgebraII,
      MathPrecalculusTrigonometry: MathPrecalculusTrigonometry,
      BiologyLifeSciences: BiologyLifeSciences,
      ScienceChemistry: ScienceChemistry,
      SciencePhysics: SciencePhysics,
      ComputerScience: ComputerScience,
      LanguageChinese: LanguageChinese,
      LanguageSpanish: LanguageSpanish,
      LanguageFrench: LanguageFrench,
      LanguageGerman: LanguageGerman,
      WorldHistory: WorldHistory,
      USHistory: USHistory,
      APHonorsBiology: APHonorsBiology,
      APHonorsChemistry: APHonorsChemistry,
      APHonorsPhysics: APHonorsPhysics,
      APHonorsComputerScience: APHonorsComputerScience,
      APHonorsCalculusAB: APHonorsCalculusAB,
      APHonorsCalculusBC: APHonorsCalculusBC,
      APHonorsStatistics: APHonorsStatistics,
      APHonorsEnglishLiterature: APHonorsEnglishLiterature,
      APHonorsEnglishLanguage: APHonorsEnglishLanguage,
      APHonorsMacroeconomics: APHonorsMacroeconomics,
      APHonorsMicroeconomics: APHonorsMicroeconomics,
      APHonorsPsychology: APHonorsPsychology,
      APHonorsUSHistory: APHonorsUSHistory,
      APHonorsGovernmentPolitics: APHonorsGovernmentPolitics,
      APHonorsHumanGeography: APHonorsHumanGeography,
      SATSubjectTests: SATSubjectTests,
      SATPrep: SATPrep,
      ACTPrep: ACTPrep,

      Spanish: Spanish,
      Somali: Somali,
      Arabic: Arabic,
      Chinese: Chinese,
      Tagalog: Tagalog,
      French: French,
      Vietnamese: Vietnamese,
      Hmong: Hmong,
      otherLanguage: otherLanguage
    };

    let gradesErrors = false;
    if (
      newTutorSubjects.PreK == false &&
      newTutorSubjects.FirstGrade == false &&
      newTutorSubjects.SecondGrade == false &&
      newTutorSubjects.ThirdGrade == false &&
      newTutorSubjects.FourthGrade == false &&
      newTutorSubjects.FifthGrade == false &&
      newTutorSubjects.SixthGrade == false &&
      newTutorSubjects.SeventhGrade == false &&
      newTutorSubjects.EighthGrade == false &&
      newTutorSubjects.NinthGrade == false &&
      newTutorSubjects.TenthGrade == false &&
      newTutorSubjects.EleventhGrade == false &&
      newTutorSubjects.TwelfthGrade == false
    ) {
      gradesErrors = true;
    }

    let subjectErrors = false;
    if (
      newTutorSubjects.K5Math == false &&
      newTutorSubjects.K5Reading == false &&
      newTutorSubjects.K5EnglishWriting == false &&
      newTutorSubjects.K5SocialStudies == false &&
      newTutorSubjects.K5Science == false &&
      newTutorSubjects.SixToEightLanguageArts == false &&
      newTutorSubjects.SixToEightScience == false &&
      newTutorSubjects.SixToEightSocialStudies == false &&
      newTutorSubjects.MathPreAlgebra == false &&
      newTutorSubjects.MathLinearAlgebra == false &&
      newTutorSubjects.MathGeometry == false &&
      newTutorSubjects.MathAlgebraII == false &&
      newTutorSubjects.MathPrecalculusTrigonometry == false &&
      newTutorSubjects.BiologyLifeSciences == false &&
      newTutorSubjects.ScienceChemistry == false &&
      newTutorSubjects.SciencePhysics == false &&
      newTutorSubjects.ComputerScience == false &&
      newTutorSubjects.LanguageChinese == false &&
      newTutorSubjects.LanguageSpanish == false &&
      newTutorSubjects.LanguageFrench == false &&
      newTutorSubjects.LanguageGerman == false &&
      newTutorSubjects.WorldHistory == false &&
      newTutorSubjects.USHistory == false &&
      newTutorSubjects.APHonorsBiology == false &&
      newTutorSubjects.APHonorsChemistry == false &&
      newTutorSubjects.APHonorsPhysics == false &&
      newTutorSubjects.APHonorsComputerScience == false &&
      newTutorSubjects.APHonorsCalculusAB == false &&
      newTutorSubjects.APHonorsCalculusBC == false &&
      newTutorSubjects.APHonorsStatistics == false &&
      newTutorSubjects.APHonorsEnglishLiterature == false &&
      newTutorSubjects.APHonorsEnglishLanguage == false &&
      newTutorSubjects.APHonorsMacroeconomics == false &&
      newTutorSubjects.APHonorsMicroeconomics == false &&
      newTutorSubjects.APHonorsPsychology == false &&
      newTutorSubjects.APHonorsUSHistory == false &&
      newTutorSubjects.APHonorsGovernmentPolitics == false &&
      newTutorSubjects.APHonorsHumanGeography == false &&
      newTutorSubjects.SATSubjectTests == false &&
      newTutorSubjects.SATPrep == false &&
      newTutorSubjects.ACTPrep == false
    ) {
      subjectErrors = true;
    }

    if (gradesErrors || subjectErrors) {
      alert(
        "At least one required field was empty. Please fill in the required fields before continuing."
      );
    } else {
      dispatch({ type: "ADD_NEW_TUTOR_SUBJECTS", payload: newTutorSubjects });
      history.push("/TutorAdditional");
    }
  };

  return (
    <div className="formBackground">
      <Header />
      <Container className="formContainer">
        <TutorProgressBar />
        <div className="formContent">
          <div className="formQandA">
            <p onClick={setDefaults}>
              What grade levels are you comfortable tutoring/mentoring?{" "}
              <span className="requiredField"> *</span>
            </p>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Pre-K/Kindergarten"
                name="Pre-K/Kindergarten"
                onChange={(event) => changePreK()}
                checked={PreK}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Pre-K/Kindergarten"
              >
                Pre-K/Kindergarten
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="1st Grade"
                name="1st Grade"
                onChange={(event) => changeFirstGrade()}
                checked={FirstGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="1st Grade"
              >
                1st Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="2nd Grade"
                name="2nd Grade"
                onChange={(event) => changeSecondGrade()}
                checked={SecondGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="2nd Grade"
              >
                2nd Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="3rd Grade"
                name="3rd Grade"
                onChange={(event) => changeThirdGrade()}
                checked={ThirdGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="3rd Grade"
              >
                3rd Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="4th Grade"
                name="4th Grade"
                onChange={(event) => changeFourthGrade()}
                checked={FourthGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="4th Grade"
              >
                4th Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="5th Grade"
                name="5th Grade"
                onChange={(event) => changeFifthGrade()}
                checked={FifthGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="5th Grade"
              >
                5th Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="6th Grade"
                name="6th Grade"
                onChange={(event) => changeSixthGrade()}
                checked={SixthGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="6th Grade"
              >
                6th Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="7th Grade"
                name="7th Grade"
                onChange={(event) => changeSeventhGrade()}
                checked={SeventhGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="7th Grade"
              >
                7th Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="8th Grade"
                name="8th Grade"
                onChange={(event) => changeEighthGrade()}
                checked={EighthGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="8th Grade"
              >
                8th Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="9th Grade"
                name="9th Grade"
                onChange={(event) => changeNinthGrade()}
                checked={NinthGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="9th Grade"
              >
                9th Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="10th Grade"
                name="10th Grade"
                onChange={(event) => changeTenthGrade()}
                checked={TenthGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="10th Grade"
              >
                10th Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="11th Grade"
                name="11th Grade"
                onChange={(event) => changeEleventhGrade()}
                checked={EleventhGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="11th Grade"
              >
                11th Grade
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="12th Grade"
                name="12th Grade"
                onChange={(event) => changeTwelfthGrade()}
                checked={TwelfthGrade}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="12th Grade"
              >
                12th Grade
              </Form.Check.Label>
            </Form.Check>
          </div>

          <div className="formQandA">
            <p>
              What subjects are you comfortable tutoring?{" "}
              <span className="requiredField"> *</span>
            </p>
            {/* NEED TO ADD THE ON CHANGE AND HOOKS FOR GRADE onChange={(event)=>changeTutorSujects(event)} */}
            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="K-5 Math"
                name="K-5 Math"
                onChange={(event) => changeK5Math()}
                checked={K5Math}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="K-5 Math"
              >
                K-5 Math
              </Form.Check.Label>
            </Form.Check>
            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="K-5 Reading"
                name="K-5 Reading"
                onChange={(event) => changeK5Reading()}
                checked={K5Reading}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="K-5 Reading"
              >
                K-5 Reading
              </Form.Check.Label>
            </Form.Check>
            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="K-5 English/Writing"
                name="K-5 English/Writing"
                onChange={(event) => changeK5EnglishWriting()}
                checked={K5EnglishWriting}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="K-5 English/Writing"
              >
                K-5 English/Writing
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="K-5 Social Studies"
                name="K-5 Social Studies"
                onChange={(event) => changeK5SocialStudies()}
                checked={K5SocialStudies}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="K-5 Social Studies"
              >
                K-5 Social Studies
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="K-5 Science"
                name="K-5 Science"
                onChange={(event) => changeK5Science()}
                checked={K5Science}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="K-5 Science"
              >
                K-5 Science
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="6-8th Language Arts"
                name="6-8th Language Arts"
                onChange={(event) => changeSixToEightLanguageArts()}
                checked={SixToEightLanguageArts}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="6-8th Language Arts"
              >
                6-8th Language Arts
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="6-8th Science"
                name="6-8th Science"
                onChange={(event) => changeSixToEightScience()}
                checked={SixToEightScience}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="6-8th Science"
              >
                6-8th Science
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="6-8th Social Studies"
                name="6-8th Social Studies"
                onChange={(event) => changeSixToEightSocialStudies()}
                checked={SixToEightSocialStudies}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="6-8th Social Studies"
              >
                6-8th Social Studies
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Math: Pre-Algebra"
                name="Math: Pre-Algebra"
                onChange={(event) => changeMathPreAlgebra()}
                checked={MathPreAlgebra}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Math: Pre-Algebra"
              >
                Math: Pre-Algebra
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Math: Algebra 1/Linear Algebra"
                name="Math: Algebra 1/Linear Algebra"
                onChange={(event) => changeMathLinearAlgebra()}
                checked={MathLinearAlgebra}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Math: Algebra 1/Linear Algebra"
              >
                Math: Algebra 1/Linear Algebra
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Math: Algebra II"
                name="Math: Algebra II"
                onChange={(event) => changeMathAlgebraII()}
                checked={MathAlgebraII}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Math: Algebra II"
              >
                Math: Algebra II
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Math: Geometry"
                name="Math: Geometry"
                onChange={(event) => changeMathGeometry()}
                checked={MathGeometry}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Math: Geometry"
              >
                Math: Geometry
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Math: Precalculus/Trigonometry"
                name="Math: Precalculus/Trigonometry"
                onChange={(event) => changeMathPrecalculusTrigonometry()}
                checked={MathPrecalculusTrigonometry}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Math: Precalculus/Trigonometry"
              >
                Math: Precalculus/Trigonometry
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Science: Biology/Life Sciences"
                name="Science: Biology/Life Sciences"
                onChange={(event) => changeBiologyLifeSciences()}
                checked={BiologyLifeSciences}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Science: Biology/Life Sciences"
              >
                Science: Biology/Life Sciences
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Science: Chemistry"
                name="Science: Chemistry"
                onChange={(event) => changeScienceChemistry()}
                checked={ScienceChemistry}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Science: Chemistry"
              >
                Science: Chemistry
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Science: Physics"
                name="Science: Physics"
                onChange={(event) => changeSciencePhysics()}
                checked={SciencePhysics}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Science: Physics"
              >
                Science: Physics
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Science: Computer Science"
                name="Science: Computer Science"
                onChange={(event) => changeComputerScience()}
                checked={ComputerScience}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Science: Computer Science"
              >
                Science: Computer Science
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Language: Chinese"
                name="Language: Chinese"
                onChange={(event) => changeLanguageChinese()}

                checked={LanguageChinese}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Language: Chinese"
              >
                Language: Chinese
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Language: Spanish"
                name="Language: Spanish"
                onChange={(event) => changeLanguageSpanish()}
                checked={LanguageSpanish}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Language: Spanish"
              >
                Language: Spanish
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Language: French"
                name="Language: French"
                onChange={(event) => changeLanguageFrench()}
                checked={LanguageFrench}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Language: French"
              >
                Language: French
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Language: German"
                name="Language: German"
                onChange={(event) => changeLanguageGerman()}
                checked={LanguageGerman}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Language: German"
              >
                Language: German
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="History: World History"
                name="History: World History"
                onChange={(event) => changeWorldHistory()}
                checked={WorldHistory}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="History: World History"
              >
                History: World History
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="History: U.S. History"
                name="History: U.S. History"
                onChange={(event) => changeUSHistory()}
                checked={USHistory}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="History: U.S. History"
              >
                History: U.S. History
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Biology"
                name="AP Honors Biology"
                onChange={(event) => changeAPHonorsBiology()}
                checked={APHonorsBiology}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Biology"
              >
                AP Honors Biology
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Chemistry"
                name="AP Honors Chemistry"
                onChange={(event) => changeAPHonorsChemistry()}
                checked={APHonorsChemistry}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Biology"
              >
                AP Honors Chemistry
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Physics"
                name="AP Honors Physics"
                onChange={(event) => changeAPHonorsPhysics()}
                checked={APHonorsPhysics}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Physics"
              >
                AP Honors Physics
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Computer Science"
                name="AP Honors Computer Science"
                onChange={(event) => changeAPHonorsComputerScience()}
                checked={APHonorsComputerScience}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Computer Science"
              >
                AP Honors Computer Science
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Calculus AB"
                name="AP Honors Calculus AB"
                onChange={(event) => changeAPHonorsCalculusAB()}
                checked={APHonorsCalculusAB}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Calculus AB"
              >
                AP Honors Calculus AB
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Calculus BC"
                name="AP Honors Calculus BC"
                onChange={(event) => changeAPHonorsCalculusBC()}
                checked={APHonorsCalculusBC}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Calculus BC"
              >
                AP Honors Calculus BC
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Statistics"
                name="AP Honors Statistics"
                onChange={(event) => changeAPHonorsStatistics()}
                checked={APHonorsStatistics}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Statistics"
              >
                AP Honors Statistics
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors English Literature and Composition"
                name="AP Honors English Literature and Composition"
                onChange={(event) => changeAPHonorsEnglishLiterature()}
                checked={APHonorsEnglishLiterature}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors English Literature and Composition"
              >
                AP Honors English Literature and Composition
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors English Language and Composition"
                name="AP Honors English Language and Composition"
                onChange={(event) => changeAPHonorsEnglishLanguage()}
                checked={APHonorsEnglishLanguage}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors English Language and Composition"
              >
                AP Honors English Language and Composition
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Macroeconomics"
                name="AP Honors Macroeconomics"
                onChange={(event) => changeAPHonorsMacroeconomics()}
                checked={APHonorsMacroeconomics}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Macroeconomics"
              >
                AP Honors Macroeconomics
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Microeconomics"
                name="AP Honors Microeconomics"
                onChange={(event) => changeAPHonorsMicroeconomics()}
                checked={APHonorsMicroeconomics}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Microeconomics"
              >
                AP Honors Microeconomics
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Psychology"
                name="AP Honors Psychology"
                onChange={(event) => changeAPHonorsPsychology()}
                checked={APHonorsPsychology}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Psychology"
              >
                AP Honors Psychology
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors United States History"
                name="AP Honors United States History"
                onChange={(event) => changeAPHonorsUSHistory()}
                checked={APHonorsUSHistory}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors United States History"
              >
                AP Honors United States History
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Government and Politics"
                name="AP Honors Government and Politics"
                onChange={(event) => changeAPHonorsGovernmentPolitics()}
                checked={APHonorsGovernmentPolitics}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Government and Politics"
              >
                AP Honors Government and Politics
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="AP Honors Human Geography"
                name="AP Honors Human Geography"
                onChange={(event) => changeAPHonorsHumanGeography()}
                checked={APHonorsHumanGeography}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="AP Honors Human Geography"
              >
                AP Honors Human Geography
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="SAT Subject Tests"
                name="SAT Subject Tests"
                onChange={(event) => changeSATSubjectTests()}
                checked={SATSubjectTests}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="SAT Subject Tests"
              >
                SAT Subject Tests
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="SAT Prep"
                name="SAT Prep"
                onChange={(event) => changeSATPrep()}
                checked={SATPrep}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="SAT Prep"
              >
                SAT Prep
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="ACT Prep"
                name="ACT Prep"
                onChange={(event) => changeACTPrep()}
                checked={ACTPrep}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="ACT Prep"
              >
                ACT Prep
              </Form.Check.Label>
            </Form.Check>
          </div>
          <div className="formQandA">
            <p>
              Are you comfortable tutoring students in a language other than
              English?
            </p>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Spanish"
                name="Spanish"
                onChange={(event) => changeSpanish()}
                checked={Spanish}

              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Spanish"
              >
                Spanish
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Somali"
                name="Somali"
                checked={Somali}
                onChange={(event) => changeSomali()}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Somali"
              >
                Somali
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Arabic"
                name="Arabic"
                onChange={(event) => changeArabic()}
                checked={Arabic}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Arabic"
              >
                Arabic
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Chinese"
                name="Chinese"
                checked={Chinese}
                onChange={(event) => changeChinese()}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Chinese"
              >
                Chinese
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Tagalog"
                name="Tagalog"
                checked={Tagalog}
                onChange={(event) => changeTagalog()}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Tagalog"
              >
                Tagalog
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="French"
                name="French"
                checked={French}
                onChange={(event) => changeFrench()}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="French"
              >
                French
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Vietnamese"
                name="Vietnamese"
                checked={Vietnamese}
                onChange={(event) => changeVietnamese()}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Vietnamese"
              >
                Vietnamese
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Hmong"
                name="Hmong"
                checked={Hmong}
                onChange={(event) => changeHmong()}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Hmong"
              >
                Hmong
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="OtherLanguage"
                name="OtherLanguage"
                checked={IsLangChecked}
                onChange={(e) => changeIsLangChecked(event.target.checked)}
              />

              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="OtherLanguage"
              >
                Other
              </Form.Check.Label>

              <fieldset disabled={IsLangChecked}>
                <FloatingLabel
                  controlID="OtherLanguage"
                  label="Other Language"
                  className="formInput"
                  onChange={(event) => changeotherLangauge(event)}
                >
                  <Form.Control
                    type="OtherLanguage"
                    placeholder="Other Language"
                    defaultValue={otherLanguage}

                  />
                </FloatingLabel>
              </fieldset>
            </Form.Check>
          </div>

          <Button
            className="primaryButton saveAndContinueButton"
            onClick={AddNewTutorSubjects}
          >
            Save and Continue <span className="rightarrow">{rightArrow}</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default TutorSubjects;
