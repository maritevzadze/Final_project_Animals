import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/gallery">Animal Gallery</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
