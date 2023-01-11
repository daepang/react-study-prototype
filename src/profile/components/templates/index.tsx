import React from 'react';

import ProfileInfo from 'src/profile/components/organisms/ProfileInfo';
import Router, { useRouter } from 'next/router';

const Profile = () => {
  return (
    <>
      <ProfileInfo imageUrl={'https://placeimg.com/200/100/animals/sepia'} />
    </>
  );
};

export default Profile;
