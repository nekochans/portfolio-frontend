import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import styles from '../../styles/Home.module.css';
import DefaultLayout from '../layouts/DefaultLayout';
import { metaTagList } from '../constants/metaTag';

type Props = {
  nowDatetime: string;
  filename: string;
};

const IsrPage: NextPage<Props> = ({ nowDatetime, filename }) => (
  <DefaultLayout filename={filename} metaTag={metaTagList().isr}>
    <p className={styles.description}>現在日時は {nowDatetime}</p>
  </DefaultLayout>
);

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const nowDatetime = `${year}年${month}月${date}日${hour}:${min}:${sec}`;

  return {
    props: { nowDatetime, filename: 'src/pages/isr.tsx' },
    revalidate: 300,
  };
};

export default IsrPage;
