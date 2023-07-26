import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  rememberMe: false,
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
  },
});

export const { setUsername, setPassword, setRememberMe } = signInSlice.actions;
export default signInSlice.reducer;
