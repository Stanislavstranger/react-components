import { loadingSlice } from './LoadingSlice';
import { PayloadAction } from '@reduxjs/toolkit';

describe('Loading Slice', () => {
  it('should handle changeLoading action', () => {
    const initialState = {
      loading: true,
    };

    const action: PayloadAction<boolean> = {
      type: 'loading/changeLoading',
      payload: false,
    };

    const newState = loadingSlice.reducer(initialState, action);

    expect(newState.loading).toEqual(false);
  });
});
