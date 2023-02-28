import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  setIsOpenCropPage: Function;
  setIsOpenImageEdit: Function;
}

const ImageCrop = ({ setIsOpenCropPage, setIsOpenImageEdit }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <article></article>
    </>
  );
};

export default ImageCrop;
