import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  GridAutoFill,
  GridRepeatCount,
  GridTracks,
} from '@/components/pages/docs/exmaples/grid';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Grid"
        description="Grid is a layout component that arranges elements by specifying columns."
        examples={[
          { title: 'Auto fill', component: GridAutoFill },
          { title: 'RepeatCount', component: GridRepeatCount },
          { title: 'Tracks', component: GridTracks },
        ]}
        apiData={[
          {
            property: 'repeatCount',
            type: ['number', 'string'],
            description: 'Repeat count in grid-template-columns property.',
            defaultValue: 1,
          },
          {
            property: 'tracks',
            type: ['string'],
            description: 'Repeat count in grid-template-columns property.',
            defaultValue: '1fr',
          },
          {
            property: 'gap',
            type: ['number', 'string'],
            description: 'Spacing between elements.',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;