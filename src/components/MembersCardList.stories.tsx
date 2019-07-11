import React from 'react';
import { storiesOf } from '@storybook/react';
import MembersCardList from './MembersCardList';

storiesOf('MembersCardList', module).add('show MembersCardList', () => {
  const props = {
    members: [
      {
        githubUserName: 'keitakn',
        githubPicture:
          'https://avatars1.githubusercontent.com/u/11032365?s=460&v=4',
        cvUrl: 'https://github.com/keitakn/cv',
      },
      {
        githubUserName: 'kobayashi-m42',
        githubPicture:
          'https://avatars0.githubusercontent.com/u/32682645?s=460&v=4',
        cvUrl: 'https://github.com/kobayashi-m42/cv',
      },
    ],
  };

  return <MembersCardList {...props} />;
});
