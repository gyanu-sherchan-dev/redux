import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      //here in following function there is no use of action, so you can remove that aswell
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});

//so now to exprot, there is 3 steps: first you have to destructure
const { reducer, actions } = counterSlice; // above reducers and reducer is not same. these two reducer and actions will be there in any slice, hense straight destructure.

export const { increment, decrement, reset } = actions; //this part we wll export to component

export default reducer; // this part we will export to store.
