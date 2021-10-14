import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import CardList, { CardListItem } from '../components/CardList';
import DefaultLayout from '../layouts/DefaultLayout';
import { metaTagList } from '../constants/metaTag';

type Props = {
  items: CardListItem[];
  filename: string;
};

const IndexPage: NextPage<Props> = ({ items, filename }) => (
  <DefaultLayout filename={filename} metaTag={metaTagList().top}>
    <CardList items={items} />
  </DefaultLayout>
);

export const getStaticProps: GetStaticProps = () => {
  const items = [
    {
      id: 1,
      title: 'Documentation',
      url: 'https://nextjs.org/docs',
      description: 'Find in-depth information about Next.js features and API.',
    },
    {
      id: 2,
      title: 'Learn',
      url: 'https://nextjs.org/learn',
      description: 'Learn about Next.js in an interactive course with quizzes!',
    },
    {
      id: 3,
      title: 'Examples',
      url: 'https://github.com/vercel/next.js/tree/master/examples',
      description: 'Discover and deploy boilerplate example Next.js projects.',
    },
    {
      id: 4,
      title: 'Deploy',
      url: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      description:
        'Instantly deploy your Next.js site to a public URL with Vercel.',
    },
  ];

  return { props: { items, filename: 'src/pages/index.tsx' } };
};

export default IndexPage;
