import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 5,
};
export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    mySum: (state, action) => {
      state.value += action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { mysum, incrementByAmount } = counterSlice.actions;
export const selectInput = (state) => state.count.value;
export default counterSlice.reducer;
