import React from 'react';

import './sideBar.css'
const sideBar = props => {
    let sidebarClasses = 'sidebar';
    if(props.show) {
      sidebarClasses = 'sidebar open';
    }
  return (
    <nav className={sidebarClasses}>
    <div className="toolbar_logo"><a href="/"><img src="https://uniko.co/wp-content/uploads/2019/08/colaboradores-uniko-conekta.png" alt="Avatar" class="avatar" /></a></div>
      <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
      </ul>
    </nav>
  );
}
export default sideBar;
