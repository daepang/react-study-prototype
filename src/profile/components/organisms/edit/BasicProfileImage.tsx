import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { imageUrlToBase64 } from 'src/common/util/base64';

import { setImageUrl } from 'src/profile/features/slice';

interface Props {
  // 기본 이미지 페이지 열림,닫힘 상태 변경
  setIsOpenBasicPage: Function;
  // 이미지 편집 레이어 열림,닫힘 상태 변경
  setIsOpenImageEdit: Function;
}

const BasicProfileImage = ({ setIsOpenBasicPage, setIsOpenImageEdit }: Props) => {
  const dispatch = useDispatch();

  // 이미지 선택 여부
  const [isSelect, setIsSelect] = useState<boolean>(false);

  // 이미지 클릭 호출
  const handleImageClick = () => {
    dispatch(setImageUrl(''));
    setIsOpenImageEdit(false);
    setIsOpenBasicPage(false);
  };

  return (
    <>
      <article className='profile-select'>
        <button className='profile-selectItem on' onClick={() => {}}>
          <img src={''} alt='기본이미지' />
        </button>
      </article>
    </>
  );
};

export default BasicProfileImage;
