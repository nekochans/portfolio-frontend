import { takeLatest, call, put } from 'redux-saga/effects';
import memberModule from '../modules/memberModule';
import fetchMembers from '../../domain/members';

const sleep = (microSecond: number) =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* postFetchMembersRequest() {
  const members = fetchMembers();
  yield call(sleep, 1000);

  yield put(memberModule.actions.fetchMembersSuccess(members));
}

function* rootSaga() {
  yield takeLatest(
    memberModule.actions.postFetchMembersRequest,
    postFetchMembersRequest,
  );
}

export default rootSaga;
