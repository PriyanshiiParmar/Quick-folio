import { createSlice } from "@reduxjs/toolkit";

const socialLinksSlice = createSlice({
  name: "socialLinks",
  initialState: {
    linkedin: "",
    github: "",
    twitter: "",
    instagram: ""
  },
  reducers: {
    addSocialLinks: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addSocialLinks } = socialLinksSlice.actions;
export default socialLinksSlice;
