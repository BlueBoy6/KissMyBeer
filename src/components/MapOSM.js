
import "../style/MapOSM.css"

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet'

type Position = { lat: number, lng: number }

type State = {
  center: Position,
  marker: Position,
  zoom: number,
  draggable: boolean,
}

export default class MapOSM extends Component< {}, State> {
  state = {
    center: {
      lat: 51.505,
      lng: -0.09,
    },
    marker: {
      lat: 51.505,
      lng: -0.09,
    },
    zoom: 13,
    draggable: true,
  }
  refmarker = React.createRef()

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
    const marker = this.refmarker.current
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      })
    }
  }

  render() {
    const position = [this.state.center.lat, this.state.center.lng]
    const markerPosition = [this.state.marker.lat, this.state.marker.lng]
    const ownPosition = [51.50361379162684, -0.09]

    console.log('=========marker Position===========')
    console.log(markerPosition)
    console.log('=========own Position===========')
    console.log(ownPosition)

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker title="JE NE BOUGERAI PAS !" position={[51.50329323076107, -0.08153915405273439]}>
          <Popup autoPan={true} minWidth={90}>
            POP UP QUI BOUGERA PAS HEHEHEE
          </Popup>
        </Marker>

        <Circle center={markerPosition} fillColor="blue" radius={600} />

        <Marker
          draggable={this.state.draggable}
          onDragend={this.updatePosition}
          position={markerPosition}
          ref={this.refmarker}>
          <Popup minWidth={90}>
            <span onClick={this.toggleDraggable}>
              {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
            </span>
            <div className='dragNdrop'>
              position : 
              <div className=''>
                lat : {markerPosition[0]}
              </div>
                <div className=''>
                  long : { markerPosition[1]}
                </div>
                    
            </div>
          </Popup>
        </Marker>
      </Map>
    )
  }
}