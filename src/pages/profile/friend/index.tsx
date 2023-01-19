import React, { useEffect, useState } from 'react';

import PageLayout from 'src/common/components/PageLayout';
import { HEADER_TYPE } from 'src/common/const/header';

import FriendList from 'src/profile/components/templates/friend/FriendList';

const Index = () => {
  const [isFriendAddOpen, setIsFriendAddOpen] = useState<boolean>(false);

  return (
    <>
      <PageLayout headerType={HEADER_TYPE.FRIEND} headerUtilFunc={() => setIsFriendAddOpen(true)}>
        <FriendList isFriendAddOpen={isFriendAddOpen} setIsFriendAddOpen={setIsFriendAddOpen} />
      </PageLayout>
    </>
  );
};

export default Index;
