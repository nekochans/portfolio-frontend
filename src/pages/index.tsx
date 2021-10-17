import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import { metaTagList } from '../constants/metaTag';
import MemberList from '../components/MemberList';

type Props = {
  members: {
    id: number;
    cvUrl: string;
    githubPicture: string;
    githubUserName: string;
  }[];
};

const IndexPage: NextPage<Props> = ({ members }) => (
  <DefaultLayout metaTag={metaTagList().top}>
    <MemberList members={members} />
  </DefaultLayout>
);

export const getStaticProps: GetStaticProps = () => {
  const members = [
    {
      id: 1,
      cvUrl: 'https://github.com/keitakn/cv',
      githubPicture:
        'https://avatars1.githubusercontent.com/u/11032365?s=460&v=4',
      githubUserName: 'keitakn',
    },
    {
      id: 2,
      cvUrl: 'https://github.com/kobayashi-m42/cv',
      githubPicture:
        'https://avatars0.githubusercontent.com/u/32682645?s=460&v=4',
      githubUserName: 'kobayashi-m42',
    },
  ];

  return { props: { members } };
};

export default IndexPage;
