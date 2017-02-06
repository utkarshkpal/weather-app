import React from 'react';
import {GoogleMapLoader,GoogleMap} from 'react-google-maps';

export default (props) => {


  return(
    <GoogleMapLoader
    containerElement={<div style={{height:'100%'}} />}
    googleMapElement = {
      <GoogleMap  bootstrapURLKeys={{
          key: "AIzaSyBm8HSPNLDSkIPFMagm8jo_3xITiUxVS7w"
          }} defaultZoom={12} defaultCenter={{lat:props.lat,lng:props.lon}}/>
  }
    />
  );
}
