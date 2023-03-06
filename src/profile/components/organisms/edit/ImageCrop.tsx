import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { RootState } from 'src/store';

interface Props {
  // 이미지 크롭 페이지 열림,닫힘 상태 변경
  setIsOpenCropPage: Function;
  // 이미지 편집 레이어 열림,닫힘 상태 변경
  setIsOpenImageEdit: Function;
}

const ImageCrop = ({ setIsOpenCropPage, setIsOpenImageEdit }: Props) => {
  const dispatch = useDispatch();

  // 프로필 이미지 상태
  const imageUrl = useSelector((state: RootState) => state.profile.cropImage);
  // 프로필 이미지 크롭 저장 여부
  const isCropSave = useSelector((state: RootState) => state.profile.isCropSave);

  // 크롭 상태
  const [cropper, setCropper] = useState<any>();

  return (
    <>
      <article className='profile-regist profile-regist-center'>
        {/* 이미지 크롭 영역 */}
        <Cropper
          aspectRatio={3 / 3}
          style={{ height: 500, width: '100%' }}
          zoomOnWheel={false}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview='.img-preview'
          src={imageUrl}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          onInitialized={instance => {
            setCropper(instance);
          }}
          guides={true}
        />
      </article>
    </>
  );
};

export default ImageCrop;
