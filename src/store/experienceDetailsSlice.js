import { createSlice } from "@reduxjs/toolkit";

const experienceDetailsSlice = createSlice({
  name: "experienceDetails",
  initialState: [],
  reducers: {
    addExperience: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addExperience } = experienceDetailsSlice.actions;
export default experienceDetailsSlice;
