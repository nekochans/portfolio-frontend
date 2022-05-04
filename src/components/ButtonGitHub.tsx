import React from 'react';
import styled from 'styled-components';

type Props = {
  url: string;
};

const StyledComponent = styled.a`
  box-sizing: border-box;
  display: block;
  width: 260px;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 6px #00000052;
  background-color: black;
  border-radius: 4px;
`;

const ButtonGitHub: React.FC<Props> = ({ url }) => (
  <StyledComponent href={url} target="_blank" rel="noopener noreferrer">
    Go To GitHub
  </StyledComponent>
);

export default ButtonGitHub;
