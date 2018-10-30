import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import "../style/MapOSM.css"

export default class MapOSM extends Component {
  state = {
    zoom: 16,
  }

  

  render() {
    const {posY, posX, posAccuary} = this.props
    const positionGeo = [posY, posX]
    
    console.log('=========Position Y INSIDE===========')
    console.log(posY)
    console.log('=========Position X  INSIDE===========')
    console.log(posX)
    console.log('=========Position Accuary INSIDE===========')
    console.log(posAccuary)

    var dataReceived = posY && posX ? true : false;
    console.log("raxxxx",dataReceived)

    return (
      <div className='map-container my-3'>
          <Map 
            center={positionGeo} 
            zoom={this.state.zoom}
            className="mapOSM"
          >
    
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionGeo}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
      </div>
    )
  }
}


