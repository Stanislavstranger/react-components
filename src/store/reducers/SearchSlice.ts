import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    change(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    initializeFromLocalStorage(state) {
      if (typeof window !== 'undefined') {
        const savedSearchTerm = localStorage.getItem('searchTerm');
        state.searchTerm = savedSearchTerm || '';
      }
    },
  },
});

export const { initializeFromLocalStorage, change } = searchSlice.actions;
export default searchSlice.reducer;
