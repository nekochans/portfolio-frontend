import type { FC } from 'react';
import Image from 'next/image';

// TODO 定義が重複しているのでどこかで統一する
type Props = {
  cvUrl: string;
  githubPicture: string;
  githubUserName: string;
};

export const Member: FC<Props> = ({ cvUrl, githubPicture, githubUserName }) => (
  <article className="item">
    <a href={cvUrl} target="_blank" rel="noopener noreferrer">
      <figure>
        <Image
          src={githubPicture}
          alt={githubUserName}
          width="1000"
          height="750"
        />
      </figure>
      <h3>{githubUserName}</h3>
    </a>
  </article>
);
