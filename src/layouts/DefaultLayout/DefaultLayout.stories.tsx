// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj } from '@storybook/react';
import { metaTagList } from '../../constants';

import { DefaultLayout } from './DefaultLayout';

type Story = ComponentStoryObj<typeof DefaultLayout>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: DefaultLayout,
};

export const Default: Story = {
  args: { metaTag: metaTagList().top, children: <p>ここから下がコンテンツ</p> },
};
