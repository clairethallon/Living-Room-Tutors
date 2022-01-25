import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMatches() {
  console.log('in fetchMatches')
  try {
    const response = yield axios.get("/api/matches");
    yield put({ type: "SET_MATCHES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch matches error", error);
  }
}

function* matchesSaga() {
  yield takeLatest("FETCH_MATCHES", fetchMatches);
}

export default matchesSaga;
