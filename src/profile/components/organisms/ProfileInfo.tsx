import React from 'react';
import classNames from 'classnames';

import LinkButton from 'src/profile/components/atoms/button/LinkButton';
import ProfileImage from 'src/profile/components/molecules/ProfileImage';
import ProfileScore from 'src/profile/components/molecules/ProfileScore';

interface Props {
  // 프로필 이미지 URL
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

        <div className='profileInfo-btnBox'>
          <LinkButton url={'/profile/edit'} buttonClass={'profileInfo-btn'} buttonText={'프로필 편집'} />
          <LinkButton url={'/profile/friend'} buttonClass={'profileInfo-btn'} buttonText={'친구 목록'} />
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
