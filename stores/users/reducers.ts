import produce from 'immer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { ILoginSucceededPayload, UsersActions } from './actions';
import { IUserState, UsersInitialState } from './states';

export const userReducer = reducerWithInitialState(UsersInitialState)
  .case(
    UsersActions.loginSucceeded,
    (
      state: Readonly<IUserState>,
      payload: ILoginSucceededPayload
    ): IUserState => {
      return produce(state, (draft: IUserState) => {
        draft.userName = payload.userName;
        draft.name = payload.userName;
        return draft;
      });
    }
  )
  .case(
    UsersActions.logout,
    (state: Readonly<IUserState>): IUserState => {
      return produce(state, (draft: IUserState) => {
        draft = { ...UsersInitialState };
        return draft;
      });
    }
  );
