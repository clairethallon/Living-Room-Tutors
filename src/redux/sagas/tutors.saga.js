import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTutors() {
  console.log("in fetchTutors");
  try {
    const response = yield axios.get("/api/tutors");
    yield put({ type: "SET_TUTORS", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch tutors error", error);
  }
}

function* postNewTutor(action) {
  //this function adds a new tutor to the tutor database, along with entries for them in
  //language, subject_tutor, and mentoring_grade
  try {
    const response = yield axios.post("/api/tutors", action.payload);
  } catch (err) {
    alert("no");
    console.log("error posting new tutor:", err);
  }
}

function* tutorsSaga() {
  yield takeLatest("FETCH_TUTORS", fetchTutors);
  yield takeLatest("SEND_NEW_TUTOR", postNewTutor);
}

export default tutorsSaga;
