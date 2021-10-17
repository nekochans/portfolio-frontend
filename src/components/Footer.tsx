import React from 'react';

const Footer: React.VFC = () => (
  <footer className="footer">
    <div className="footer-container w-container">
      <div className="footer-site">
        <h1>nekochans</h1>
      </div>

      <ul className="footer-sns">
        <li>
          <a href="https://github.com/nekochans">
            <i className="fab fa-github" />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
      </ul>
      <div className="footer-copy">Copyright (c) nekochans.</div>
    </div>
  </footer>
);

export default Footer;
