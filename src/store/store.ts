import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchSlice';
import itemsReducer from './reducers/ItemsSlice';
import loadingReducer from './reducers/LoadingSlice';

const rootReducer = combineReducers({
  searchReducer,
  itemsReducer,
  loadingReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
