import { createStore, applyMiddleware, Store } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { createRouterMiddleware } from 'connected-next-router';
import createSagaMiddleware, { Task } from 'redux-saga';

import { combinedReducers, RootState } from './reducers';
import { rootSaga } from './sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<RootState> = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  const routerMiddleware = createRouterMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(
    combinedReducers,
    bindMiddleware([sagaMiddleware, routerMiddleware])
  );
  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<RootState>(makeStore, { debug: false });
