import produce from 'immer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { IDisplayAlertPayload, AlertActions } from './actions';
import { IAlertState, AlertInitialState } from './states';

export const alertReducer = reducerWithInitialState(AlertInitialState)
  .case(
    AlertActions.displayAlert,
    (
      state: Readonly<IAlertState>,
      payload: IDisplayAlertPayload
    ): IAlertState => {
      return produce(state, (draft: IAlertState) => {
        draft.isOpen = true;
        draft.message = payload.message;
        draft.severity = payload.severity;
        return draft;
      });
    }
  )
  .case(
    AlertActions.hideAlert,
    (state: Readonly<IAlertState>): IAlertState => {
      return produce(state, (draft: IAlertState) => {
        draft.isOpen = false;
        return draft;
      });
    }
  );
