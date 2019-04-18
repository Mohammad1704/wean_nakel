import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import './custom.scss';
// import Button from '../src/components/button';
import Button from 'react-bootstrap/Button';
class App extends Component {
  render() {
    return (
      <div className="background">
        
        <div className="main-container">
        <div>
        <img src={logo} alt="Logo" />
        </div>
          <Button variant="primary">أقتراح</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
       </div>
      </div>
    );
  }
}

export default App;
