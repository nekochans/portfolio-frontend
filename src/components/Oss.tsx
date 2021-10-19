import React from 'react';
import ButtonGitHub from './ButtonGitHub';

// TODO 定義が重複しているのでどこかで統一する
type Props = {
  id: number;
  name: string;
  url: string;
  version: string;
  description: string;
};

const Oss: React.VFC<Props> = ({ name, url, version, description }) => (
  <div className="oss">
    <h3>{name}</h3>
    <p className="desc">{description}</p>
    <p className="version">{version}</p>
    <ButtonGitHub url={url} />
  </div>
);

export default Oss;
