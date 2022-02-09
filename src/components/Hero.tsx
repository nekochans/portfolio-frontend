import React from 'react';
import styled from 'styled-components';

import mixins from '../styles/mixins';

import ButtonGitHub from './ButtonGitHub';
import hero from './hero.webp';

const StyledSection = styled.section`
  height: 650px;
  background-image: url(${hero.src});
  background-position: center;
  background-size: cover;
`;

const StyledDiv = styled.div`
  ${mixins.wContainer};
  display: grid;
  align-content: center;
  justify-items: center;
  height: 100%;
`;

// TODO h1 と pタグが崩れているので確認

const Hero: React.VFC = () => (
  <StyledSection>
    <StyledDiv>
      <h1>nekochans</h1>
      <p>We are a Freelance Web Engineer Organization.</p>
      <ButtonGitHub url="https://github.com/nekochans" />
    </StyledDiv>
  </StyledSection>
);

export default Hero;
