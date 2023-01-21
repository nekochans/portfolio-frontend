import type { FC } from 'react';
import type { ComponentStoryObj } from '@storybook/react';
import { metaTagList } from '../../constants/metaTag';
import { DefaultLayout } from '../../layouts';
import { MemberList, type Props } from './MemberList';

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

// TODO https://github.com/RyanClementsHax/storybook-addon-next/issues/72 が解決するまではこのStoryは閲覧出来ないので別途対策を考える
const MemberListWithDefaultLayout: FC<Props> = ({ members }) => (
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
