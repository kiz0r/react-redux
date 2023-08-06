import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
});

export default rootReducer;
