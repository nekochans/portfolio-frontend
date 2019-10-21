import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderImage from './HeaderImage';

export const headerImageTestProps = { appUrl: 'http://localhost:3000' };

/* istanbul ignore next */
storiesOf('HeaderImage', module).add('show HeaderImage', () => {
  return <HeaderImage {...headerImageTestProps} />;
});
