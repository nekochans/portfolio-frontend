import React from 'react';
import styled from 'styled-components';

import mixins from '../styles/mixins';

import ButtonGitHub from './ButtonGitHub';
import heroImage from './images/hero.webp';

const StyledSection = styled.section`
  height: 650px;
  background-image: url(${heroImage.src});
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

const StyledTitle = styled.h1`
  min-height: 0;
  margin-bottom: 42px;
  font-family: Montserrat, sans-serif;
  font-size: clamp(48px, 5vw, 68px);
  font-weight: 400;
  line-height: 1.3;
  color: #fff;
  text-align: center;
`;

const StyledSubTitle = styled.p`
  margin-bottom: 72px;
  color: white;
`;

const Hero: React.FC = () => (
  <StyledSection>
    <StyledDiv>
      <StyledTitle>nekochans</StyledTitle>
      <StyledSubTitle>
        We are a Freelance Web Engineer Organization.
      </StyledSubTitle>
      <ButtonGitHub url="https://github.com/nekochans" />
    </StyledDiv>
  </StyledSection>
);

export default Hero;
