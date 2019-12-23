import React, { Component } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import PropTypes from 'prop-types';


export default class MyMapComponent extends Component {

  state = {
    viewport: {
      width: 700,
      height: 400,
      latitude: 3.847773,
      longitude: 11.503928,
      zoom: 8
    }
  };

  render() {

      const lieu = this.props.lieu
        
    return (
      <ReactMapGl
        {...this.state.viewport}
         mapStyle='mapbox://styles/ndjaka/ck41b031h0p851cljttlst4d4'
        mapboxApiAccessToken='pk.eyJ1IjoibmRqYWthIiwiYSI6ImNrM3JqYzNtcTBjMDQzbm1uZ2V1dHRjbHoifQ.fkbKe3KmrtTwDZzihPiIsA'
        onViewportChange={(viewport) => this.setState({viewport})}
      width='100%'

      >

      <Marker></Marker>
       

      </ReactMapGl>
    )
  }
}
