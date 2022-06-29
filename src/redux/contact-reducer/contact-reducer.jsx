import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const getContacts = (state) => state.contacts;
export const filterValue = (state) => state.filter;

export const { setContact, deleteContact, changeFilter } = contactSlice.actions;
export default contactSlice.reducer;
