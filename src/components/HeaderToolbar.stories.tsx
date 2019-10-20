import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderImage from './HeaderToolbar';

storiesOf('HeaderToolbar', module).add('show HeaderToolbar', () => {
  const props = {
    sections: [
      { displayName: 'Google', url: 'https://www.google.com' },
      { displayName: 'Qiita', url: 'https://qiita.com' },
      { displayName: 'GitHub', url: 'https://github.com' },
    ],
  };

  return <HeaderImage {...props} />;
});
