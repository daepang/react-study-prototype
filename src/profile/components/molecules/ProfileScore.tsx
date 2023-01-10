import React from 'react';

import ScoreItem from 'src/profile/components/atoms/ScoreItem';

const ProfileScore = () => {
  return (
    <div className='profileInfo-score'>
      <ScoreItem cnt={10} text={'구독자'} />
      <ScoreItem cnt={15} text={'좋아요'} />
      <ScoreItem cnt={25} text={'활동점수'} />
    </div>
  );
};

export default ProfileScore;
