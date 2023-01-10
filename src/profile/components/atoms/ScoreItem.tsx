import React from 'react';

interface Props {
  // 카운트
  cnt: number;
  // 텍스트
  text: string;
}

const ScoreItem = ({ cnt, text }: Props) => {
  return (
    <a className={'profileInfo-scoreItem'}>
      <span className={'profileInfo-scoreNo'}>{cnt}</span>
      <span className={'profileInfo-scoreText'}>{text}</span>
    </a>
  );
};

export default ScoreItem;
