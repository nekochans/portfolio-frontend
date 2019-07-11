import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderImage from './HeaderImage';

storiesOf('HeaderImage', module).add('show HeaderImage', () => {
  return <HeaderImage />;
});
