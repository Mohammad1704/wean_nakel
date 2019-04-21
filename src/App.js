import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import './custom.scss';

import Suggestion from './components/suggestion';

// import './custom.scss';
// import Button from '../src/components/button';
// import Button from 'react-bootstrap/Button';
export default class App extends Component {
  state = {
    activePage: 'main'
  };

  changeAcrivePage = activePage => {
    this.setState({ activePage });
  };

  render() {
    return (
      <div className="background">
        <div className="main-container">
          {this.state.activePage === 'main' ? (
            <div>
              {/* <div>
                <img className="logo" src={logo} alt="Logo" />
              </div> */}
              <div
                className="btn btn-primary"
                onClick={() => this.changeAcrivePage('Suggestion')}
              >
                {' '}
                <div className="lds-ellipsis">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>{' '}
                أقتراح
              </div>
            </div>
          ) : (
            ''
          )}

          {this.state.activePage === 'Suggestion' ? (
            <Suggestion changeAcrivePage={this.changeAcrivePage} />
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
 