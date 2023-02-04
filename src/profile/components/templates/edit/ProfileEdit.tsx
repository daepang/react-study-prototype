import React from 'react';
import classNames from 'classnames';

import ProfileImage from 'src/profile/components/molecules/ProfileImage';

const ProfileEdit = () => {
  return (
    <>
      <section>
        <section className={classNames('profileEdit')}>
          <ProfileImage imageUrl={'https://placeimg.com/200/100/animals/sepia'} />
        </section>
      </section>
    </>
  );
};

export default ProfileEdit;
