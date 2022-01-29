import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';

function TutorSubjects(props) {

  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Tutor Terms');

  // ******** GRADE CHECK BOXES **************
  const [PreK, setPreK] = useState( false );
  const [FirstGrade, setFirstGrade] = useState( false );
  const [SecondGrade, setSecondGrade] = useState( false );
  const [ThirdGrade, setThirdGrade] = useState( false );
  const [FourthGrade, setFourthGrade] = useState( false );
  const [FithGrade, setFithGrade] = useState( false );
  const [SixthGrade, setSixthGrade] = useState( false );
  const [SeventhGrade, setSeventhGrade] = useState( false );
  const [EigthGrade, setEigthGrade] = useState( false );
  const [NinthGrade, setNinthGrade] = useState( false );
  const [TenthGrade, setTenthGrade] = useState( false );
  const [EleventhGrade, setEleventhGrade] = useState( false );
  const [TwelthGrade, setTwelthGrade] = useState( false );
  // ******** GRADE CHECK BOXES **************
 
  // ******** SUBJECT CHECK BOXES **************
  const [K5Math, setK5Math] = useState( false );
  const [K5Reading, setK5Reading] = useState( false );
  const [K5EnglishWriting, setK5EnglishWriting] = useState( false );
  const [K5SocialStudies, setK5SocialStudies] = useState( false );
  const [K5Science, setK5Science] = useState( false );
  const [SixToEightLanguageArts, setSixToEightLanguageArts] = useState( false );
  const [SixToEightScience, setSixToEightScience] = useState( false );
  const [SixToEigthSocialStudies, setSixToEigthSocialStudies] = useState( false );
  const [MathPreAlgebra, setMathPreAlgebra] = useState( false );
  const [MathLinearAlgebra, setMathLinearAlgebra] = useState( false );
  const [MathGeometry, setMathGeometry] = useState( false );
  const [MathAlgebraII, setMathAlgebraII] = useState( false );
  const [MathPrecalculusTrigonometry, setMathPrecalculusTrigonometry] = useState( false );
  const [BiologyLifeSciences, setBiologyLifeSciences] = useState( false );
  const [ScienceChemistry, setScienceChemistry] = useState( false );
  const [SciencePhysics, setSciencePhysics] = useState( false );
  const [ComputerScience, setComputerScience] = useState( false );
  const [LanguageChinese, setLanguageChinese] = useState( false );
  const [LanguageSpanish, setLanguageSpanish] = useState( false );
  const [LanguageFrench, setLanguageFrench] = useState( false );
  const [LanguageGerman, setLanguageGerman] = useState( false );
  const [WorldHistory, setWorldHistory] = useState( false );
  const [USHistory, setUSHistory] = useState( false );
  const [APHonorsBiology, setAPHonorsBiology] = useState( false );
  const [APHonorsChemistry, setAPHonorsChemistry] = useState( false );
  const [APHonorsPhysics, setAPHonorsPhysics] = useState( false );
  const [APHonorsComputerScience, setAPHonorsComputerScience] = useState( false );
  const [APHonorsCalculusAB, setAPHonorsCalculusAB] = useState( false );
  const [APHonorsCalculusBC, setAPHonorsCalculusBC] = useState( false );
  const [APHonorsStatistics, setAPHonorsStatistics] = useState( false );
  const [APHonorsEnglishLiterature, setAPHonorsEnglishLiterature] = useState( false );
  const [APHonorsEnglishLanguage, setAPHonorsEnglishLanguage] = useState( false );
  const [APHonorsMacroeconomics, setAPHonorsMacroeconomics] = useState( false );
  const [APHonorsMicroeconomics, setAPHonorsMicroeconomics] = useState( false );
  const [APHonorsUSHistory, setAPHonorsUSHistory] = useState( false );
  const [APHonorsGovernmentPolitics, setAPHonorsGovernmentPolitics] = useState( false );
  const [APHonorsHumanGeography, setAPHonorsHumanGeography] = useState( false );
  const [SATSubjectTests, setSATSubjectTests] = useState( false );
  const [SATPrep, setSATPrep] = useState( false );
  const [ACTPrep, setACTPrep] = useState( false );
  const [Other, setOther] = useState( false );
  // ******** SUBJECT CHECK BOXES **************

    // ******** LANGUAGE CHECK BOXES **************
    const [Spanish, setSpanish] = useState( false );
    const [Somali, setSomali] = useState( false );
    const [Arabic, setArabic] = useState( false );
    const [Chinese, setChinese] = useState( false );
    const [Tagalog, setTagalog] = useState( false );
    const [French, setFrench] = useState( false );
    const [Vietnamese, setVietnamese] = useState( false );
    const [Hmong, setHmong] = useState( false );
    // ******** LANGUAGE CHECK BOXES **************


  // *********** TUTOR GRADE LEVELS ****************
  const changePreK = () => {
    setPreK(!PreK);
    console.log('PreK', PreK)
  }

  const changeFirstGrade = () => {
    setFirstGrade(!FirstGrade);
    console.log('FirstGrade', FirstGrade)
  }

  const changeSecondGrade= () => {
    setSecondGrade(!SecondGrade);
    console.log('SecondGrade', SecondGrade)
  }

  const changeThirdGrade = () => {
    setThirdGrade(!ThirdGrade);
    console.log('ThirdGrade', ThirdGrade)
  }

  const changeFourthGrade= () => {
    setFourthGrade(!FourthGrade);
    console.log('FourthGrade', FourthGrade)
  }

  const changeFithGrade = () => {
    setFithGrade(!FithGrade);
    console.log('FithGrade', FithGrade)
  }

  const changeSixthGrade= () => {
    setSixthGrade(!SixthGrade);
    console.log('SixthGrade', SixthGrade)
  }

  const changeSeventhGrade = () => {
    setSeventhGrade(!SeventhGrade);
    console.log('SeventhGrade', SeventhGrade)
  }

  const changeEigthGrade= () => {
    setEigthGrade(!EigthGrade);
    console.log('EigthGrade', EigthGrade)
  }

  const changeNinthGrade = () => {
    setNinthGrade(!NinthGrade);
    console.log('NinthGrade', NinthGrade)
  }

  const changeTenthGrade= () => {
    setTenthGrade(!TenthGrade);
    console.log('TenthGrade', TenthGrade)
  }

  const changeEleventhGrade = () => {
    setEleventhGrade(!EleventhGrade);
    console.log('EleventhGrade', EleventhGrade)
  }

  const changeTwelthGrade= () => {
    setTwelthGrade(!TwelthGrade);
    console.log('TwelthGrade', TwelthGrade)
  }
// *********** TUTOR GRADE LEVELS *****************



// **************** TUTOR SUBJECTS *******************
const changeK5Math= () => {
  setK5Math(!K5Math);
  console.log('K5Math', K5Math)
}

const changeK5Reading= () => {
  setK5Reading(!K5Reading);
  console.log('K5Reading', K5Reading)
}

const changeK5EnglishWriting= () => {
  setK5EnglishWriting(!K5EnglishWriting);
  console.log('K5EnglishWriting', K5EnglishWriting)
}

const changeK5SocialStudies= () => {
  setK5SocialStudies(!K5SocialStudies);
  console.log('K5SocialStudies', K5SocialStudies)
}

const changeK5Science= () => {
  setK5Science(!K5Science);
  console.log('K5Science', K5Science)
}

const changeSixToEightLanguageArts= () => {
  setSixToEightLanguageArts(!SixToEightLanguageArts);
  console.log('SixToEightLanguageArts', SixToEightLanguageArts)
}

const changeSixToEightScience= () => {
  setSixToEightScience(!SixToEightScience);
  console.log('SixToEightScience', SixToEightScience)
}

const changeSixToEigthSocialStudies= () => {
  setSixToEigthSocialStudies(!SixToEigthSocialStudies);
  console.log('SixToEigthSocialStudies', SixToEigthSocialStudies)
}

const changeMathPreAlgebra= () => {
  setMathPreAlgebra(!MathPreAlgebra);
  console.log('MathPreAlgebra', MathPreAlgebra)
}

const changeMathLinearAlgebra= () => {
  setMathLinearAlgebra(!MathLinearAlgebra);
  console.log('MathLinearAlgebr', MathLinearAlgebra)
}

const changeMathAlgebraII= () => {
  setMathAlgebraII(!MathAlgebraII);
  console.log('MathAlgebraII', MathAlgebraII)
}

const changeMathGeometry= () => {
  setMathGeometry(!MathGeometry);
  console.log('MathGeometry', MathGeometry)
}

const changeMathPrecalculusTrigonometry= () => {
  setMathPrecalculusTrigonometry(!MathPrecalculusTrigonometry);
  console.log('MathPrecalculusTrigonometry', MathPrecalculusTrigonometry)
}

const changeBiologyLifeSciences= () => {
  setBiologyLifeSciences(!BiologyLifeSciences);
  console.log('BiologyLifeSciences', BiologyLifeSciences)
}

const changeScienceChemistry= () => {
  setScienceChemistry(!ScienceChemistry);
  console.log('ScienceChemistry', ScienceChemistry)
}

const changeSciencePhysics= () => {
  setSciencePhysics(!SciencePhysics);
  console.log('SciencePhysics', SciencePhysics)
}

const changeComputerScience= () => {
  setComputerScience(!ComputerScience);
  console.log('ComputerScience', ComputerScience)
}

const changeLanguageChinese= () => {
  setLanguageChinese(!LanguageChinese);
  console.log('LanguageChinese', LanguageChinese)
}

const changeLanguageSpanish= () => {
  setLanguageSpanish(!LanguageSpanish);
  console.log('LanguageSpanish', LanguageSpanish)
}

const changeLanguageFrench= () => {
  setLanguageFrench(!LanguageFrench);
  console.log('LanguageFrench', LanguageFrench)
}

const changeLanguageGerman= () => {
  setLanguageGerman(!LanguageGerman);
  console.log('LanguageGerman', LanguageGerman)
}

const changeWorldHistory= () => {
  setWorldHistory(!WorldHistory);
  console.log('WorldHistory', WorldHistory)
}

const changeUSHistory= () => {
  setUSHistory(!USHistory);
  console.log('USHistory', USHistory)
}

const changeAPHonorsBiology= () => {
  setAPHonorsBiology(!APHonorsBiology);
  console.log('APHonorsBiology', APHonorsBiology)
}

const changeAPHonorsChemistry= () => {
  setAPHonorsChemistry(!APHonorsChemistry);
  console.log('APHonorsChemistry', APHonorsChemistry)
}

const changeAPHonorsPhysics= () => {
  setAPHonorsPhysics(!APHonorsPhysics);
  console.log('APHonorsPhysics', APHonorsPhysics)
}

const changeAPHonorsComputerScience= () => {
  setAPHonorsComputerScience(!APHonorsComputerScience);
  console.log('APHonorsComputerScience', APHonorsComputerScience)
}

const changeAPHonorsCalculusAB= () => {
  setAPHonorsCalculusAB(!APHonorsCalculusAB);
  console.log('APHonorsCalculusAB', APHonorsCalculusAB)
}

const changeAPHonorsCalculusBC= () => {
  setAPHonorsCalculusBC(!APHonorsCalculusBC);
  console.log('APHonorsCalculusBC', APHonorsCalculusBC)
}

const changeAPHonorsStatistics= () => {
  setAPHonorsStatistics(!APHonorsStatistics);
  console.log('APHonorsStatistics', APHonorsStatistics)
}

const changeAPHonorsEnglishLiterature= () => {
  setAPHonorsEnglishLiterature(!APHonorsEnglishLiterature);
  console.log('APHonorsEnglishLiterature', APHonorsEnglishLiterature)
}

const changeAPHonorsEnglishLanguage= () => {
  setAPHonorsEnglishLanguage(!APHonorsEnglishLanguage);
  console.log('APHonorsEnglishLanguage', APHonorsEnglishLanguage)
}

const changeAPHonorsMacroeconomics= () => {
  setAPHonorsMacroeconomics(!APHonorsMacroeconomics);
  console.log('APHonorsMacroeconomics', APHonorsMacroeconomics)
}

const changeAPHonorsMicroeconomics= () => {
  setAPHonorsMicroeconomics(!APHonorsMicroeconomics);
  console.log('APHonorsMicroeconomics', APHonorsMicroeconomics)
}

const changeAPHonorsUSHistory= () => {
  setAPHonorsUSHistory(!APHonorsUSHistory);
  console.log('APHonorsUSHistory', APHonorsUSHistory)
}

const changeAPHonorsGovernmentPolitics= () => {
  setAPHonorsGovernmentPolitics(!APHonorsGovernmentPolitics);
  console.log('APHonorsGovernmentPolitics', APHonorsGovernmentPolitics)
}
const changeAPHonorsHumanGeography= () => {
  setAPHonorsHumanGeography(!APHonorsHumanGeography);
  console.log('APHonorsHumanGeography', APHonorsHumanGeography)
}

const changeSATSubjectTests= () => {
  setSATSubjectTests(!SATSubjectTests);
  console.log('SATSubjectTests', SATSubjectTests)
}

const changeSATPrep= () => {
  setSATPrep(!SATPrep);
  console.log('SATPrep', SATPrep)
}

const changeACTPrep= () => {
  setACTPrep(!ACTPrep);
  console.log('ACTPrep', ACTPrep)
}

const changeOther= () => {
  setOther(!Other);
  console.log('Other', Other)
}
// **************** TUTOR SUBJECTS *******************



// ******** LANGUAGE CHECK BOXES **************
 const changeSpanish = () => {
  setSpanish(!Spanish);
  console.log('Spanish', Spanish)
}

const changeSomali = () => {
  setSomali(!Somali);
  console.log('Somali', Somali)
}

const changeArabic = () => {
  setArabic(!Arabic);
  console.log('Arabic', Arabic)
}

const changeChinese = () => {
  setChinese(!Chinese);
  console.log('Chinese', Chinese)
}

const changeTagalog = () => {
  setTagalog(!Tagalog);
  console.log('Tagalog:', Tagalog)
}

const changeFrench = () => {
  setFrench(!French);
  console.log('French', French)
}

const changeVietnamese = () => {
  setVietnamese(!Vietnamese);
  console.log('Vietnamese', Vietnamese)
}

const changeHmong = () => {
  setHmong(!Hmong);
  console.log('Hmong', Hmong)
}

// ******** LANGUAGE CHECK BOXES **************


const AddNewTutorSubjects =()=>{
  //package up new info in object
  const newTutorSubjects = {
    PreK: PreK,
    FirstGrade: FirstGrade,
    SecondGrade: SecondGrade,
    ThirdGrade: ThirdGrade,
    FourthGrade: FourthGrade,
    FithGrade: FithGrade,
    SixthGrade: SixthGrade,
    SeventhGrade: SeventhGrade,
    EigthGrade: EigthGrade,
    NinthGrade: NinthGrade,
    TenthGrade: TenthGrade,
    EleventhGrade: EleventhGrade,
    TwelthGrade: TwelthGrade,

    K5Math: K5Math,
    K5Reading: K5Reading,
    K5EnglishWriting: K5EnglishWriting,
    K5SocialStudies: K5SocialStudies,
    K5Science: K5Science,
    SixToEightLanguageArts: SixToEightLanguageArts,
    SixToEightScience: SixToEightScience,
    SixToEigthSocialStudies: SixToEigthSocialStudies,
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
    APHonorsUSHistory: APHonorsUSHistory,
    APHonorsGovernmentPolitics: APHonorsGovernmentPolitics,
    APHonorsHumanGeography: APHonorsHumanGeography,
    SATSubjectTests: SATSubjectTests,
    SATPrep: SATPrep,
    ACTPrep: ACTPrep,
    Other: Other,

    Spanish: Spanish,
    Somali: Somali,
    Arabic: Arabic,
    Chinese: Chinese,
    Tagalog: Tagalog,
    French: French,
    Vietnamese: Vietnamese,
    Hmong: Hmong,
  }

  let gradesErrors= false;
    if((newTutorSubjects.PreK == false ) && 
        (newTutorSubjects.FirstGrade == false ) && 
        (newTutorSubjects.SecondGrade == false ) && 
        (newTutorSubjects.ThirdGrade == false ) && 
        (newTutorSubjects.FourthGrade == false ) && 
        (newTutorSubjects.FithGrade == false ) && 
        (newTutorSubjects.SixthGrade == false ) && 
        (newTutorSubjects.SeventhGrade == false ) && 
        (newTutorSubjects.EigthGrade == false ) && 
        (newTutorSubjects.NinthGrade == false ) && 
        (newTutorSubjects.TenthGrade == false ) && 
        (newTutorSubjects.EleventhGrade == false ) && 
        (newTutorSubjects.TwelthGrade == false ))
      {gradesErrors = true;}

  // let languageErrors= false;
  //     if( (newTutorSubjects.Spanish == false ) && 
  //         (newTutorSubjects.Somali == false ) && 
  //         (newTutorSubjects.Arabic == false ) &&
  //         (newTutorSubjects.Chinese == false ) &&
  //         (newTutorSubjects.Tagalog == false ) &&
  //         (newTutorSubjects.French == false ) &&
  //         (newTutorSubjects.Vietnamese == false ) &&
  //         (newTutorSubjects.Hmong == false ) &&
  //         (newTutorSubjects.English == false ) &&
  //         (newTutorSubjects.Somali == false ))
  //           {languageErrors = true;}

          if(gradesErrors){alert('Plase make at least one selection in each category')}
  dispatch( {type:'ADD_NEW_TUTOR_SUBJECTS', payload: newTutorSubjects})
}



  return (
    <div>
      <h2>{heading}</h2>

      <h3>What grade levels are you comfortable tutoring/mentoring?</h3>
     {/* <p>{JSON.stringify(PreK)}</p> */}
        
        <div>
          <input type="checkbox" id="Pre-K/Kindergarten" name="Pre-K/Kindergarten" onChange={(event)=>changePreK()}/>
          <label htmlFor="Pre-K/Kindergarten">Pre-K/Kindergarten</label>
        </div>

        <div>
          <input type="checkbox" id="1st Grade" name="1st Grade" onChange={(event)=>changeFirstGrade()}/>
          <label htmlFor="1st Grade">1st Grade</label>
        </div>

        <div>
          <input type="checkbox" id="2nd Grade" name="2nd Grade" onChange={(event)=>changeSecondGrade()}/>
          <label for="2nd Grade">2nd Grade</label>
        </div>

        <div>
          <input type="checkbox" id="3rd Grade" name="3rd Grade" onChange={(event)=>changeThirdGrade()}/>
          <label htmlFor="3rd Grade">3rd Grade</label>
        </div>

        <div>
          <input type="checkbox" id="4th Grade" name="4th Grade" onChange={(event)=>changeFourthGrade()}/>
          <label htmlFor="4th Grade">4th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="5th Grade" name="5th Grade" onChange={(event)=>changeFithGrade()}/>
          <label htmlFor="5th Grade">5th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="6th Grade" name="6th Grade" onChange={(event)=>changeSixthGrade()}/>
          <label htmlFor="6th Grade">6th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="7th Grade" name="7th Grade" onChange={(event)=>changeSeventhGrade()}/>
          <label htmlFor="7th Grade">7th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="8th Grade" name="8th Grade" onChange={(event)=>changeEigthGrade()}/>
          <label htmlFor="8th Grade">8th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="9th Grade" name="9th Grade"onChange={(event)=>changeNinthGrade()}/>
          <label htmlFor="9th Grade">9th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="10th Grade" name="10th Grade" onChange={(event)=>changeTenthGrade()}/>
          <label htmlFor="10th Grade">10th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="11th Grade" name="11th Grade" onChange={(event)=>changeEleventhGrade()}/>
          <label htmlFor="11th Grade">11th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="12th Grade" name="12th Grade" onChange={(event)=>changeTwelthGrade()}/>
          <label htmlFor="12th Grade">12th Grade</label>
        </div>


        <h3>What subjects are you comfortable tutoring?</h3>
        {/* NEED TO ADD THE ON CHANGE AND HOOKS FOR GRADE onChange={(event)=>changeTutorSujects(event)} */}

        <div>
          <input type="checkbox" id="K-5 Math" name="K-5 Math" onChange={(event)=>changeK5Math()}/>
          <label htmlFor="K-5 Math">K-5 Math</label>
        </div>

        <div>
          <input type="checkbox" id="K-5 Reading" name="K-5 Reading" onChange={(event)=>changeK5Reading()}/>
          <label htmlFor="K-5 Reading">K-5 Reading</label>
        </div>

        <div>
          <input type="checkbox" id="K-5 English/Writing" name="K-5 English/Writing" onChange={(event)=>changeK5EnglishWriting()}/>
          <label htmlFor="K-5 English/Writing">K-5 English/Writing</label>
        </div>

        <div>
          <input type="checkbox" id="K-5 Social Studies" name="K-5 Social Studies" onChange={(event)=>changeK5SocialStudies()}/>
          <label htmlFor="K-5 Social Studies">K-5 Social Studies</label>
        </div>

        <div>
          <input type="checkbox" id="K-5 Science" name="K-5 Science" onChange={(event)=>changeK5Science()}/>
          <label htmlFor="K-5 Science">K-5 Science</label>
        </div>
      
        <div>
          <input type="checkbox" id="6-8th Language Arts" name="6-8th Language Arts" onChange={(event)=>changeSixToEightLanguageArts()}/>
          <label htmlFor="6-8th Language Arts">6-8th Language Arts</label>
        </div>

        <div>
          <input type="checkbox" id="6-8th Science" name="6-8th Science" onChange={(event)=>changeSixToEightScience()}/>
          <label htmlFor="6-8th Science">6-8th Science</label>
        </div>

        <div>
          <input type="checkbox" id="6-8th Social Studies" name="6-8th Social Studies" onChange={(event)=>changeSixToEigthSocialStudies()}/>
          <label htmlFor="6-8th Social Studies">6-8th Social Studies</label>
        </div>
          
        <div>
          <input type="checkbox" id="Math: Pre-Algebra" name="K-5 Science" onChange={(event)=>changeMathPreAlgebra()}/>
          <label htmlFor="Math: Pre-Algebra">Math: Pre-Algebra</label>
        </div>
      
        <div>
          <input type="checkbox" id="Math: Algebra 1/Linear Algebra" name="Math: Algebra 1/Linear Algebra" onChange={(event)=>changeMathLinearAlgebra()}/>
          <label htmlFor="Math: Algebra 1/Linear Algebra">Math: Algebra 1/Linear Algebra</label>
        </div>

        <div>
          <input type="checkbox" id="Math: Algebra II" name="Math: Algebra II" onChange={(event)=>changeMathAlgebraII()}/>
          <label htmlFor="Math: Algebra II">Math: Algebra II</label>
        </div>

        <div>
          <input type="checkbox" id="Math: Geometry" name="Math: Geometry" onChange={(event)=>changeMathGeometry()}/>
          <label htmlFor="Math: Geometry">Math: Geometry</label>
        </div>
          
        <div>
          <input type="checkbox" id="Math: Precalculus/Trigonometry" name="Math: Precalculus/Trigonometry" onChange={(event)=>changeMathPrecalculusTrigonometry()}/>
          <label htmlFor="Math: Precalculus/Trigonometry">Math: Precalculus/Trigonometry</label>
        </div>

        <div>
          <input type="checkbox" id="Science: Biology/Life Sciences" name="Science: Biology/Life Sciences" onChange={(event)=>changeBiologyLifeSciences()}/>
          <label htmlFor="Science: Biology/Life Sciences">Science: Biology/Life Sciences</label>
        </div>

        <div>
          <input type="checkbox" id="Science: Chemistry" name="Science: Chemistry" onChange={(event)=>changeScienceChemistry()}/>
          <label htmlFor="Science: Chemistry">Science: Chemistry</label>
        </div>

        <div>
          <input type="checkbox" id="Science: Physics" name="Science: Physics" onChange={(event)=>changeSciencePhysics()}/>
          <label htmlFor="Science: Physics">Science: Physics</label>
        </div>

        <div>
          <input type="checkbox" id="Science: Computer Science" name="Science: Computer Science" onChange={(event)=>changeComputerScience()}/>
          <label htmlFor="Science: Computer Science">Science: Computer Science</label>
        </div>
        
        <div>
          <input type="checkbox" id="Language: Chinese" name="Language: Chinese" onChange={(event)=>changeLanguageChinese()}/>
          <label htmlFor="Language: Chinese">Language: Chinese</label>
        </div> 
        
        <div>
          <input type="checkbox" id="Language: Spanish" name="Language: Spanish" onChange={(event)=>changeLanguageSpanish()}/>
          <label htmlFor="Language: Spanish">Language: Spanish</label>
        </div> 
        
        <div>
          <input type="checkbox" id="Language: French" name="Language: French" onChange={(event)=>changeLanguageFrench()}/>
          <label htmlFor="Language: French">Language: French</label>
        </div> 
        
        <div>
          <input type="checkbox" id="Language: German" name="Language: German" onChange={(event)=>changeLanguageGerman()}/>
          <label htmlFor="Language: German">Language: German</label>
        </div>
      
        <div>
          <input type="checkbox" id="History: World History" name="History: World History" onChange={(event)=>changeWorldHistory()}/>
          <label htmlFor="History: World History">History: World History</label>
        </div>

        <div>
          <input type="checkbox" id="History: U.S. Historyn" name="History: U.S. History" onChange={(event)=>changeUSHistory()}/>
          <label htmlFor="History: U.S. History">History: U.S. History</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Biology" name="AP Honors Biology" onChange={(event)=>changeAPHonorsBiology()}/>
          <label htmlFor="AP Honors Biology">AP Honors Biology</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Chemistry" name="AP Honors Chemistry" onChange={(event)=>changeAPHonorsChemistry()}/>
          <label htmlFor="AP Honors Chemistry">AP Honors Chemistry</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Physics" name="AP Honors Physics" onChange={(event)=>changeAPHonorsPhysics()}/>
          <label htmlFor="AP Honors Physics">AP Honors Physics</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Computer Science" name="AP Honors Computer Science" onChange={(event)=>changeAPHonorsComputerScience()}/>
          <label htmlFor="AP Honors Computer Science">AP Honors Computer Science</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Calculus AB" name="AP Honors Calculus AB" onChange={(event)=>changeAPHonorsCalculusAB()}/>
          <label htmlFor="AP Honors Calculus AB">AP Honors Calculus AB</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Calculus BC" name="AP Honors Calculus BC" onChange={(event)=>changeAPHonorsCalculusBC()}/>
          <label htmlFor="AP Honors Calculus BC">AP Honors Calculus BC</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Statistics" name="AP Honors Statistics" onChange={(event)=>changeAPHonorsStatistics()}/>
          <label htmlFor="AP Honors Statistics">AP Honors Statistics</label>
        </div>
          
        <div>
          <input type="checkbox" id="AP Honors English Literature and Composition" name="AP Honors English Literature and Composition" onChange={(event)=>changeAPHonorsEnglishLiterature()}/>
          <label htmlFor="AP Honors English Literature and Composition">AP Honors English Literature and Composition</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors English Language and Composition" name="AP Honors English Language and Composition" onChange={(event)=>changeAPHonorsEnglishLanguage()}/>
          <label htmlFor="AP Honors English Language and Composition">AP Honors English Language and Composition</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Macroeconomics" name="AP Honors Macroeconomics" onChange={(event)=>changeAPHonorsMacroeconomics()}/>
          <label htmlFor="AP Honors Macroeconomics">AP Honors Macroeconomics</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Microeconomics" name="AP Honors Microeconomics" onChange={(event)=>changeAPHonorsMicroeconomics()}/>
          <label htmlFor="AP Honors Microeconomics">AP Honors Microeconomics</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Psychology" name="AP Honors Psychology" onChange={(event)=>changeAPHonorsPsychology()}/>
          <label htmlFor="AP Honors Psychology">AP Honors Psychology</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors United States History" name="AP Honors United States History" onChange={(event)=>changeAPHonorsUSHistory()}/>
          <label htmlFor="AP Honors United States History">AP Honors United States History</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Government and Politics" name="AP Honors Government and Politics" onChange={(event)=>changeAPHonorsGovernmentPolitics()}/>
          <label htmlFor="AP Honors Government and Politics">AP Honors Government and Politics</label>
        </div>

        <div>
          <input type="checkbox" id="AP Honors Human Geography" name="AP Honors Human Geography" onChange={(event)=>changeAPHonorsHumanGeography()}/>
          <label htmlFor="AP Honors Human Geography">AP Honors Human Geography</label>
        </div>

        <div>
          <input type="checkbox" id="SAT Subject Tests" name="SAT Subject Tests" onChange={(event)=>changeSATSubjectTests()}/>
          <label htmlFor="SAT Subject Tests">SAT Subject Tests</label>
        </div>

        <div>
          <input type="checkbox" id="SAT Prep" name="SAT Prep" onChange={(event)=>changeSATPrep()}/>
          <label htmlFor="SAT Prep">SAT Prep</label>
        </div>

        <div>
          <input type="checkbox" id="ACT Prep" name="ACT Prep" onChange={(event)=>changeACTPrep()}/>
          <label htmlFor="ACT Prep">ACT Prep</label>
        </div>

        <div>
          <input type="checkbox" id="Other" name="Other" onChange={(event)=>changeOther()}/>
          <label htmlFor="Other">Other</label>
        </div>
    
        
        <div>
          <p>Are you comfortable tutoring English Language Learner Students? If so, in what language? If no, just select N/A.</p>
          {/* <p>{JSON.stringify(Spanish)}</p> */}
          
          <div>
            <input type="checkbox" id="Spanish" name="Spanish" onChange={(event)=>changeSpanish()}/>
            <label htmlFor="Spanish">Spanish</label>
          </div>

          <div>
            <input type="checkbox" id="Somali" name="Somali" onChange={(event)=>changeSomali()}/>
            <label htmlFor="Somali">Somali</label>
          </div>

          <div>
            <input type="checkbox" id="Arabic" name="Arabic" onChange={(event)=>changeArabic()}/>
            <label htmlFor="Arabic">Arabic</label>
          </div>

          <div>
            <input type="checkbox" id="Chinese" name="Chinese" onChange={(event)=>changeChinese()}/>
            <label htmlFor="Chinese">Chinese</label>
          </div>

          <div>
            <input type="checkbox" id="Tagalog" name="Tagalog" onChange={(event)=>changeTagalog()}/>
            <label htmlFor="Tagalog">Tagalog</label>
          </div>

          <div>
            <input type="checkbox" id="French" name="French" onChange={(event)=>changeFrench()}/>
            <label htmlFor="French">French</label>
          </div>

          <div>
            <input type="checkbox" id="Vietnamese" name="Vietnamese" onChange={(event)=>changeVietnamese()}/>
            <label htmlFor="Vietnamese">Vietnamese</label>
          </div>

          <div>
            <input type="checkbox" id="Hmong" name="Hmong" onChange={(event)=>changeHmong()}/>
            <label htmlFor="Hmong">Hmong</label>
          </div>
      </div>

      <Link to="/TutorAdditional" ><Button onClick={AddNewTutorSubjects}>Add A New Tutor Info</Button></Link>


    </div>
  ); 
}

export default TutorSubjects;
