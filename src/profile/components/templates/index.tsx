import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/store';

import ProfileInfo from 'src/profile/components/organisms/ProfileInfo';

const Profile = () => {
  // 프로필 이미지 상태
  const imageUrl = useSelector((state: RootState) => state.profile.imageUrl);

  return (
    <>
      {/* 프로필 정보 영역 */}
      <ProfileInfo imageUrl={imageUrl} />
    </>
  );
};

export default Profile;
