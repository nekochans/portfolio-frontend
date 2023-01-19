import React from 'react';

import ButtonGitHub from './ButtonGitHub';

const Hero: React.VFC = () => (
  <section className="hero">
    <div className="hero-container w-container">
      <h1>nekochans</h1>
      <p>We are a Freelance Web Engineer Organization.</p>
      <ButtonGitHub url="https://github.com/nekochans" />
    </div>
  </section>
);

export default Hero;
