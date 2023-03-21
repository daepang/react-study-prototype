import React from 'react';

interface Props {
  // 버튼명
  title?: string;
  // 버튼 활성 상태
  disabled?: boolean;
  // 버튼 클래스
  btnClasses?: string;
  // 클릭 이벤트
  onClick?: Function;
}

const TextButton = ({ title, disabled = false, btnClasses, onClick }: Props) => {
  return (
    <button className={btnClasses} disabled={disabled} onClick={onClick && (() => onClick())}>
      {title || '확인'}
    </button>
  );
};

export default TextButton;
