import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 파일 타입
export interface fileType {
  fileName: string;
  image: string;
}

interface Props {
  setIsOpenImageEdit: Function;
  setIsOpenCropPage: Function;
  setIsOpenBasicPage: Function;
  isRemoveImage: boolean;
}

const ImageEditLayer = ({ setIsOpenImageEdit, setIsOpenCropPage, setIsOpenBasicPage, isRemoveImage }: Props) => {
  const dispatch = useDispatch();

  // 첨부 파일 ref
  const inputFileRef = useRef<HTMLInputElement>(null);

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
          <button className={'btnOutlined'}>기본 이미지에서 선택</button>
        </li>

        {/* 이미지 제거 버튼 */}
        {isRemoveImage && (
          <li>
            <button className={'btnOutlined'}>이미지 제거</button>
          </li>
        )}
      </ul>
    </>
  );
};

export default ImageEditLayer;
