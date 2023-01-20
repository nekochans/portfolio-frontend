import React from 'react';

import Oss from './Oss';

// TODO 定義が重複しているのでどこかで統一する
export type Props = {
  ossList: Array<{
    id: number;
    name: string;
    url: string;
    version: string;
    description: string;
  }>;
};

const OssList: React.FC<Props> = ({ ossList }) => (
  <section className="oss-list">
    <div className="w-container">
      <h1 className="heading-decoration">OSS</h1>
      <p>These are the OSS developed by the organization</p>
      <div className="oss-list-container">
        {ossList.map((oss) => (
          <Oss
            key={oss.id}
            id={oss.id}
            name={oss.name}
            url={oss.url}
            version={oss.version}
            description={oss.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default OssList;
