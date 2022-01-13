import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchWidget() {
  try {
    const response = yield axios.get("/api/test");
    yield put({ type: "SET_WIDGET", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetch widget error", error);
  }
}

function* testSaga() {
  yield takeLatest("FETCH_WIDGET", fetchWidget);
}

export default testSaga;
