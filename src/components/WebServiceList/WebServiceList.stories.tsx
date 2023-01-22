import type { FC } from 'react';
import type { ComponentStoryObj } from '@storybook/react';
import { metaTagList } from '../../constants/metaTag';
import { DefaultLayout } from '../../layouts';
import { WebServiceList, type WebServiceListProps } from './WebServiceList';

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

const WebServiceListWithDefaultLayout: FC<WebServiceListProps> = ({
  webServices,
}) => (
  <DefaultLayout metaTag={metaTagList().top}>
    <WebServiceList webServices={webServices} />
  </DefaultLayout>
);

type Story = ComponentStoryObj<typeof WebServiceListWithDefaultLayout>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: WebServiceListWithDefaultLayout,
};

export const Default: Story = {
  args: { webServices: props.webServices },
};
