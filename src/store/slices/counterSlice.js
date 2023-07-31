import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    decrement(state, action) {
      state.count = state.count - 1;
    },
    increment(state, action) {
      state.count = state.count + 1;
    },
  },
});

const { reducer, actions } = counterSlice;
export const { decrement, increment } = actions;
