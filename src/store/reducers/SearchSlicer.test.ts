import { searchSlice } from './SearchSlice';
import { PayloadAction } from '@reduxjs/toolkit';

describe('Search Slice', () => {
  it('should handle change action', () => {
    const initialState = {
      searchTerm: 'InitialValue',
    };

    const payload = 'TestAnimal';
    const action: PayloadAction<string> = { type: 'search/change', payload };

    const newState = searchSlice.reducer(initialState, action);

    expect(newState.searchTerm).toBe(payload);
  });
});
