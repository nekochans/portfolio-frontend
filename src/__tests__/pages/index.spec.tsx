/**
 * @jest-environment jsdom
 */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import IndexPage from '../../pages';

test('IndexPage Snapshot test', () => {
  const testProps = {
    members: [
      {
        id: 1,
        cvUrl: 'https://github.com/keitakn/cv',
        githubPicture:
          'https://avatars1.githubusercontent.com/u/11032365?s=460&v=4',
        githubUserName: 'keitakn',
      },
      {
        id: 2,
        cvUrl: 'https://github.com/kobayashi-m42/cv',
        githubPicture:
          'https://avatars0.githubusercontent.com/u/32682645?s=460&v=4',
        githubUserName: 'kobayashi-m42',
      },
    ],
  };

  const { asFragment } = render(<IndexPage members={testProps.members} />);
  expect(asFragment()).toMatchSnapshot();
});