import { combineReducers } from "redux";

const newstudentInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_STUDENT_INFO":
      return action.payload;
    case "UNSET_ADD_NEW_SUBJECTS_INFO":
      return [];
    default:
      return state;
  }
};

const newstudentSubjectReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_STUDENT_SUBJECTS":
      return action.payload;
    case "UNSET_ADD_NEW_STUDENT_SUBJECTS":
      return [];
    default:
      return state;
  }
};

const newstudentAdditionalReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_STUDENT_ADDITIONAL":
      return action.payload;
    case "UNSET_ADD_NEW_STUDENT_ADDITIONAL":
      return [];
    default:
      return state;
  }
};

const newstudentTermsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_STUDENT_TERMS":
      return action.payload;
    case "UNSET_ADD_STUDENT_TERMS":
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default combineReducers({
  newstudentInfoReducer,
  newstudentSubjectReducer,
  newstudentAdditionalReducer,
  newstudentTermsReducer,
});
