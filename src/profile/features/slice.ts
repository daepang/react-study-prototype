import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// 프로필 상태
export interface ProfileState {
  // 프로필 닉네임
  profileName: string;
  // 프로필 이미지 URL
  imageUrl: string;
  // 프로필 저장 여부
  isProfileSave: boolean;
  // 크롭 이미지
  cropImage: string;
  // 프로필 이미지 크롭 저장 여부
  isCropSave: boolean;
}

// 프로필 상태 초기화
const initialState: ProfileState = {
  profileName: '',
  imageUrl: 'https://picsum.photos/100/100',
  isProfileSave: false,
  cropImage: '',
  isCropSave: false,
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
    // 프로필 저장 여부 변경
    setIsProfileSave: (state, action: PayloadAction<boolean>) => {
      state.isProfileSave = action.payload;
    },
    // 크롭 이미지 변경
    setCropImage: (state, action: PayloadAction<string>) => {
      state.cropImage = action.payload;
    },
    // 프로필 이미지 크롭 저장 여부 변경
    setIsCropSave: (state, action: PayloadAction<boolean>) => {
      state.isCropSave = action.payload;
    },
  },
});

export const { setProfileName, setImageUrl, setProfile, setIsProfileSave, setCropImage, setIsCropSave } =
  profileSlice.actions;

export default profileSlice.reducer;
