import React from 'react';

import type { GetStaticProps, NextPage } from 'next';
import MemberList from '../components/MemberList';
import WebServiceList from '../components/WebServiceList';
import { metaTagList } from '../constants/metaTag';
import DefaultLayout from '../layouts/DefaultLayout';

// TODO 定義が重複しているのでどこかで統一する
type Props = {
  members: Array<{
    id: number;
    cvUrl: string;
    githubPicture: string;
    githubUserName: string;
  }>;
  webServices: Array<{
    id: number;
    name: string;
    serviceUrl: string;
    ogpUrl: string;
    description: string;
  }>;
};

const IndexPage: NextPage<Props> = ({ members, webServices }) => (
  <DefaultLayout metaTag={metaTagList().top}>
    <MemberList members={members} />
    <WebServiceList webServices={webServices} />
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

  const webServices = [
    {
      id: 1,
      name: 'Mindexer',
      serviceUrl: 'https://www.mindexer.net',
      ogpUrl: 'https://www.mindexer.net/assets/ogp.png',
      description: 'This service makes Qiita stock convenient.',
    },
    {
      id: 2,
      name: 'LGTMeow',
      serviceUrl: 'https://lgtmeow.com',
      ogpUrl: 'https://lgtmeow.com/ogp.webp',
      description: 'LGTM image share service for cat lovers.',
    },
  ];

  return { props: { members, webServices } };
};

export default IndexPage;
