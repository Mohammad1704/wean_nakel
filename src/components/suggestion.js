import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import "../../src/custom.scss";

export default class Suggestion  extends React.Component{  
  constructor(props) {
  super(props);
    this.state = {
      shop: []  // 
    };
  }
componentDidMount() {
this.Suggestion ();
}
Suggestion () {
  fetch("https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value")     
.then(({UID}) => this.setState({ shop: UID}) ); // try udi small 
}

  //======================

render() {
  const shops = this.state.shop.map((item, i) => (
    <div>
    <h1>{ this.props.params.name }</h1>
    <span>{ this.props.params.cat }, { this.props.params.rating }</span>
  </div>
  ));
        // console.log(fetch('https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value'));
        return (
          <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ shops }</div>
          </div>
        );
      }
    }   