import type { FC, ReactNode } from 'react';

type Props = {
  topLink: ReactNode;
};

export const Header: FC<Props> = ({ topLink }) => (
  <header className="header">
    <div className="header-container w-container">
      <div>{topLink}</div>
    </div>
  </header>
);
