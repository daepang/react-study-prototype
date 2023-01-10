import React from 'react';
import classNames from 'classnames';

import ProfileImage from 'src/profile/components/molecules/ProfileImage';
import ProfileScore from 'src/profile/components/molecules/ProfileScore';

interface Props {
  imageUrl: string;
}

const ProfileInfo = ({ imageUrl }: Props) => {
  return (
    <>
      <section className={classNames('profileInfo')}>
        <div className='profileInfo-top'>
          {/* 프로필 이미지 영역 */}
          <ProfileImage imageUrl={imageUrl} />

          {/* 프로필 정보 영역 */}
          <ProfileScore />
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
