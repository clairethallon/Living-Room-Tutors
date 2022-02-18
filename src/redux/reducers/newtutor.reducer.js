import { combineReducers } from "redux";

const newtutorInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_TUTOR_INFO":
      return action.payload;
    case "UNSET_ADD_NEW_TUTOR_INFO":
      return [];
    default:
      return state;
  }
};

const newtutorSubjectReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_TUTOR_SUBJECTS":
      return action.payload;
    case "UNSET_ADD_NEW_TUTOR_SUBJECTS":
      return [];
    default:
      return state;
  }
};

const newtutorAdditionalReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TUTOR_ADITIONAL_INFO":
      return action.payload;
    case "UNSET_ADD_TUTOR_ADITIONAL_INFO":
      return [];
    default:
      return state;
  }
};

const newtutorTermsReducer = (state = false, action) => {
  switch (action.type) {
    case "ADD_TUTOR_TERMS":
      return action.payload;
    case "UNSET_ADD_TUTOR_TERMS":
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default combineReducers({
  newtutorInfoReducer,
  newtutorSubjectReducer,
  newtutorAdditionalReducer,
  newtutorTermsReducer,
});
