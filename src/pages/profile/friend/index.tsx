import React, { useState } from 'react';

import PageLayout from 'src/common/components/PageLayout';
import { HEADER_TYPE } from 'src/common/const/header';

import FriendList from 'src/profile/components/templates/friend/FriendList';

const Index = () => {
  // 친구 추가 창 열림,닫힘 상태
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
