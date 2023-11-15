import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: localStorage.getItem('searchTerm') || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    change(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export default searchSlice.reducer;
