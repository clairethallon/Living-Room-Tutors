import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* changeTutorActiveStatus(action) {
  console.log('in changeTutorActiveStatus', action.payload);
  let objectToSend = {
    id: action.payload
  }
  console.log(objectToSend);
  try {
    const response = yield axios.put(`/api/tutors/changeStatus`, objectToSend);
    yield put({ type: "FETCH_ACTIVE_TUTORS" });
    yield put({ type: "FETCH_DEACTIVE_TUTORS" });
  } catch (error) {
    alert("no");
    console.log("fetch active tutors error", error);
  }
}

function* statusTutorsSaga() {
  yield takeLatest("CHANGE_TUTOR_STATUS", changeTutorActiveStatus);
}

export default statusTutorsSaga;
