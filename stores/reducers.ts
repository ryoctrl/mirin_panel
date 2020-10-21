import { combineReducers } from "redux";
import { pageReducer } from "stores/pages/reducers";
import { userReducer } from "./users/reducers";
import { routerReducer } from "connected-next-router";
import { alertReducer } from "./alerts/reducers";

export const combinedReducers = combineReducers({
  pages: pageReducer,
  userState: userReducer,
  alertState: alertReducer,
  router: routerReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;
