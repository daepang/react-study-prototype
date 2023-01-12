import React from 'react';
import classNames from 'classnames';

import ProfileImage from 'src/profile/components/molecules/ProfileImage';

// Props
interface Props {
  imageUrl: string;
  friendName: string;
}

const OneFriend = ({ imageUrl, friendName }: Props) => {
  return (
    <>
      <div className={classNames('friendCard friendCard-list')}>
        {/* 친구 프로필 이미지 영역 */}
        <ProfileImage imageUrl={imageUrl} />

        {/* 친구 이름 영역 */}
        <span className={classNames('friendCard-info')}>
          <span className={classNames('friendCard-friendName')}>{friendName}</span>
        </span>
      </div>
    </>
  );
};

export default OneFriend;