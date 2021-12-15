import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj } from '@storybook/react';
import DefaultLayout from './DefaultLayout';
import { metaTagList } from '../constants/metaTag';

type Story = ComponentStoryObj<typeof DefaultLayout>;

export default {
  component: DefaultLayout,
};

export const Default: Story = {
  args: { metaTag: metaTagList().top, children: <p>ここから下がコンテンツ</p> },
};
