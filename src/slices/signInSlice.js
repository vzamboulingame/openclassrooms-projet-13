import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  rememberMe: false,
  authToken: null,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setRememberMe(state, action) {
      state.rememberMe = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
  },
});

export const { setUsername, setPassword, setRememberMe, setAuthToken } =
  signInSlice.actions;
export default signInSlice.reducer;
