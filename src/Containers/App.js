import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'

class App extends React.Comonent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
