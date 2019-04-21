import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import "../../src/custom.scss";

export default class Map  extends React.Component{ 
    
    render(){

        let lat = 26.304992246123;
        let lon = 50.196256356747;
        const gmapurl =`https://maps.google.com/maps?q=${lat}&t=&z=17&ie=UTF8&iwloc=&output=embed`
        return (


            <div className="mapouter"><div className="gmap_canvas">
            <iframe width="640" height="500" id="gmap_canvas" src={gmapurl} 
            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
            <h1>map veiw</h1></div>
            
            </div>
          );
    }
  
}