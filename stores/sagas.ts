import { all, fork } from 'redux-saga/effects';
import { watchExhibitions } from './exhibitions/sagas';
import { watchUpload } from './upload/sagas';
import { watchLogin } from './users/sagas';

export const rootSaga = function* root() {
  yield all([fork(watchLogin), fork(watchExhibitions), fork(watchUpload)]);
};
