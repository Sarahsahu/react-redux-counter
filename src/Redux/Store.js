import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/counterSlice';
//store ban gaya
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
