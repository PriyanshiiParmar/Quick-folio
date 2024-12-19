import { configureStore } from "@reduxjs/toolkit";
import educationDetailsSlice from "./educationDetailsSlice";
import personalDetailsSlice from "./personalDetailsSlice";
import experienceDetailsSlice from "./experienceDetailsSlice";
import skillsDetailsSlice from "./skillsDetailsSlice";
import socialLinksSlice from "./socialLinksSlice";

const appStore = configureStore({
  reducer: {
    personalDetails: personalDetailsSlice.reducer,
    educationDetails: educationDetailsSlice.reducer,
    experienceDetails: experienceDetailsSlice.reducer,
    skillsDetails: skillsDetailsSlice.reducer,
    socialLinks: socialLinksSlice.reducer,
  },
});
export default appStore;
