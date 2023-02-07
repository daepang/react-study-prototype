import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { RootState } from 'src/store';

import LinkButton from 'src/profile/components/atoms/button/LinkButton';
import ProfileImage from 'src/profile/components/molecules/ProfileImage';
import ProfileScore from 'src/profile/components/molecules/ProfileScore';

interface Props {
  // 프로필 이미지 URL
  imageUrl: string;
}

const ProfileInfo = ({ imageUrl }: Props) => {
  // 프로필 닉네임 상태
  const profileName = useSelector((state: RootState) => state.profile.profileName);

  return (
    <>
      <section className={classNames('profileInfo')}>
        <div className='profileInfo-top'>
          {/* 프로필 이미지 영역 */}
          <ProfileImage imageUrl={imageUrl} />

          {/* 프로필 정보 영역 */}
          <ProfileScore />
        </div>

        {/* 프로필 닉네임 영역 */}
        <div className={'profileInfo-nickName'}>{profileName}</div>

        <div className='profileInfo-btnBox'>
          <LinkButton url={'/profile/edit'} buttonClass={'profileInfo-btn'} buttonText={'프로필 편집'} />
          <LinkButton url={'/profile/friend'} buttonClass={'profileInfo-btn'} buttonText={'친구 목록'} />
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
