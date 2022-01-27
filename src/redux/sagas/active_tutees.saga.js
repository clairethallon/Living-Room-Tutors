import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchActiveTutees() {
  console.log('in fetchActiveTutees');
  try {
    const response = yield axios.get("/api/tutees/active");
    yield put({ type: "SET_ACTIVE_TUTEES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch active tutees error", error);
  }
}

function* activeTuteesSaga() {
  yield takeLatest("FETCH_ACTIVE_TUTEES", fetchActiveTutees);
}

export default activeTuteesSaga;
