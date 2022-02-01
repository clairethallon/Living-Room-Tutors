import { combineReducers } from "redux";
import errors from "./errors.reducer";
import newStudent from "./newStudent.reducer";
import newtutor from "./newtutor.reducer";
import user from "./user.reducer";
import test from "./test.reducer";
import tutors from "./tutors.reducer";
import tutees from "./tutees.reducer";
import matches from "./matches.reducer";
import activeTutors from "./active_tutors.reducer";
import deactiveTutors from "./deactive_tutors.reducer";
import activeTutees from "./active_tutees.reducer";
import deactiveTutees from "./deactive_tutees.reducer";
import groupAmatches from "./group_A_matches.reducer";
import groupBmatches from "./group_B_matches.reducer";
import groupCmatches from "./group_C_matches.reducer";
import groupDmatches from "./group_D_matches.reducer";
import selected_tutee from "./selected_tutee.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  test,
  newStudent,
  newtutor,
  tutors,
  tutees,
  matches,
  activeTutors,
  deactiveTutors,
  activeTutees,
  deactiveTutees,
  groupAmatches,
  groupBmatches,
  groupCmatches,
  groupDmatches,
  selected_tutee,
});

export default rootReducer;
