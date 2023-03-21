import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { imageUrlToBase64 } from 'src/common/util/base64';

import { setImageUrl } from 'src/profile/features/slice';

// 기본 프로필 이미지 목록
const BASIC_PROFILE_LIST: string[] = [
  'red.png',
  'green.png',
  'blue.png',
  'skyblue.png',
  'pink.png',
  'yellow.png',
  'orange.png',
];

interface Props {
  // 기본 이미지 페이지 열림,닫힘 상태 변경
  setIsOpenBasicPage: Function;
  // 이미지 편집 레이어 열림,닫힘 상태 변경
  setIsOpenImageEdit: Function;
}

const BasicProfileImage = ({ setIsOpenBasicPage, setIsOpenImageEdit }: Props) => {
  const dispatch = useDispatch();

  // 마우스 오버 index
  const [mouseOverIndex, setMouseOverIndex] = useState<number>(-1);
  // 이미지 선택 여부
  const [isSelect, setIsSelect] = useState<boolean>(false);

  // 이미지 클릭 호출
  const handleImageClick = (base64: string) => {
    dispatch(setImageUrl(base64));
    setIsOpenImageEdit(false);
    setIsOpenBasicPage(false);
  };

  return (
    <>
      <article className='profile-select'>
        {BASIC_PROFILE_LIST.map((item, index) => {
          return (
            <button
              className={classNames('profile-selectItem', { on: index === mouseOverIndex })}
              onClick={() => {
                if (isSelect) return;
                setIsSelect(true);
                imageUrlToBase64('/resources/images/basicProfile/' + item, handleImageClick);
              }}
              key={index}
              onMouseOver={() => {
                setMouseOverIndex(index);
              }}
              onMouseOut={() => {
                setMouseOverIndex(-1);
              }}
            >
              <img src={'/resources/images/basicProfile/' + item} alt='기본이미지' />
            </button>
          );
        })}
      </article>
    </>
  );
};

export default BasicProfileImage;
