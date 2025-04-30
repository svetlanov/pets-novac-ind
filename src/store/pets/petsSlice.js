import { createSlice } from '@reduxjs/toolkit';

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    pets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchStart(state) {
      state.status = 'loading';
    },
    fetchSuccess(state, action) {
      state.status = 'succeeded';
      state.pets = action.payload;
    },
    fetchFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    addPetSuccess(state, action) {
      state.pets.push(action.payload);
    },
    deletePetSuccess(state, action) {
      state.pets = state.pets.filter((pet) => pet.id !== action.payload);
    },
    editPetSuccess(state, action) {
      const index = state.pets.findIndex(pet => pet.id === action.payload.id);
      if (index !== -1) {
        state.pets[index] = action.payload;
      }
    },
  },
});

// Экспортируем actions
export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  addPetSuccess,
  deletePetSuccess,
  editPetSuccess,
} = petsSlice.actions;

export default petsSlice.reducer;
