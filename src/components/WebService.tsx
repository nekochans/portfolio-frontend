import React from 'react';
import Image from 'next/image';

// TODO 定義が重複しているのでどこかで統一する
type Props = {
  id: number;
  name: string;
  serviceUrl: string;
  ogpUrl: string;
  description: string;
};

const WebService: React.FC<Props> = ({
  name,
  serviceUrl,
  ogpUrl,
  description,
}) => (
  <article className="item">
    <a href={serviceUrl} target="_blank" rel="noopener noreferrer">
      <figure>
        <Image src={ogpUrl} alt={name} width="1000" height="750" />
      </figure>
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  </article>
);

export default WebService;
