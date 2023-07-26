import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../slices/signInSlice";

export default configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
