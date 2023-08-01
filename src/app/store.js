import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../slices/signInSlice";
import { apiSlice } from "../slices/apiSlice";

export default configureStore({
  reducer: {
    signIn: signInReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
