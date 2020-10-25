import { Color } from '@material-ui/lab/Alert';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ExhibitionsActions,
  exhibitionStateSelector,
  IExhibitionsState,
} from '../stores/exhibitions';

type ExhibitionOperators = {
  exhibitionState: IExhibitionsState;
  fetchYears: () => void;
};

export const useExhibitions = (): Readonly<ExhibitionOperators> => {
  const dispatch = useDispatch();
  const exhibitionState = useSelector(exhibitionStateSelector);

  return {
    exhibitionState,
    fetchYears: useCallback(() => {
      dispatch(ExhibitionsActions.fetchYears({}));
    }, [dispatch]),
  };
};
