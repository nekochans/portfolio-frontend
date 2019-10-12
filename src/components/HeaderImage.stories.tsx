import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderImage from './HeaderImage';
import HeaderImageTestProps from './__tests__/HeaderImageTestProps';

storiesOf('HeaderImage', module).add('show HeaderImage', () => {
  return <HeaderImage {...HeaderImageTestProps} />;
});
