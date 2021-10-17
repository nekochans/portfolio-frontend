import React from 'react';
import DefaultLayout from './DefaultLayout';
import { metaTagList } from '../constants/metaTag';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'src/layouts/DefaultLayout.tsx',
  component: DefaultLayout,
  includeStories: ['showDefaultLayoutWithProps'],
};

export const showDefaultLayoutWithProps = (): JSX.Element => (
  <DefaultLayout metaTag={metaTagList().top}>
    <p>ここから下がコンテンツ</p>
  </DefaultLayout>
);
