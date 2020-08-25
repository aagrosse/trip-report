import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';

import './style.css';

function Map() {

    const accessToken = 'pk.eyJ1IjoiYWFncm9zc2UiLCJhIjoiY2tlOWFzNGtzMXltczJ3cWduZDRwZzFnMCJ9.YTfXUX9hOghZSLXELDHeLQ'
    const id = 'mapbox.satellite'







    return (
        <div id="mapid">
            <LeafletMap
                key={'leaflet-map-'}
                center={[34.9, -85.6]}
                zoom={9}
                maxZoom={18}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
            >

                <Marker
                    position={[34.9, -85.6]}
                    attributuion='some crazy cave'

                    zIndexOffset={1}
                    opacity={20}


                >
                    <Popup>
                        Some Cave you visited <br /> Go to trip report link.
                  </Popup>
                </Marker>

                <TileLayer
                    key={'tile-layer'}
                    attribution={'&copy <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'}
                    url={'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'}
                // url={`https://api.mapbox.com/v4/mapbox.outdoors/1/0/0@2x.jpg90?access_token=${accessToken}`}

                />


            </LeafletMap>
        </div>

    )
}

export default Map;