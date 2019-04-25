import React, { Component } from 'react';
import '../navbar.scss';
import '../custom.scss';

import {Navbar, Nav} from 'react-bootstrap';
import logoHeader from '../images/logo-header.png';

export default class Navigation  extends Component {

  
render(){
  var divStyle = {height: 10}; 
return(
<React.Fragment>
     <Navbar  className="navbar-default navbar-fixed-top "  >
<Navbar.Brand className="navbar-brand mr-auto" href="#home"><img className="ml-auto" src={logoHeader}/></Navbar.Brand>
<Nav className="navbar-link pull-left">
  <Nav.Link className="navbar-link " href="#login"> تسجيل الدخول </Nav.Link>
  <Nav.Link >|</Nav.Link>
  <Nav.Link href="#Sign-up">إنشاء حساب</Nav.Link>
</Nav>
</Navbar>
</React.Fragment>
)
}
}

