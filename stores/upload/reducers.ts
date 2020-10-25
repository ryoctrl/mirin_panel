import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
  IUpdateUploadStatePayload,
  IUploadSuccessPayload,
  UploadActions,
} from './actions';
import { IUploadState, UploadInitialState } from './states';

export const uploadReducer = reducerWithInitialState(UploadInitialState)
  .case(
    UploadActions.uploadSucceeded,
    (): IUploadState => {
      return { ...UploadInitialState };
    }
  )
  .case(
    UploadActions.updateState,
    (_: IUploadSuccessPayload, payload: IUpdateUploadStatePayload) => ({
      ...payload,
    })
  );
