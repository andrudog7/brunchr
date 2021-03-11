import logo from '../logo.svg';
import '../App.css';
import React, {Component} from 'react'
import {Header, Image} from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header as='h2'>
          <Image circular src={logo} className="App-logo" alt="logo" />Brunchr
        </Header> 
      </div>
    );
  }
}

export default App;
