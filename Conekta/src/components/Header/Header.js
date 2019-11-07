import React from 'react';

import ToogleButton from '../Sidebar/ToogleButton'
import './Header.css'

const header = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
        <div>
            <ToogleButton click={props.sideBarClick} />
        </div>
        <div className="toolbar_logo"><a href ="/"> The Logo</a></div>
        <div className="space" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/"><img src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" alt="Avatar" className="profile" /></a></li>
                <li>
                  <div class="dropdown">
                    <button class="dropbtn">Marco Castillo</button>
                    <div class="dropdown-content">
                    <a href="/">Perfil</a>
                    <a href="/">Cerrar sesión</a>
                    </div>
                  </div>
                </li>
            </ul>
        </div>
    </nav>
  </header>
);

export default header;
