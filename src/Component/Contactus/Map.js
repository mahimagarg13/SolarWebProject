
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

            {/* <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.089140139092!2d75.90483331400063!3d22.72492793309118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2c9756627f3%3A0x84c6b1ce912bcc61!2sSolar%20Water%20Heater%20Seller%20%2F%20Supplier%20-%20Nyasa%20Energy%20System%20Indore!5e0!3m2!1sen!2sin!4v1627567149853!5m2!1sen!2sin"  allowfullscreen="true" loading="lazy"></iframe>
          </div>


        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAm1ejkJqv6fK8oyUiRhbYJbZ4ND8Dvkkc")
})(maps);