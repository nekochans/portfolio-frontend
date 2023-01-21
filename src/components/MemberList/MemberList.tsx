import type { FC } from 'react';

import { Member } from './Member';

// TODO 定義が重複しているのでどこかで統一する
export type Props = {
  members: Array<{
    id: number;
    cvUrl: string;
    githubPicture: string;
    githubUserName: string;
  }>;
};

export const MemberList: FC<Props> = ({ members }) => (
  <section className="items">
    <div className="w-container">
      <h1 className="heading-decoration">Members</h1>
      <p>Organization members</p>
      <div className="items-container">
        {members.map((member) => (
          <Member
            key={member.id}
            cvUrl={member.cvUrl}
            githubPicture={member.githubPicture}
            githubUserName={member.githubUserName}
          />
        ))}
      </div>
    </div>
  </section>
);