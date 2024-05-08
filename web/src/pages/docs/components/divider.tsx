import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  DividerColor,
  DividerDashed,
  DividerSize,
  DividerY,
} from '@/components/pages/docs/exmaples/divider';

export interface DividerProps {
  y?: number;
  size?: number;
  color?: string;
  dashed?: boolean;
  strokeDasharray?: number | string;
}

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Divider"
        description="Divider is a line that separates sections within a page."
        examples={[
          { title: 'Y', component: DividerY },
          { title: 'Size', component: DividerSize },
          { title: 'Color', component: DividerColor },
          { title: 'Dashed', component: DividerDashed },
        ]}
        apiData={[
          {
            property: 'y',
            type: ['number'],
            description: 'Margin value in y-axis direction.',
            defaultValue: 0,
          },
          {
            property: 'size',
            type: ['number'],
            description: 'Thickness of line.',
            defaultValue: 1,
          },
          {
            property: 'color',
            type: ['string'],
            description: 'Color of line.',
            defaultValue: 'black',
          },
          {
            property: 'dashed',
            type: ['boolean'],
            description: 'Dashed style line.',
            defaultValue: false,
          },
          {
            property: 'strokeDasharray',
            type: ['number', 'string'],
            description: 'Dashed spacing of line.',
            defaultValue: 2,
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;