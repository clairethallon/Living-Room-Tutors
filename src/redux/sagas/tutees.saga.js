import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTutees() {
  console.log('in fetchTutees');
  try {
    const response = yield axios.get("/api/tutees");
    yield put({ type: "SET_TUTEES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch tutees error", error);
  }
}

function* tuteesSaga() {
  yield takeLatest("FETCH_TUTEES", fetchTutees);
}

export default tuteesSaga;
