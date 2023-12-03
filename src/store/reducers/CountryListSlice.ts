import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import countriesArray from '../../data/countries';

interface InitialState {
  countries: string[];
}

const initialState: InitialState = {
  countries: countriesArray,
};

export const CountryListSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getContries(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
  },
});

export default CountryListSlice.reducer;
