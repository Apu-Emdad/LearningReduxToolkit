const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//createAsyngThunk generates pending, fulfilled and rejected action types base on the promise
const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res.data.map((user) => user.name)));
});

const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      console.log("success");
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
      console.log("failed");
    });
  },
});

module.exports = usersSlice.reducer;
module.exports.fetchUsers = fetchUsers;
