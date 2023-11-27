import { Animals } from '../../models';
import { itemsSlice } from './ItemsSlice';
import { PayloadAction } from '@reduxjs/toolkit';

describe('Items Slice', () => {
  it('should handle changeItems action', () => {
    const initialState = {
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

    const payload = [
      {
        avian: true,
        canine: false,
        earthAnimal: true,
        earthInsect: false,
        feline: false,
        name: 'TestAnimal',
        uid: 'AN001',
      },
    ];

    const action: PayloadAction<Animals[]> = {
      type: 'items/changeItems',
      payload,
    };

    const newState = itemsSlice.reducer(initialState, action);

    expect(newState.animals).toEqual(payload);
  });

  it('should handle changeItem action', () => {
    const initialState = {
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

    const payload = {
      avian: true,
      canine: false,
      earthAnimal: true,
      earthInsect: false,
      feline: false,
      name: 'TestAnimal',
      uid: 'AN001',
    };

    const action: PayloadAction<Animals> = {
      type: 'items/changeItem',
      payload,
    };

    const newState = itemsSlice.reducer(initialState, action);

    expect(newState.selectedAnimal).toEqual(payload);
  });
});
