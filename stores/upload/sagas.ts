import { push } from 'connected-next-router';
import moment from 'moment';
import { type } from 'os';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { AlertActions } from '../alerts';
import { addImagesAPI } from '../api/exhibitions';
import { uploadImage } from '../api/firebase';
import {
  ExhibitionsActions,
  exhibitionStateSelector,
  IExhibitionsState,
} from '../exhibitions';
import { IUploadPayload, UploadActions } from './actions';
import { uploadStateSelector } from './selectors';
import { IUploadState } from './states';

function* executeUpload() {
  const uploadState = (yield select(uploadStateSelector)) as IUploadState;

  try {
    const uploadedURL = yield call(
      uploadImage,
      moment().format('YYYYMMDDHHmmss'),
      uploadState.imageFile
    );

    const exhibitionsState = (yield select(
      exhibitionStateSelector
    )) as IExhibitionsState;

    const targetExhibitionsId = exhibitionsState.years
      .slice(-1)[0]
      .exhibitions.slice(-1)[0].id;

    const result = yield call(addImagesAPI, {
      imageURL: uploadedURL,
      title: uploadState.title,
      name: uploadState.name,
      caption: uploadState.caption,
      exhibitionsId: targetExhibitionsId,
    });

    if (result.error) {
      throw new Error(result.error);
    }

    yield put({
      type: ExhibitionsActions.fetchYears,
      payload: {},
    });

    yield put({
      type: AlertActions.displayAlert,
      payload: {
        message: `アップロードが完了しました。`,
        severity: 'success',
      },
    });

    yield put(push('/'));
  } catch (e) {
    console.log(e);
    yield put({
      type: AlertActions.displayAlert,
      payload: {
        message: 'アップロードに失敗しました',
        severity: 'error',
      },
    });
  }
}

export const watchUpload = function* () {
  yield takeEvery(UploadActions.upload.toString(), executeUpload);
};
