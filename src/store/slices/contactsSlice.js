import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { contacts: [] },
  reducers: {
    createContact(state, action) {
      state.contacts.push({
        ...action.payload,
        isFavourite: false,
        id: uuidv4(),
      });
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
    updateContact(state, action) {
      const index = state.contacts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.contacts[index] = {
        ...state.contacts[index],
        ...action.payload.updatedData,
      };
    },
  },
});

const { reducer, actions } = contactsSlice;
export const { createContact, removeContact, updateContact } = actions;

export default reducer;
