import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  profileName: string;
  imageUrl: string;
}

const initialState: ProfileState = {
  profileName: '',
  imageUrl: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileName: (state, action: PayloadAction<string>) => {
      state.profileName = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      state.imageUrl = action.payload.imageUrl;
      state.profileName = action.payload.profileName;
    },
  },
});

export const { setProfileName, setImageUrl, setProfile } = profileSlice.actions;

export default profileSlice.reducer;
