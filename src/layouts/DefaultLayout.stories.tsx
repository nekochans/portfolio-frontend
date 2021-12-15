import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { metaTagList } from '../constants/metaTag';

import DefaultLayout from './DefaultLayout';

import type { ComponentStoryObj } from '@storybook/react';

type Story = ComponentStoryObj<typeof DefaultLayout>;

export default {
  component: DefaultLayout,
};

export const Default: Story = {
  args: { metaTag: metaTagList().top, children: <p>ここから下がコンテンツ</p> },
};
