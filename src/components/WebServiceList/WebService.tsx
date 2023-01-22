import type { FC } from 'react';
import Image from 'next/image';
import type { WebServiceAttribute } from './WebServiceAttribute';

type Props = WebServiceAttribute;

export const WebService: FC<Props> = ({
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
