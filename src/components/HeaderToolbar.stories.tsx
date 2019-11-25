import React from 'react';
import HeaderToolbar from './HeaderToolbar';

export default {
  title: 'HeaderToolbar',
};

const props = {
  sections: [
    { displayName: 'Google', url: 'https://www.google.com' },
    { displayName: 'Qiita', url: 'https://qiita.com' },
    { displayName: 'GitHub', url: 'https://github.com' },
  ],
};

export const showHeaderToolbarWithProps = () => <HeaderToolbar {...props} />;
