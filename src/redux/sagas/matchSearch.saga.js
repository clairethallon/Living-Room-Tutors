import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchGroupAMatches(action) {
  console.log('in fetchGroupAMatches', action.payload);
  try {
    const response = yield axios.get(`/api/matches/groupA/?subject1=${action.payload.subject_1}&subject2=${action.payload.subject_2}&subject3=${action.payload.subject_3}&grade=${action.payload.tutee_grade}`);
    yield put({ type: "SET_GROUP_A_MATCHES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetchGroupAMatches error", error);
  }
}

function* fetchGroupBMatches(action) {
  console.log('in fetchGroupBMatches', action.payload);
  try {
    const response = yield axios.get(`/api/matches/groupB/?subject1=${action.payload.subject_1}&subject2=${action.payload.subject_2}&subject3=${action.payload.subject_3}&grade=${action.payload.tutee_grade}`);
    yield put({ type: "SET_GROUP_B_MATCHES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetchGroupBMatches error", error);
  }
}

function* fetchGroupCMatches(action) {
  console.log('in fetchGroupCMatches', action.payload);
  try {
    const response = yield axios.get(`/api/matches/groupC/?subject1=${action.payload.subject_1}&subject2=${action.payload.subject_2}&subject3=${action.payload.subject_3}&grade=${action.payload.tutee_grade}`);
    yield put({ type: "SET_GROUP_C_MATCHES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetchGroupCMatches error", error);
  }
}

function* matchSearchSaga(action) {
  yield takeLatest("FETCH_POSSIBLE_MATCHES", fetchGroupAMatches);
  yield takeLatest("FETCH_POSSIBLE_MATCHES", fetchGroupBMatches);
  yield takeLatest("FETCH_POSSIBLE_MATCHES", fetchGroupCMatches);
}

export default matchSearchSaga;
