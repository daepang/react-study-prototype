import React from 'react';

interface Props {
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
