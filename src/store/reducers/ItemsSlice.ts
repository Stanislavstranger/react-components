import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Animals } from '../../models';

interface ItemsState {
  animals: Animals[];
  selectedAnimal: Animals;
}

const initialState: ItemsState = {
  animals: [],
  selectedAnimal: {
    avian: false,
    canine: false,
    earthAnimal: false,
    earthInsect: false,
    feline: false,
    name: '',
    uid: '',
  },
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeItems(state, action: PayloadAction<Animals[]>) {
      state.animals = action.payload;
    },
    changeItem(state, action: PayloadAction<Animals>) {
      state.selectedAnimal = action.payload;
    },
  },
});

export default itemsSlice.reducer;
