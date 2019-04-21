import React, { Component } from 'react';
// import "../../src/custom.scss";
export default class Suggestion extends Component {
  state = {
    shop: null //
  };

  componentDidMount() {
    // fix CORB and CORS issues
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl =
        'https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g%20et_param=value';
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(shop => {
        console.table(shop);
        this.setState({ shop });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        {this.state.shop ? (
          <div>
            <h1> {this.state.shop.name}</h1>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}