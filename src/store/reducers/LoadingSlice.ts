import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: true,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    changeLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export default loadingSlice.reducer;
