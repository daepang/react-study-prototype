import React from 'react';

import PageLayout from 'src/common/components/PageLayout';

import ProfileEdit from 'src/profile/components/templates/edit/ProfileEdit';

const Index = () => {
  return (
    <PageLayout headerTitle={'프로필 편집'}>
      <ProfileEdit />
    </PageLayout>
  );
};

export default Index;
