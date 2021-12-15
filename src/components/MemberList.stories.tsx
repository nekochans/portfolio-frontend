import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj } from '@storybook/react';
import DefaultLayout from '../layouts/DefaultLayout';
import MemberList, { Props } from './MemberList';
import { metaTagList } from '../constants/metaTag';

const props = {
  members: [
    {
      id: 1,
      cvUrl: 'https://github.com/nekochans/portfolio-frontend',
      githubPicture: 'https://avatars.githubusercontent.com/u/42195274',
      githubUserName: 'nekochans1',
    },
    {
      id: 2,
      cvUrl: 'https://github.com/nekochans/portfolio-backend',
      githubPicture: 'https://avatars.githubusercontent.com/u/42195274',
      githubUserName: 'nekochans2',
    },
    {
      id: 3,
      cvUrl: 'https://github.com/nekochans/lgtm-cat-frontend',
      githubPicture: 'https://avatars.githubusercontent.com/u/42195274',
      githubUserName: 'nekochans3',
    },
  ],
};

const MemberListWithDefaultLayout: React.FC<Props> = ({ members }) => (
  <DefaultLayout metaTag={metaTagList().top}>
    <MemberList members={members} />
  </DefaultLayout>
);

type Story = ComponentStoryObj<typeof MemberListWithDefaultLayout>;

export default {
  component: MemberListWithDefaultLayout,
};

export const Default: Story = {
  args: { members: props.members },
};
