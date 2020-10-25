import { combineReducers } from 'redux';
import { pageReducer } from 'stores/pages/reducers';
import { userReducer } from './users/reducers';
import { routerReducer } from 'connected-next-router';
import { alertReducer } from './alerts/reducers';
import { exhibitionsReducer } from './exhibitions/reducers';
import { uploadReducer } from './upload/reducers';

export const combinedReducers = combineReducers({
  pages: pageReducer,
  userState: userReducer,
  alertState: alertReducer,
  exhibitionState: exhibitionsReducer,
  uploadState: uploadReducer,
  router: routerReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;
