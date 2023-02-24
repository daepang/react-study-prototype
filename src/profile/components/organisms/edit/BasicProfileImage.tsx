import React, { useState } from 'react';

interface Props {
  setIsOpenBasicPage: Function;
  setIsOpenImageEdit: Function;
}

const BasicProfileImage = ({ setIsOpenBasicPage, setIsOpenImageEdit }: Props) => {
  // 이미지 선택 여부
  const [isSelect, setIsSelect] = useState<boolean>(false);

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
