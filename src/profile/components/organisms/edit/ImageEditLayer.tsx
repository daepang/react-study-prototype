import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setImageUrl } from 'src/profile/features/slice';

// 파일 타입
export interface fileType {
  fileName: string;
  image: string;
}

interface Props {
  // 이미지 편집 레이어 열림,닫힘 상태 변경
  setIsOpenImageEdit: Function;
  // 이미지 크롭 페이지 열림,닫힘 상태 변경
  setIsOpenCropPage: Function;
  // 기본 이미지 페이지 열림,닫힘 상태 변경
  setIsOpenBasicPage: Function;
  // 이미지 제거 여부 상태
  isRemoveImage: boolean;
}

const ImageEditLayer = ({ setIsOpenImageEdit, setIsOpenCropPage, setIsOpenBasicPage, isRemoveImage }: Props) => {
  const dispatch = useDispatch();

  // 첨부 파일 ref
  const inputFileRef = useRef<HTMLInputElement>(null);

  // 기본 이미지 선택
  const basicImage = () => {
    setIsOpenImageEdit(false);
    setIsOpenBasicPage(true);
  };

  // 이미지 제거 후 레이어 닫기
  const removeImage = () => {
    dispatch(setImageUrl(''));
    setIsOpenImageEdit(false);
  };

  return (
    <>
      <ul className={'selectOptions'}>
        {/* 앨범에서 선택 버튼 */}
        <li>
          <label className={'btnContained'}>촬영/앨범에서 선택</label>
          <input type='file' className={'blind'} style={{ display: 'none' }} ref={inputFileRef} />
        </li>

        {/* 기본 이미지에서 선택 버튼 */}
        <li>
          <button className={'btnOutlined'} onClick={basicImage}>
            기본 이미지에서 선택
          </button>
        </li>

        {/* 이미지 제거 버튼 */}
        {isRemoveImage && (
          <li>
            <button className={'btnOutlined'} onClick={removeImage}>
              이미지 제거
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default ImageEditLayer;
