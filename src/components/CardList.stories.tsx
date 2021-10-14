import React from 'react';
import CardList from './CardList';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'src/components/CardList.tsx',
  component: CardList,
  includeStories: ['showCardListWithProps'],
};

const props = {
  items: [
    {
      id: 1,
      title: 'cv',
      url: 'https://github.com/keitakn/cv',
      description: 'My resume and work resume',
    },
    {
      id: 2,
      title: 'my-terraform',
      url: 'https://github.com/keitakn/my-terraform',
      description: '個人の検証用で使うTerraform',
    },
    {
      id: 3,
      title: 'aws-rekognition-sandbox',
      url: 'https://github.com/keitakn/aws-rekognition-sandbox',
      description:
        'Amazon Rekognitionで出来る事を調査する為の検証用プロジェクト',
    },
    {
      id: 4,
      title: 'portfolio-backend',
      url: 'https://github.com/nekochans/portfolio-backend',
      description:
        'GitHub Organization 「nekochans」の説明用Webサイトのバックエンド',
    },
  ],
};

export const showCardListWithProps = (): JSX.Element => (
  <CardList items={props.items} />
);
