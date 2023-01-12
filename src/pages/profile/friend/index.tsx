import React, { useEffect, useState } from 'react';

import PageLayout from 'src/common/components/PageLayout';

import FriendList from 'src/profile/components/templates/friend/FriendList';

const Index = () => {
  return (
    <>
      <PageLayout headerTitle={'친구 목록'}>
        <FriendList />
      </PageLayout>
    </>
  );
};

export default Index;
