import React, { useEffect } from 'react';
import classNames from 'classnames';

import OneFriend from 'src/profile/components/molecules/friend/OneFriend';
import { fetchFriendList } from 'src/profile/api/profile';

const FriendList = () => {
  const callContents = async () => {
    const result = await fetchFriendList();
  };

  useEffect(() => {
    callContents();
  }, []);

  return (
    <>
      <section>
        <OneFriend imageUrl={'https://placeimg.com/200/100/animals/sepia'} friendName={'Best Friend'} />
      </section>
    </>
  );
};

export default FriendList;
