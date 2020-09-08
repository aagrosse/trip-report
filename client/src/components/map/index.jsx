import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import API from "../../utils/API";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Map() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [trips, setTrips] = useState([])

    const [tile, setTile] = useState(true)

    const getTrips = () => {
        // const userId = isAuth()._id;
        API.getTrips()
            .then((results) => {
                console.log("all trips from db:", results.data);
                setTrips(results.data);
            })
            .catch((err) => console.log(err));
    };

    const [radioValue, setRadioValue] = useState('1');

    const radios = [

        { name: 'Satallite', value: '2', tile: false },
        { name: 'Topo', value: '1', tile: true },


    ];

    function changeTiles(e) {
        console.log(e.currentTarget)
        if (e.currentTarget.value === '1') {
            setRadioValue('1')
            setTile(true)
        }
        else {
            setRadioValue('2')
            setTile(false)
        }

    }

  






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
                    // icon= {redMarker}
                    zIndexOffset={1}
                    opacity={20}
                    onClick={handleShow}
                    title={trip.tripName}

                >


                    <>


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

                </Marker>
            )
        })
    }

    

    useEffect(() => { getTrips(); }, []);
    return (
        <div id="mapid">

            <>
                <ButtonGroup toggle style={{ zIndex: "500", position: "absolute", margin: "20px 50px" }}>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            tile= {radio.tile}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => changeTiles(e)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </>




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

                {tile ?
                    <TileLayer
                        key={'tile-layer'}
                        attribution={'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'}
                        url={'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'}
                    />


                    : <TileLayer
                        key={'tile-layer'}
                        attribution={'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'}
                        url={'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'}
                    />
                }




            </LeafletMap>
        </div >

    )
}

export default Map;