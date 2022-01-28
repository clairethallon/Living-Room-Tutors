import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchDeactiveTutees() {
  console.log('in fetchDeactiveTutees');
  try {
    const response = yield axios.get("/api/tutees/deactive");
    yield put({ type: "SET_DEACTIVE_TUTEES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch deactive tutees error", error);
  }
}

function* deactiveTuteesSaga() {
  yield takeLatest("FETCH_DEACTIVE_TUTEES", fetchDeactiveTutees);
}

export default deactiveTuteesSaga;
