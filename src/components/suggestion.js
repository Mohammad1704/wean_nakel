import React, { Component } from 'react'
import loadingpic from '../images/loading.gif';
import '../../src/custom.scss';
import Navigation from './navbar';
import { Container } from 'react-bootstrap';
import CarouselPage from './showImage';

    // fix CORB and CORS issues by using proxy
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl ='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g%20et_param=value';
      

export default class Suggestion extends Component {
  

  state = {
    isLoading: true,
    shop: null, 
    imagesShop:[],
    error: null
  };

  componentDidMount() {

        fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(shop => {
        console.table(shop); // create table in console 
        this.setState({ 
          shop ,
          imagesShop:shop.image,
          isLoading:false,
        });
      })
      .catch(e => {
        console.log(e);
      });    
  }
      loadShop()  {    //for relode rsults from API and will use it on أقتراح آخر button 
        this.setState({ isLoading: true });    
       fetch(proxyUrl + targetUrl)
         .then(res => res.json())
         .then(shop => {
           console.table(shop);
           this.setState({ 
              shop ,
              isLoading:false,
           });
          });
      }

  


    showLocation = () => {  // for use Latitude and longitude API and show it in map  
    var location = `${this.state.shop.lat}%2C%20${this.state.shop.lon}`;
   var gmapurl =`https://maps.google.com/maps?q=${location}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
   return gmapurl;
 };

 

  render() {

    const { isLoading, shop, error } = this.state; //no need to write this.state every time
 
    let shopImages =[];
    
    let gmapurl ;  //create variable that we will store the new location from the API 

    return (  
      

      <React.Fragment>
           <Navigation />

      <div> 
      {/* // Display a message if we faced an error */}
      {error ? <p>{error.message}</p> : null} 
      {!isLoading ? ( //   check data if it ready 
      //and take lat and lon from api ,and place it in  embedded google map url
      // shopImages = this.state.shop.image,
     gmapurl =`https://maps.google.com/maps?q=${this.state.shop.lat}%2C%20${this.state.shop.lon}&t=&z=17&ie=UTF8&iwloc=&output=embed`,

        shop ? ( 
          
          <div>

            <Container className='main-container rounded shadow-sm'>
           <h1><a className='link-unstyled' href={this.state.shop.link}>  {this.state.shop.name}</a></h1>
{/* show rating and category  */}
  <p className="font-weight-bold "> <span className='rating lead' > {this.state.shop.rating}</span><span className="font-weight-light small	">/10</span>  {this.state.shop.cat} </p>
            </Container>
         {/* MAP */}  
         <div className="map-responsive"><div className="gmap_canvas">
         <CarouselPage/>
            <iframe width="768" height="500" id="gmap_canvas" src={gmapurl} 
            frameBorder="0" scrolling="false" marginHeight="0" marginWidth="0">
            </iframe>
            <h1>جاري التحميل</h1></div> 
            </div>

          {/* show shop images   */}

            <button className="btn mb-4" onClick={() => this.loadShop()}> <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>أقتراح آخر</button>

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