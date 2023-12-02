import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FormValuesReducer from './reducers/FormValuesSlice';
import CountryReducer from './reducers/CountryListSlice';

const rootReducer = combineReducers({
  FormValuesReducer,
  CountryReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActionPaths: ['payload.picture'],
          ignoredPaths: ['FormValuesReducer.formData.picture'],
        },
      }).concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
