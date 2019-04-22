import React, { Component } from 'react'
import loadingpic from '../images/loading.gif'
import "../../src/custom.scss";
import Navigation from './navbar';
export default class Suggestion extends Component {
  state = {
    isLoading: true,
    shop: null, 
    error: null
  };

  
  componentDidMount() {
    // fix CORB and CORS issues by using proxy
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl ='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g%20et_param=value';
      fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(shop => {
        console.table(shop); // create table in console 
        this.setState({ 
          shop ,
          isLoading:false,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
//     showLocation = () => {
//     var location = `${this.state.shop.lat}%2C%20${this.state.shop.lon}`;
//    var gmapurl =`https://maps.google.com/maps?q=${location}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
//    return gmapurl;
//  };
  
  render() {
    const { isLoading, shop, error } = this.state;

  
    let gmapurl ;  //create variable that we will store the new location from the API 

    return (  

      <React.Fragment>
           <Navigation />

      <div> 
      {/* // Display a message if we faced an error */}
      {error ? <p>{error.message}</p> : null} 
      {!isLoading ? ( //   check data if it ready 
      //and take lat and lon from api ,and place it in  embedded google map url
     gmapurl =`https://maps.google.com/maps?q=${this.state.shop.lat}%2C%20${this.state.shop.lon}&t=&z=17&ie=UTF8&iwloc=&output=embed`,

        shop ? (
          <div>

            <h1> {this.state.shop.name}</h1>
         {/* MAP */}  
         <div className="mapouter"><div className="gmap_canvas">
            <iframe width="640" height="500" id="gmap_canvas" src={gmapurl} 
            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
            <h1>map veiw</h1></div> 
            </div>
            

            <button className="btn" onClick={() => this('')} > <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>  أقتراح آخر</button>

         </div> ) : ( '')
):(      // show loading icon if there is a delay in data
<div> <img src={loadingpic}></img>  </div>
  )
      }
      </div>
      </React.Fragment>
    );
  }
}