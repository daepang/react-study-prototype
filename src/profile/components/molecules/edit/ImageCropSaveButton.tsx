import React from 'react';
import { useDispatch } from 'react-redux';

import { setIsCropSave } from 'src/profile/features/slice';

export const ImageCropSaveButton = () => {
  const dispatch = useDispatch();

  // 크롭 이미지 저장
  const saveImageCrop = () => {
    dispatch(setIsCropSave(true));
  };

  return (
    <>
      <button onClick={saveImageCrop}>저장</button>
    </>
  );
};

export default ImageCropSaveButton;
