import React from 'react';

type Props = {
  url: string;
};

const ButtonGitHub: React.VFC<Props> = ({ url }) => (
  <a href={url} className="btn">
    Go To GitHub
  </a>
);

export default ButtonGitHub;
