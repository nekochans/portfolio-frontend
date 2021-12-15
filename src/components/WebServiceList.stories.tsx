import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj } from '@storybook/react';
import DefaultLayout from '../layouts/DefaultLayout';
import WebServiceList, { Props } from './WebServiceList';
import { metaTagList } from '../constants/metaTag';

const props = {
  webServices: [
    {
      id: 1,
      name: '(1) LGTMeow',
      serviceUrl: 'https://lgtmeow.com',
      ogpUrl: 'https://lgtmeow.com/ogp.webp',
      description: '(1) LGTM image share service for cat lovers.',
    },
    {
      id: 2,
      name: '(2) LGTMeow',
      serviceUrl: 'https://lgtmeow.com',
      ogpUrl: 'https://lgtmeow.com/ogp.webp',
      description: '(2) LGTM image share service for cat lovers.',
    },
    {
      id: 3,
      name: '(3) LGTMeow',
      serviceUrl: 'https://lgtmeow.com',
      ogpUrl: 'https://lgtmeow.com/ogp.webp',
      description: '(3) LGTM image share service for cat lovers.',
    },
    {
      id: 4,
      name: '(4) LGTMeow',
      serviceUrl: 'https://lgtmeow.com',
      ogpUrl: 'https://lgtmeow.com/ogp.webp',
      description: '(4) LGTM image share service for cat lovers.',
    },
  ],
};

const WebServiceListWithDefaultLayout: React.FC<Props> = ({ webServices }) => (
  <DefaultLayout metaTag={metaTagList().top}>
    <WebServiceList webServices={webServices} />
  </DefaultLayout>
);

type Story = ComponentStoryObj<typeof WebServiceListWithDefaultLayout>;

export default {
  component: WebServiceListWithDefaultLayout,
};

export const Default: Story = {
  args: { webServices: props.webServices },
};
