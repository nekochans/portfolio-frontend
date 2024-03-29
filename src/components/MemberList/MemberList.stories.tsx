import type { FC } from 'react';
import type { ComponentStoryObj } from '@storybook/react';
import { metaTagList } from '../../constants';
import { DefaultLayout } from '../../layouts';
import { MemberList, type MemberListProps } from './MemberList';

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

const MemberListWithDefaultLayout: FC<MemberListProps> = ({ members }) => (
  <DefaultLayout metaTag={metaTagList().top}>
    <MemberList members={members} />
  </DefaultLayout>
);

type Story = ComponentStoryObj<typeof MemberListWithDefaultLayout>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: MemberListWithDefaultLayout,
};

export const Default: Story = {
  args: { members: props.members },
};
