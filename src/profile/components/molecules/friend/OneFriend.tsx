import React from 'react';
import classNames from 'classnames';

import ProfileImage from 'src/profile/components/molecules/ProfileImage';

interface Props {
  // 프로필 이미지 URL
  imageUrl: string;
  // 친구 이름
  friendName: string;
  // 메시지 모달 이벤트
  sendMessage?: Function;
}

const OneFriend = ({ imageUrl, friendName, sendMessage }: Props) => {
  return (
    <>
      <div className={classNames('friendCard friendCard-list')}>
        {/* 친구 프로필 이미지 영역 */}
        <ProfileImage imageUrl={imageUrl} />

        {/* 친구 이름 영역 */}
        <span className={classNames('friendCard-info')}>
          <span className={classNames('friendCard-friendName')}>{friendName}</span>
        </span>

        {/* 메세지 */}
        <span className={'friendCard-side'}>
          <button className={'friendCard-btn friendCard-btn-message'} onClick={sendMessage && (() => sendMessage())}>
            메세지
          </button>
        </span>
      </div>
    </>
  );
};

export default OneFriend;
