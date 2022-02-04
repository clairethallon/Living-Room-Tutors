import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";
import testSaga from "./test.saga";
import tutorsSaga from "./tutors.saga";
import activetutorsSaga from "./active_tutors.saga";
import deactivetutorsSaga from "./deactive_tutors.saga";
import tuteesSaga from "./tutees.saga";
import activetuteesSaga from "./active_tutees.saga";
import deactivetuteesSaga from "./deactive_tutees.saga";
import matchesSaga from "./matches.saga";
import statusTuteesSaga from "./change_tutee_active_status.saga";
import statusTutorsSaga from "./change_tutor_active_status.saga";
import matchSearchSaga from "./matchSearch.saga";
import confirmMatch from "./confirmMatch.saga";

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    testSaga(),
    userSaga(),
    tutorsSaga(),
    tuteesSaga(),
    matchesSaga(),
    activetutorsSaga(),
    deactivetutorsSaga(),
    activetuteesSaga(),
    deactivetuteesSaga(),
    statusTuteesSaga(),
    statusTutorsSaga(),
    matchSearchSaga(),
    confirmMatch()
  ]);
}
