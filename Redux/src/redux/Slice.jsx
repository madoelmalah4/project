import { createSlice, nanoid } from "@reduxjs/toolkit";

let counterid = 0;
const initialState = {
  arr: [],
};

const counterSlice = createSlice({
  name: "arr",
  initialState,
  reducers: {
    addtoarr: (state, action) => {
      state.arr.push({
        value: action.payload,
        id: ++counterid,
      });
    },
    removefromarr: (state, action) => {
    state.arr =  state.arr.filter((index) => index.id !== action.payload);
    },
  },
});

export const { addtoarr, removefromarr } = counterSlice.actions;
export default counterSlice.reducer;
