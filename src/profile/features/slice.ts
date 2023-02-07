import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// 프로필 상태
export interface ProfileState {
  profileName: string;
  imageUrl: string;
}

// 프로필 상태 초기화
const initialState: ProfileState = {
  profileName: '',
  imageUrl: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // 프로필 닉네임 변경
    setProfileName: (state, action: PayloadAction<string>) => {
      state.profileName = action.payload;
    },
    // 프로필 이미지 URL 변경
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    // 프로필 변경
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      state.imageUrl = action.payload.imageUrl;
      state.profileName = action.payload.profileName;
    },
  },
});

export const { setProfileName, setImageUrl, setProfile } = profileSlice.actions;

export default profileSlice.reducer;
