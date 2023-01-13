import React from 'react';

interface Props {
  title?: string;
  disabled?: boolean;
  btnClasses?: string;
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
