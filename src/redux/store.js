import { configureStore } from '@reduxjs/toolkit'
import { contactSlice } from './contactSlice'
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export default store;


