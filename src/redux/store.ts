import { Store } from 'redux';
import logger from 'redux-logger';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import memberModule, { initialState } from './modules/memberModule';
import rootSaga from './middleware/rootSaga';

const rootReducer = combineReducers({
  member: memberModule.reducer,
});

const preloadedState = () => {
  return { member: initialState };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStoreInstance = Store<StoreState>;

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareList = [...getDefaultMiddleware(), sagaMiddleware, logger];

  const store: any = configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
