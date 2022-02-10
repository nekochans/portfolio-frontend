import React, { ReactNode } from 'react';
import styled from 'styled-components';

import mixins from '../styles/mixins';

type Props = {
  topLink: ReactNode;
};

const StyledHeader = styled.header`
  height: 112px;
  background-color: #fff;
`;

const StyledDiv = styled.div`
  ${mixins.wContainer};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Header: React.VFC<Props> = ({ topLink }) => (
  <StyledHeader>
    <StyledDiv>
      <div>{topLink}</div>
    </StyledDiv>
  </StyledHeader>
);

export default Header;
