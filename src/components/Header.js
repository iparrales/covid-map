import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

import { useSiteMetadata } from 'hooks';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>
          <Link to="/">World Map</Link>
        </p>
        <ul>
          <li>
            <Link to="/about/">Zoom to US Map</Link>
          </li>
          <li>
            <Link to="/about3/">US Charts</Link>
          </li>
          <li>
            <Link to="/about2">Switch to Chart Data</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
