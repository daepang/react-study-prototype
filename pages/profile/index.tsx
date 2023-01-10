import React, { useEffect, useState } from 'react';

import PageLayout from 'src/common/components/PageLayout';
import Profile from 'src/profile/components/templates';

const Index = () => {
  return (
    <>
      <PageLayout headerTitle={'프로필'}>
        <Profile />
      </PageLayout>
    </>
  );
};

export default Index;
