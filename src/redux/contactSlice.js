import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  filter: '',
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    
    delContactAction(state, action) {
      state.filter(contact => contact.id !== action.payload);
    },

    filterAction(state, action) {
      state.filter = action.payload;
    },    
     
  },
});

console.log(contactSlice);

export const { addContact, delContactAction, filterAction } = contactSlice.actions;
export default contactSlice.reducer

// REPETA

// import { createSlice } from '@reduxjs/toolkit';

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     login: '',
//     isLoggedIn: false,
//   },
//   reducers: {
//     logIn(state, action) {
//       state.login = action.payload;
//       state.isLoggedIn = true;
//     },
//     logOut(state) {
//       state.login = '';
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { logIn, logOut } = userSlice.actions;