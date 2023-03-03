import React from 'react';
import { useDispatch } from 'react-redux';

export const ImageCropSaveButton = () => {
  const dispatch = useDispatch();

  // 크롭 이미지 저장
  const saveImageCrop = () => {};

  return (
    <>
      <button onClick={saveImageCrop}>저장</button>
    </>
  );
};

export default ImageCropSaveButton;
