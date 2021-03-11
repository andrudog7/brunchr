import logo from '../logo.svg';
import '../App.css';
import React, {Component} from 'react'
import {Header, Image} from 'semantic-ui-react'
import NavBar from './NavBar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header as='h2'>
          <Image circular src={logo} className="App-logo" alt="logo" />Brunchr
        </Header> 
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
