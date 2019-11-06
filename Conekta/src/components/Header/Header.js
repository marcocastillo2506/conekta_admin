import React from 'react';

import ToogleButton from '../Sidebar/ToogleButton'
import './Header.css'

const header = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
        <div>
            <ToogleButton />
        </div>
        <div className="toolbar_logo"><a href ="/"> The Logo</a></div>
        <div className="space" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default header;
