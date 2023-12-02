import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormValues } from '../../models/Interface';

interface InitialState {
  formData: FormValues;
}

const initialState: InitialState = {
  formData: {} as FormValues,
};

export const FormValuesSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeFormValues(state, action: PayloadAction<FormValues>) {
      state.formData = action.payload;
    },
  },
});

export default FormValuesSlice.reducer;
