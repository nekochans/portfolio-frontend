import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container w-container">
      <div className="footer-site">
        <h1>nekochans</h1>
      </div>

      <ul className="footer-sns">
        <li>
          <a
            href="https://github.com/nekochans"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="fab fa-github" />
          </a>
        </li>
      </ul>
      <div className="footer-copy">Copyright (c) nekochans.</div>
    </div>
  </footer>
);

export default Footer;
