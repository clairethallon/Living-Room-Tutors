import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postNewMatch(action) {
  console.log('inpostNewMatch', action)
  const objectToSend = {
    tutor_id: action.tutor.id,
    tutee_id: action.tutee.id
  }
  try {
    const response = yield axios.post("/api/matches", objectToSend);
    yield put({ type: 'UPDATE_MATCHED_STATUS', objectToSend });
  } catch (err) {
    alert("no in postNewMatch");
    console.log("error posting new match:", err);
  }
}

function* updateMatchedStatus(action) {
  console.log('updateMatchedStatus', action)
  let objectToSend = {
    tutor_id: action.objectToSend.tutor_id,
    tutee_id: action.objectToSend.tutee_id
  }
  try {
    const response = yield axios.put("/api/matches/matchStatus", objectToSend);
    yield put({ type: 'FETCH_MATCHES' });
  } catch (err) {
    alert("no in updateMatchedStatus");
    console.log("error posting new match:", err);
  }
}

function* confirmMatchSaga() {
  yield takeLatest("SEND_NEW_MATCH", postNewMatch);
  yield takeLatest("UPDATE_MATCHED_STATUS", updateMatchedStatus);

}

export default confirmMatchSaga;
