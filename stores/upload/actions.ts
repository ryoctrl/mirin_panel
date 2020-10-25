import actionCreatorFactory from 'typescript-fsa';
import { IUploadState } from './states';

const actionCreator = actionCreatorFactory('upload');

export interface IUploadPayload {}
export interface IUploadSuccessPayload {}
export interface IUploadFailurePayload {}

export interface IUpdateUploadStatePayload extends IUploadState {}

export const UploadActions = {
  upload: actionCreator<IUploadPayload>('upload'),
  uploadSucceeded: actionCreator<IUploadSuccessPayload>('uploadSucceeded'),
  uploadFailed: actionCreator<IUploadFailurePayload>('uploadFailed'),
  updateState: actionCreator<IUpdateUploadStatePayload>('updateUploadState'),
};

export type UploadActionTypes =
  | ReturnType<typeof UploadActions.upload>
  | ReturnType<typeof UploadActions.uploadSucceeded>
  | ReturnType<typeof UploadActions.uploadFailed>
  | ReturnType<typeof UploadActions.updateState>;
