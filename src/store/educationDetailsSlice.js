import { createSlice } from "@reduxjs/toolkit";

const educationDetailsSlice = createSlice({
  name: "educationDetails",
  initialState: [],
  reducers: {
    addEducation: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { addEducation } = educationDetailsSlice.actions;
export default educationDetailsSlice;

