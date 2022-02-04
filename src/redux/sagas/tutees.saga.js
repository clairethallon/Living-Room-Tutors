import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTutees() {
  console.log("in fetchTutees");
  try {
    const response = yield axios.get("/api/tutees");
    yield put({ type: "SET_TUTEES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch tutees error", error);
  }
}

function* postNewStudent(action) {
  //this function adds a new tutee to the tutee table, along with entry for them in
  //language table
  try {
    const response = yield axios.post("/api/tutees", action.payload);
    try {
      const response2 = yield axios.post(
        "/api/mail",
        action.payload.emailStudent
      );
    } catch (err) {
      alert("no");
      console.log("error posting new student email:", err);
    }
  } catch (err) {
    alert("no");
    console.log("error posting new student:", err);
  }
}

function* tuteesSaga() {
  yield takeLatest("FETCH_TUTEES", fetchTutees);
  yield takeLatest("ADD_NEW_STUDENT", postNewStudent);
}

export default tuteesSaga;
