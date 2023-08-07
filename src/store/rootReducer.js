import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";
import contactsReducer from "./slices/contactsSlice";
import usersReducer from "./slices/usersSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
  contactsList: contactsReducer,
  usersList: usersReducer,
});

export default rootReducer;
