import React from 'react';
import DefaultLayout from './DefaultLayout';
import { metaTagList } from '../constants/metaTag';
import styles from '../../styles/Home.module.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'src/layouts/DefaultLayout.tsx',
  component: DefaultLayout,
  includeStories: ['showDefaultLayoutWithProps'],
};

export const showDefaultLayoutWithProps = (): JSX.Element => (
  <DefaultLayout
    filename="src/layouts/DefaultLayout.tsx"
    metaTag={metaTagList().top}
  >
    <p className={styles.description}>ここから下がコンテンツ</p>
  </DefaultLayout>
);
