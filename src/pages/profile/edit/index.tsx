import React from 'react';

import PageLayout from 'src/common/components/PageLayout';

import ProfileEdit from 'src/profile/components/templates/edit/ProfileEdit';
import ProfileSaveButton from 'src/profile/components/molecules/edit/ProfileSaveButton';

const Index = () => {
  return (
    <PageLayout headerTitle={'프로필 편집'} bottomButton={<ProfileSaveButton />}>
      <ProfileEdit />
    </PageLayout>
  );
};

export default Index;
