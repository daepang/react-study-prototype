import React from 'react';
import classNames from 'classnames';

import OneFriend from 'src/profile/components/molecules/friend/OneFriend';

const FriendList = () => {
  return (
    <>
      <section>
        <OneFriend imageUrl={'https://placeimg.com/200/100/animals/sepia'} friendName={'Best Friend'} />
      </section>
    </>
  );
};

export default FriendList;
