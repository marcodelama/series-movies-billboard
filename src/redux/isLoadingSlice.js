import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
   name: 'isLoading',
   initialState: false,
   reducers: {
      startLoading: (state) => { return true },
      endLoading: (state) => { return false },
   },
});

export const { startLoading, endLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;