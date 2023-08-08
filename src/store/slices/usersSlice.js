import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadUsers } from "../../api";

const USERS_SLICE_NAME = "users";

// users/getUser is just a name of action ({type : 'users/getUsers'})
export const getUsers = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUsers`,

  // thunkAPI: dispatch, rejectWithValue
  async (currentPage, thunkAPI) => {
    try {
      // const { dispatch } = thunkAPI;
      const data = await loadUsers(currentPage);
      return data.results;
      // dispatch(createUsers(data.results));
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [{ name: "Test" }],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // when fethcing
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    // when error
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    // when result
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
  },
});

const { reducer, actions } = usersSlice;

export default reducer;
