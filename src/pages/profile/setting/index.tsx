import React from 'react';

import PageLayout from 'src/common/components/PageLayout';

import Setting from 'src/profile/components/templates/setting';

const Index = () => {
  return (
    <>
      <PageLayout headerTitle={'알림 설정'}>
        <Setting />
      </PageLayout>
    </>
  );
};

export default Index;
