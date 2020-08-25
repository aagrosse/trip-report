import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';

import './style.css';

function Map() {

    





    return (
        <div id="mapid">
        <LeafletMap
        key={'leaflet-map-'}
        center={[33.8, -84.4]}
        zoom={10}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
    >
       

   <TileLayer
            key={'tile-layer'}
            attribution={'&copy <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'}
            url={'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'}

        />                     
        
          
    </LeafletMap>
    </div>

    )
}

export default Map;