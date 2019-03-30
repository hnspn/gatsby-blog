import React from 'react';
import { Link } from 'gatsby';

export const Nav = () => (
  <div>
    Navigation
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
  </div>
);
