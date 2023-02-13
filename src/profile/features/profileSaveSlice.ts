import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// 프로필 저장 완료 상태
export interface ProfileSaveComplete {
  value: boolean;
}

// 프로필 저장 완료 상태 초기화
const initialState: ProfileSaveComplete = {
  value: false,
};

export const profileSaveSlice = createSlice({
  name: 'profileSave',
  initialState,
  reducers: {
    // 프로필 닉네임 변경
    setProfileSaveComplete: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setProfileSaveComplete } = profileSaveSlice.actions;

export default profileSaveSlice.reducer;
