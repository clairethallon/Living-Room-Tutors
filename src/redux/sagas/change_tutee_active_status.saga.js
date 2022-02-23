import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* changeTuteeActiveStatus(action) {
  console.log('in changeTuteeActiveStatus', action.payload);
  let objectToSend = {
    id: action.payload
  }
  console.log(objectToSend);
  try {
    const response = yield axios.put(`/api/tutees/changeStatus`, objectToSend);
    yield put({ type: "FETCH_ACTIVE_TUTEES" });
    yield put({ type: "FETCH_DEACTIVE_TUTEES" });
  } catch (error) {
    alert("no in changeTuteeActiveStatus");
    console.log("fetch active tutees error", error);
  }
}

function* statusTuteesSaga() {
  yield takeLatest("CHANGE_TUTEE_STATUS", changeTuteeActiveStatus);
}

export default statusTuteesSaga;
