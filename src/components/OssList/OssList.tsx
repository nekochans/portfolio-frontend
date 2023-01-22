import type { FC } from 'react';
import Oss from './Oss';
import type { OssAttribute } from './OssAttribute';

export type OssListProps = {
  ossList: Array<OssAttribute & { id: number }>;
};

export const OssList: FC<OssListProps> = ({ ossList }) => (
  <section className="oss-list">
    <div className="w-container">
      <h1 className="heading-decoration">OSS</h1>
      <p>These are the OSS developed by the organization</p>
      <div className="oss-list-container">
        {ossList.map((oss) => (
          <Oss
            key={oss.id}
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
