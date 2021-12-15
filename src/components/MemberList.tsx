import React from 'react';

import Member from './Member';

// TODO 定義が重複しているのでどこかで統一する
export type Props = {
  members: {
    id: number;
    cvUrl: string;
    githubPicture: string;
    githubUserName: string;
  }[];
};

const MemberList: React.VFC<Props> = ({ members }) => (
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

export default MemberList;
