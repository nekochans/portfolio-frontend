import { takeLatest, call, put } from 'redux-saga/effects';
import memberModule from '../modules/memberModule';
import fetchMembers from '../../domain/members';

const sleep = microSecond =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* postFetchMembersRequest() {
  yield call(sleep, 1000);
  yield put(memberModule.actions.postFetchMembersRequest());

  const members = fetchMembers();

  yield put(memberModule.actions.fetchMembersSuccess(members));
}

function* rootSaga() {
  yield takeLatest(
    memberModule.actions.postFetchMembersRequest,
    postFetchMembersRequest,
  );
}

export default rootSaga;
