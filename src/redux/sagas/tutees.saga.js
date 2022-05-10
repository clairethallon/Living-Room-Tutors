import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTutees() {
  console.log("in fetchTutees");
  try {
    const response = yield axios.get("/api/tutees");
    yield put({ type: "SET_TUTEES", payload: response.data });
  } catch (error) {
    alert("no in fetchTutees");
    console.log("fetch tutees error", error);
  }
}

function* postNewStudent(action) {
  //this function adds a new tutee to the tutee table, along with entry for them in
  //language table

  let emailToSend = "";
  if (action.payload.studentOrGuardian === "Student") {
    emailToSend = action.payload.emailStudent;
  } else {
    emailToSend = action.payload.emailGuardian;
  }
  console.log("emailToSend:", emailToSend);

  try {
    const response = yield axios.post("/api/tutees", action.payload);
    yield put({ type: "UNSET_ADD_NEW_SUBJECTS_INFO" });
    yield put({ type: "UNSET_ADD_NEW_STUDENT_SUBJECTS" });
    yield put({ type: "UNSET_ADD_NEW_STUDENT_ADDITIONAL" });
    yield put({ type: "ADD_STUDENT_TERMS", payload: false });
    try {
      const response2 = yield axios.post("/api/mail", {
        email: emailToSend,
      });
    } catch (err) {
      //alert("no in postNewStudent email");
      console.log("error posting new student email:", err);
    }
  } catch (err) {
    alert("no postNewStudent");
    console.log("error posting new student:", err);
  }
}

function* tuteesSaga() {
  yield takeLatest("FETCH_TUTEES", fetchTutees);
  yield takeLatest("ADD_NEW_STUDENT", postNewStudent);
}

export default tuteesSaga;
