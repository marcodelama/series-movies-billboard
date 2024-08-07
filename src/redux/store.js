import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./isLoadingSlice";

export const store = configureStore({
    reducer: isLoadingSlice
})