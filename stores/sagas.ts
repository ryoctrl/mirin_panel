import { all, fork } from "redux-saga/effects";
import { watchLogin } from "./users/sagas";

export const rootSaga = function* root() {
  yield all([fork(watchLogin)]);
};
