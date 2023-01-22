import React from 'react';

import PageLayout from 'src/common/components/PageLayout';
import Profile from 'src/profile/components/templates';
import { HEADER_TYPE } from 'src/common/const/header';

const Index = () => {
  return (
    <>
      <PageLayout headerType={HEADER_TYPE.PROFILE} headerTitle={'프로필'}>
        <Profile />
      </PageLayout>
    </>
  );
};

export default Index;
