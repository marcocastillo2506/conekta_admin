import React, { Component } from 'react';

import Header from './Header/Header.js';
import SideBar from './Sidebar/SideBar.js';
import Backdrop from './Backdrop/Backdrop.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sidebarOpen:true
    }
    this.sidebarHandler =this.sidebarHandler.bind(this)
    this.backdropHandler =this.backdropHandler.bind(this)
  }
  sidebarHandler(){
    this.setState((prevState) =>{
      return {sidebarOpen : !prevState.sidebarOpen};
    })
  }

  backdropHandler(){
    this.setState({sidebarOpen: false});
  }

  render(){
    let sideBarShow;
    let backdropShow;

    if(this.state.sidebarOpen){
      backdropShow = <Backdrop click={this.backdropHandler} />;
    }
    return(
    <div style={{height: '100%'}}>
      <Header sideBarClick={this.sidebarHandler} />
      <SideBar show={this.state.sidebarOpen} />
      {backdropShow}
      <main style={{marginTop: '64px'}}>
      </main>
    </div>
    )
  }
}

export default App;
