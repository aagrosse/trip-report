import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import API from "../../utils/API";
import './style.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Map() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [trips, setTrips] = useState([])
    const accessToken = 'pk.eyJ1IjoiYWFncm9zc2UiLCJhIjoiY2tlOWFzNGtzMXltczJ3cWduZDRwZzFnMCJ9.YTfXUX9hOghZSLXELDHeLQ'
    const id = 'mapbox.satellite'

    const getTrips = () => {
        // const userId = isAuth()._id;
        API.getTrips()
            .then((results) => {
                console.log("all trips from db:", results.data);
                setTrips(results.data);
            })
            .catch((err) => console.log(err));
    };

    function convertDate(x) {
        var parts = x.split('-');
        var day = parts[2].split('', 2);
        var newdate = parts[1] + '/' + day[0] + day[1] + '/' + parts[0];
        return newdate

    }


    function renderMarkers() {
        return trips.map((trip) => {


            return (
                <Marker
                    position={[trip.lat, trip.long]}
                    attributuion={trip.id}
                    // icon= 
                    zIndexOffset={1}
                    opacity={20}


                >
                    <Popup>

                        <>
                            <Button variant="outline-success" onClick={handleShow}>
                                {trip.tripName}
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{trip.tripName}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    
                                    <p><b>Trip ID:</b> {trip.id}</p>
                                    <p><b>Trip Name:</b> {trip.tripName}</p>
                                    <p><b>Trip Type:</b> {trip.type}</p>
                                    <p><b>People:</b> {trip.people[0]}</p>
                                    <p>{trip.people[1]}</p>
                                    <p>{trip.people[2]}</p>
                                    <p>{trip.people[3]}</p>
                                    <p><b>Date:</b> {convertDate(trip.date)}</p>
                                    <p><b>Trip Description:</b> {trip.description}</p>
                                    
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>

                                </Modal.Footer>
                            </Modal>
                        </>
                    </Popup>
                </Marker>
            )
        })
    }


    useEffect(() => { getTrips(); }, []);
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
                {renderMarkers()}

                
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