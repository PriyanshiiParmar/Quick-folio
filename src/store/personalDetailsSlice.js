import { createSlice } from "@reduxjs/toolkit";

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState: {
    name: "",
    role: "",
    description: "",
    profilePic: {},
  },
  reducers: {
    addData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { addData } = personalDetailsSlice.actions;
export default personalDetailsSlice;
