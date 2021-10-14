import React from 'react';
import Footer from './Footer';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'src/components/Footer.tsx',
  component: Footer,
  includeStories: ['showFooter'],
};

export const showFooter = (): JSX.Element => <Footer />;
