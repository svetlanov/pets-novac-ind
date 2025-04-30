import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './pets/petsSlice';

export const store = configureStore({
  reducer: {
    pets: petsReducer,
  },
});
