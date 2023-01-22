import type { FC } from 'react';

import { Member } from './Member';
import { MemberAttribute } from './MemberAttribute';

export type MemberListProps = {
  members: Array<MemberAttribute & { id: number }>;
};

export const MemberList: FC<MemberListProps> = ({ members }) => (
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
