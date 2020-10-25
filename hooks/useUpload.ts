import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IUploadState,
  UploadActions,
  uploadStateSelector,
} from '../stores/upload';

type UploadOperators = {
  uploadState: IUploadState;
  upload: () => void;
  updateState: (newState: IUploadState) => void;
};

export const useUpload = (): Readonly<UploadOperators> => {
  const dispatch = useDispatch();
  const uploadState = useSelector(uploadStateSelector);

  return {
    uploadState,
    upload: useCallback(() => {
      dispatch(UploadActions.upload({}));
    }, [dispatch]),
    updateState: useCallback(
      (newState) => {
        dispatch(UploadActions.updateState(newState));
      },
      [dispatch]
    ),
  };
};
