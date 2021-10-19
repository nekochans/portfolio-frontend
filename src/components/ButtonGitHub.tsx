import React from 'react';

type Props = {
  url: string;
};

const ButtonGitHub: React.VFC<Props> = ({ url }) => (
  <a href={url} className="btn" target="_blank" rel="noopener noreferrer">
    Go To GitHub
  </a>
);

export default ButtonGitHub;
