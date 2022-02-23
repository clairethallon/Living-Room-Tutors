import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchGroupAMatches(action) {
  console.log("in fetchGroupAMatches", action.payload);
  try {
    const response = yield axios.get(
      `/api/matches/groupA/?subject1=${action.payload.subject_1}&subject2=${action.payload.subject_2}&subject3=${action.payload.subject_3}&grade=${action.payload.tutee_grade}`
    );
    yield put({ type: "SET_GROUP_A_MATCHES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetchGroupAMatches error", error);
  }
}

function* fetchGroupBMatches(action) {
  console.log("in fetchGroupBMatches", action.payload);
  try {
    const response = yield axios.get(
      `/api/matches/groupB/?subject1=${action.payload.subject_1}&subject2=${action.payload.subject_2}&subject3=${action.payload.subject_3}&grade=${action.payload.tutee_grade}`
    );
    yield put({ type: "SET_GROUP_B_MATCHES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetchGroupBMatches error", error);
  }
}

function* fetchGroupCMatches(action) {
  console.log("in fetchGroupCMatches", action.payload);
  try {
    const response = yield axios.get(
      `/api/matches/groupC/?subject1=${action.payload.subject_1}&subject2=${action.payload.subject_2}&subject3=${action.payload.subject_3}&grade=${action.payload.tutee_grade}`
    );
    yield put({ type: "SET_GROUP_C_MATCHES", payload: response.data });
  } catch (error) {
    alert("no");
    console.log("fetchGroupCMatches error", error);
  }
}

function* fetchGroupDMatches(action) {
  console.log("in fetchGroupDMatches", action.payload);
  try {
    const response = yield axios.get(
      `/api/matches/groupD/?subject1=${action.payload.subject_1}&subject2=${action.payload.subject_2}&subject3=${action.payload.subject_3}&grade=${action.payload.tutee_grade}`
    );
    yield put({ type: "SET_GROUP_D_MATCHES", payload: response.data });
  } catch (error) {
    alert("no in fetchGroupDMatches");
    console.log("fetchGroupDMatches error", error);
  }
}

function* setTutee(action) {
  console.log("in setTuteeSaga", action.payload);
  try {
    console.log("in setTuteeSaga");
    yield put({ type: "SET_SELECTED_TUTEE", payload: action.payload });
  } catch (error) {
    alert("no in setTutee");
    console.log("setTuteeSaga error", error);
  }
}

function* matchSearchSaga(action) {
  yield takeLatest("FETCH_POSSIBLE_MATCHES", fetchGroupAMatches);
  yield takeLatest("FETCH_POSSIBLE_MATCHES", fetchGroupBMatches);
  yield takeLatest("FETCH_POSSIBLE_MATCHES", fetchGroupCMatches);
  yield takeLatest("FETCH_POSSIBLE_MATCHES", fetchGroupDMatches);
  yield takeLatest("FETCH_POSSIBLE_MATCHES", setTutee);
}

export default matchSearchSaga;
