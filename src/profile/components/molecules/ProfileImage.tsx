import React from 'react';

interface Props {
  // 프로필 이미지 URL
  imageUrl: string;
  // 프로필 이미지 변경 버튼 여부
  isChangeBtn?: boolean;
  // 프로필 이미지 변경 팝업 오픈 Function
  setIsOpenImageEdit?: Function;
}

const ProfileImage = ({ imageUrl, isChangeBtn, setIsOpenImageEdit }: Props) => {
  return (
    <span className={'profileCard-img'}>
      {/* 이미지 영역 */}
      {imageUrl && imageUrl !== '' && <img src={imageUrl} />}

      {/* 프로필 이미지 변경 버튼 영역 */}
      {isChangeBtn && (
        <label className='profileCard-changeBtn' onClick={setIsOpenImageEdit && (() => setIsOpenImageEdit(true))}>
          <span className='blind'>프로필 이미지 변경</span>
        </label>
      )}
    </span>
  );
};

export default ProfileImage;
