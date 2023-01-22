import type { FC } from 'react';

import { ButtonGitHub } from '../ButtonGitHub';
import type { OssAttribute } from './OssAttribute';

type Props = OssAttribute;

const Oss: FC<Props> = ({ name, url, version, description }) => (
  <div className="oss">
    <h3>{name}</h3>
    <p className="desc">{description}</p>
    <p className="version">{version}</p>
    <ButtonGitHub url={url} />
  </div>
);

export default Oss;
