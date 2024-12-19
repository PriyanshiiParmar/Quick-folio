import { createSlice } from "@reduxjs/toolkit";

const skillsDetailsSlice = createSlice({
  name: "skills",
  initialState: {
    linkedin: "",
    github: "",
    twitter: "",
    instagram: "",
  },
  reducers: {
    addSkills: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { addSkills } = skillsDetailsSlice.actions;
export default skillsDetailsSlice;
