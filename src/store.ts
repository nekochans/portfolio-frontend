import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit';
import memberModule from './modules/memberModule';

const rootReducer = combineReducers({
  member: memberModule.reducer,
});

export default () => {
  const middlewareList = [...getDefaultMiddleware()];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
  });
};
