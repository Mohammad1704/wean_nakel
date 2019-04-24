import React, { Component } from 'react';
// import './App.css';
import '../custom.scss';
import '../navbar.scss';
// import '~bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import logoHeader from '../images/logo-header.png';

export default class Navigation  extends Component {
render(){
return(
  <React.Fragment>
  <nav className="navbar navbar-default">
  <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#collapseLeft" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Brand</a>
      </div>
  
      <div className="collapse navbar-collapse pull-sm-left" id="collapseLeft">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Left 1 <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Left 2</a></li>
          <li><a href="#">Left 3</a></li>
        </ul>
      </div>
      </div>
  </nav>
  </React.Fragment>
)
}
}

