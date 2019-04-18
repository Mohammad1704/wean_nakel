import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import './custom.scss';
// import Button from '../src/components/button';
import Button from 'react-bootstrap/Button';
class App extends Component {
  render() {
    return (
      <body className="background">
        
        <div className="main-container">
        <div>
        <img className="logo" src={logo} alt="Logo" />
        </div>
          <Button className="btn" > <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> أقتراح</Button>
          
       </div>
      </body>
    );
  }
}

export default App;
