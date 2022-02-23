import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchActiveTutors() {
  console.log('in fetchActiveTutors');
  try {
    const response = yield axios.get("/api/tutors/active");
    yield put({ type: "SET_ACTIVE_TUTORS", payload: response.data });
  } catch (error) {
    alert("no in fetchActiveTutors");
    console.log("fetch active tutors error", error);
  }
}

function* activeTutorsSaga() {
  yield takeLatest("FETCH_ACTIVE_TUTORS", fetchActiveTutors);
}

export default activeTutorsSaga;
