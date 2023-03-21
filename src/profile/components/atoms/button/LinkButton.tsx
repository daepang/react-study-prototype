import React from 'react';
import Link from 'next/link';

interface Props {
  // 이동할 URL
  url: string;
  // 버튼 Class
  buttonClass?: string;
  // 버튼 텍스트
  buttonText: string;
}

const LinkButton = ({ url, buttonClass, buttonText }: Props) => {
  return (
    <>
      <Link href={url}>
        <button className={buttonClass}>{buttonText}</button>
      </Link>
    </>
  );
};

export default LinkButton;
