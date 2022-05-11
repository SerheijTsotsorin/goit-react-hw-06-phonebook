import { configureStore } from '@reduxjs/toolkit'
import { contactSlice } from './contactSlice'
// import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
  // middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

// Repeta

// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { userSlice } from './userSlice';

// export const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//   },
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
// });

