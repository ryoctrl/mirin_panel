import produce from 'immer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { IExhibition } from '../../models';
import { AppActions, IHydratePayload } from '../actions';
import { ExhibitionsActions, IFetchYearsSuccessPayload } from './actions';
import { ExhibitionsInitialState, IExhibitionsState } from './states';

export const exhibitionsReducer = reducerWithInitialState(
  ExhibitionsInitialState
)
  .case(
    ExhibitionsActions.fetchYearsSucceeded,
    (
      state: Readonly<IExhibitionsState>,
      payload: IFetchYearsSuccessPayload
    ): IExhibitionsState => {
      return produce(state, (draft: IExhibitionsState) => {
        draft.years = payload;
        return draft;
      });
    }
  )
  .case(
    AppActions.hydrate,
    (
      state: Readonly<IExhibitionsState>,
      payload: Readonly<IHydratePayload>
    ): IExhibitionsState => {
      return produce(state, (draft: IExhibitionsState) => {
        draft.years = payload.exhibitionState.years;
        return draft;
      });
    }
  );
