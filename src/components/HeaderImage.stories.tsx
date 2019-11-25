import React from 'react';
import HeaderImage from './HeaderImage';

export default {
  title: 'HeaderImage',
};

const headerImageTestProps = { appUrl: 'http://localhost:3000' };

export const showHeaderImageWithProps = () => (
  <HeaderImage {...headerImageTestProps} />
);
