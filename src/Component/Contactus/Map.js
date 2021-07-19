
import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';

class maps extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '500px',
            borderRadius:'5px',
            // margin:'30px',
          };

        return (

<div className="googlemaps">

            <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          />
          </div>


        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAm1ejkJqv6fK8oyUiRhbYJbZ4ND8Dvkkc")
})(maps);