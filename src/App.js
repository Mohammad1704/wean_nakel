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

  changeActivePage  = activePage => {
    this.setState({ activePage });
  };

  render() {
    return (
      <div className="background">
        <div className="main-container">
          {this.state.activePage === 'main' ? (
            <div>
              <div>
                <img className="logo" src={logo} alt="Logo" />
              </div>
              {/* <div
                className="btn btn-primary"
                onClick={() => this.changeActivePage ('Suggestion')}
              >
                {' '}
                <div className="lds-ellipsis">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>{' '}
                أقتراح
              </div> */}
           
                <button className="btn" onClick={() => this.changeActivePage ('Suggestion')} > <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> أقتراح</button>

                </div>
                ) : ( '' )}

          {this.state.activePage === 'Suggestion' ? (
      <React.Fragment>

            <Suggestion changeActivePage ={this.changeActivePage } />
            <button className="btn" onClick={() => this.changeActivePage ('Suggestion')} > <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> أقتراح</button>

            </React.Fragment>

          ) : ( '')}
        </div>
      </div>
    );
  }
}
 