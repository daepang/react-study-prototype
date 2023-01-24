import React from 'react';

interface Props {
  // 프로필 이미지 URL
  imageUrl: string;
}

const ProfileImage = ({ imageUrl }: Props) => {
  return (
    <span className={'profileCard-img'}>
      {/* 이미지 영역 */}
      {imageUrl && imageUrl !== '' && <img src={imageUrl} />}
    </span>
  );
};

export default ProfileImage;
