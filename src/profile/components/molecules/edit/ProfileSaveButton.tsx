import React from 'react';
import { useDispatch } from 'react-redux';

import { setIsProfileSave } from 'src/profile/features/slice';

export const ProfileSaveButton = () => {
  const dispatch = useDispatch();

  // 프로필 저장
  const saveProfile = () => {
    dispatch(setIsProfileSave(true));
  };
  return (
    <>
      <div className={'bottomBar'}>
        <button className={'btnContained'} onClick={saveProfile}>
          저장
        </button>
      </div>
    </>
  );
};

export default ProfileSaveButton;
