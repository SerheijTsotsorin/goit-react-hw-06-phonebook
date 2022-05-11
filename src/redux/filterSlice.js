import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
  },
});

console.log(filterSlice);

// export const { addContact } = contactSlice.actions;