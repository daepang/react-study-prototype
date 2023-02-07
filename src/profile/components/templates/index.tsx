import React from 'react';

import ProfileInfo from 'src/profile/components/organisms/ProfileInfo';

const Profile = () => {
  return (
    <>
      {/* 프로필 정보 영역 */}
      <ProfileInfo imageUrl={'https://picsum.photos/100/100'} />
    </>
  );
};

export default Profile;
