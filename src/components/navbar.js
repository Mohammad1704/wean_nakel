import React, { Component } from 'react';
// import './App.css';
import '../custom.scss';
import {Navbar, Nav} from 'react-bootstrap';
import '../navbar.scss';

export default class Navigation  extends Component {
render(){
return(
     <Navbar  className="navbar-default">
<Navbar.Brand className="navbar-brand" href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
</Navbar>
)
}
}

