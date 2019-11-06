import React from 'react';

import './sideBar.css'
const sideBar = props => (
    <nav className="sidebar">
      <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
      </ul>
    </nav>
);

export default sideBar;
