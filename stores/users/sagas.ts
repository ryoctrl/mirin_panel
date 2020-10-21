import { call, put, takeEvery } from 'redux-saga/effects';
import {
  ILoginPayload,
  ILoginSucceededPayload,
  isLoginSucceededPayload,
  UsersActions,
  UsersActionTypes,
} from './actions';
import { push } from 'connected-next-router';
import { AxiosError } from 'axios';
import { AlertActions } from '../alerts';
import { loginAPI } from '../api/users';
import { Messages } from 'libs';

function* executeLogin(action: UsersActionTypes) {
  const loginPayload = action.payload as ILoginPayload;
  const result = yield call(loginAPI, loginPayload);

  if (isLoginSucceededPayload(result)) {
    const payload = result as ILoginSucceededPayload;

    yield put({
      type: UsersActions.loginSucceeded,
      payload,
    });

    yield put({
      type: AlertActions.displayAlert,
      payload: {
        message: 'ログインしました。',
        severity: 'success',
      },
    });

    yield put(push('/'));
    return;
  }
  const error = result as AxiosError;

  const response = error.response?.data || 'ConnectionError';
  const message =
    response === 'ConnectionError'
      ? Messages.CONNECTION_FAILED
      : Messages.LOGIN_FAILED;

  yield put({
    type: AlertActions.displayAlert,
    payload: {
      message,
      severity: 'error',
    },
  });
}

function* executeLogout() {
  yield put({
    type: UsersActions.logout,
    payload: {},
  });

  yield put({
    type: AlertActions.displayAlert,
    payload: {
      message: 'ログアウトしました。',
      severity: 'success',
    },
  });

  yield put(push('/'));
}

export const watchLogin = function* () {
  yield takeEvery(UsersActions.login.toString(), executeLogin);
  yield takeEvery(UsersActions.logout.toString(), executeLogout);
};
