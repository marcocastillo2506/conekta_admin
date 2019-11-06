import React, { Component } from 'react';

import Header from './Header/Header.js';
import SideBar from './Sidebar/SideBar.js';

class App extends Component {
  render(){
    return(
    <div style={{height: '100%'}}>
      <Header />
      <SideBar />
      <main style={{marginTop: '64px'}}>
      <h1>Hello my friends!</h1>
      </main>
    </div>
    )
  }
}

export default App;
