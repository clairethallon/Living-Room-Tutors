import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTutors() {
  console.log('in fetchTutors')
  try {
    const response = yield axios.get("/api/tutors");
    yield put({ type: "SET_TUTORS", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch tutors error", error);
  }
}

function* tutorsSaga() {
  yield takeLatest("FETCH_TUTORS", fetchTutors);
}

export default tutorsSaga;
