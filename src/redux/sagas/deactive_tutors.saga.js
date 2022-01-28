import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchDeactiveTutors() {
  console.log('in fetchDeactiveTutors');
  try {
    const response = yield axios.get("/api/tutors/deactive");
    yield put({ type: "SET_DEACTIVE_TUTORS", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch deactive tutors error", error);
  }
}

function* deactiveTutorsSaga() {
  yield takeLatest("FETCH_DEACTIVE_TUTORS", fetchDeactiveTutors);
}

export default deactiveTutorsSaga;
