import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { fileToBase64 } from 'src/common/util/base64';

import { setImageUrl, setCropImage } from 'src/profile/features/slice';

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

  // 이미지 파일 선택
  const selectFile = () => {
    inputFileRef.current?.click();
  };

  // 이미지 선택 후 이미지 크롭 화면으로 이동
  const changeFile = async () => {
    if (inputFileRef.current?.files && inputFileRef.current?.files.length > 0) {
      const fileList = Array.from(inputFileRef.current?.files);
      const ALLOW_FILENAME_EXTENSIONS = ['jpg', 'jpeg', 'gif', 'png']; // 허용 확장자
      const MAX_FILE_SIZE: number = 10 * 1024 * 1024; // 10MB

      const item: any = fileList[0];
      const fileSize: number = item.size;
      const extension = item.name.split('.').slice(-1)[0].toLowerCase();
      const base64 = await fileToBase64(item);

      if (!ALLOW_FILENAME_EXTENSIONS.includes(extension)) {
        window.alert('JPG,JPEG,GIF,PNG 형식의 파일만 등록이 가능합니다.');
        return;
      }

      if (fileSize > MAX_FILE_SIZE) {
        window.alert('10mb 이하의 이미지만 등록이 가능합니다.');
        return;
      }

      dispatch(setCropImage(base64 as string));

      setIsOpenImageEdit(false);
      setIsOpenCropPage(true);
    }
  };

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
          <label className={'btnContained'} onClick={selectFile}>
            촬영/앨범에서 선택
          </label>
          <input
            type='file'
            className={'blind'}
            accept='image/gif,image/jpeg,image/jpg,image/png'
            style={{ display: 'none' }}
            ref={inputFileRef}
            onChange={changeFile}
          />
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
