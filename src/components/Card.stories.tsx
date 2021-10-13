import React from 'react';
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'src/components/Card.tsx',
  component: Card,
  includeStories: ['showCardWithProps'],
};

const props = {
  title: 'portfolio-frontend',
  url: 'https://github.com/nekochans/portfolio-frontend',
  description: '説明',
};

export const showCardWithProps = (): JSX.Element => (
  <Card title={props.title} url={props.url} description={props.description} />
);
