import produce from 'immer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { IPagePayload, IPageState, PageActions, PageInitialState } from '.';
import { AppActions, IHydratePayload } from '../actions';

export const pageReducer = reducerWithInitialState(PageInitialState)
  .case(
    PageActions.changePage,
    (
      state: Readonly<IPageState>,
      payload: Readonly<IPagePayload>
    ): IPageState => {
      return produce(state, (draft: IPageState) => {
        draft.selectedPage = payload.selectedPage;
      });
    }
  )
  .case(
    AppActions.hydrate,
    (
      state: Readonly<IPageState>,
      payload: Readonly<IHydratePayload>
    ): IPageState => {
      return produce(state, (draft: IPageState) => {
        draft.selectedPage = payload.pages.selectedPage;
      });
    }
  );
