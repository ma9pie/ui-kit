import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import AvatarSize from '@/components/pages/docs/exmaples/avatar/AvatarSize';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Avatar"
        description="Used to represent user's profile, symbol image or icon."
        examples={[{ title: 'Size', component: AvatarSize }]}
        apiData={[
          {
            key: '0',
            property: 'size',
            type: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Size of Avatar',
            defaultValue: 'md',
          },
          {
            key: '1',
            property: 'src',
            type: ['string'],
            description: 'Image source',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;