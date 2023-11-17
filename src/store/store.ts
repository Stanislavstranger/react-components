import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchSlice';
import itemsReducer from './reducers/ItemsSlice';
import loadingReducer from './reducers/loadingSlice';
import { animalsAPI } from '../services/AnimalsService';

const rootReducer = combineReducers({
  searchReducer,
  itemsReducer,
  loadingReducer,
  [animalsAPI.reducerPath]: animalsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(animalsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
