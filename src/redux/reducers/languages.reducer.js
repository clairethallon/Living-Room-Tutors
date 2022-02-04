const special_Subjects_Reducer = (state = [], action) => {
  const specialSubjects = [
    "math_precalc_trig",
    "sci_bio_life",
    "sci_chem",
    "ap_chem",
    "sci_physics",
    "sci_comp_sci",
    "lang_chinese",
    "lang_spanish",
    "lang_french",
    "lang_german",
    "hist_world",
    "hist_us",
    "ap_bio",
    "ap_chem",
    "ap_physics",
    "ap_calc_AB",
    "ap_calc_BC",
    "ap_stats",
    "ap_comp_sci",
    "ap_english_lit_comp",
    "ap_lang_comp",
    "ap_macro_econ",
    "ap_micro_econ",
    "ap_psyc",
    "ap_hist_us",
    "ap_gov_politics_us",
    "ap_human_geog",
    "sat_subject_tests",
    "sat_prep",
    "act_prep",
  ];
  return specialSubjects;
};

// user will be on the redux state at:
// state.user
export default special_Subjects_Reducer;
