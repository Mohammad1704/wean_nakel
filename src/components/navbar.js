import React, { Component } from 'react';
// import './App.css';
import '../custom.scss';
// import '~bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import '../navbar.scss';
import logoHeader from '../images/logo-header.png';

export default class Navigation  extends Component {
render(){
return(
    <React.Fragment>
     <Navbar  className="navbar-default">
<Navbar.Brand className="navbar-brand" href="#home"><img src={logoHeader}/></Navbar.Brand>
<Nav className="navbar-link">
  <Nav.Link className="navbar-link" href="#home"> تسجيل الدخول </Nav.Link>
  <Nav.Link href="#features">|</Nav.Link>
  <Nav.Link href="#pricing">إنشاء حساب</Nav.Link>
</Nav>
</Navbar>
</React.Fragment>
)
}
}

