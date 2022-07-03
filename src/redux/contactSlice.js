import { createSlice} from '@reduxjs/toolkit';


export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
  items: [],
  filter: '',
  },
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