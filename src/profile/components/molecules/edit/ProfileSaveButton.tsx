import React from 'react';
import { useDispatch } from 'react-redux';

export const ProfileSaveButton = () => {
  const dispatch = useDispatch();

  // 프로필 저장
  const saveProfile = () => {};
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
