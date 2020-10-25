import { call, put, takeEvery } from 'redux-saga/effects';
import {
  ExhibitionsActions,
  ExhibitionsActionsTypes,
  IFetchYearsSuccessPayload,
} from './actions';
import { fetchYearsAPI } from '../api/exhibitions';

function* executeFetchYears() {
  const result = yield call(fetchYearsAPI, {});

  const payload = result as IFetchYearsSuccessPayload;

  yield put({
    type: ExhibitionsActions.fetchYearsSucceeded,
    payload,
  });
}

export const watchExhibitions = function* () {
  yield takeEvery(ExhibitionsActions.fetchYears.toString(), executeFetchYears);
};
