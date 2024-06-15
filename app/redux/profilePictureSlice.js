import { createSlice } from "@reduxjs/toolkit";

const profilePictureSlice = createSlice({
  name: "profilePicture",
  initialState: null, // initial state is null indicating no profile picture
  reducers: {
    setProfilePicture: (state, action) => {
      return action.payload; // set the new profile picture
    },
  },
});

export const { setProfilePicture } = profilePictureSlice.actions;
export default profilePictureSlice.reducer;
