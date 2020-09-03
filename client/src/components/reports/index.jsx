import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Acard } from "../card/index";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
// import Image from 'react-bootstrap/Image';
import './style.css';
// import { ToastContainer, toast } from "react-toastify";
import API from "../../utils/API";
import Modal from 'react-bootstrap/Modal';


function Reports() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [searchResults, setSearchResults] = useState([]);
    const [newtrips, setNewTrips] = useState([]);
    const [editTrip, setEditTrip] = useState([]);
    const [state, setState] = useState([]);

    const searchFilter = (e) => {
        const filter = e.target.value;
        const filteredUserList = newtrips.filter(trip => {
            let values = Object.values(trip).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        setSearchResults(filteredUserList);
    }

    const getTrips = () => {
        // const userId = isAuth()._id;
        API.getTrips()
            .then((results) => {
                console.log("all trips from db:", results.data);
                setNewTrips(results.data);
                setSearchResults(results.data);



            })
            .catch((err) => console.log(err));
    };




    function renderTableHeader() {
        let header = ["Id", "Date", "Title", "View", "Edit", "Delete"]
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    function convertDate(x) {
        var parts = x.split('-');
        var day = parts[2].split('', 2);
        var newdate = parts[1] + '/' + day[0] + day[1] + '/' + parts[0];
        return newdate

    }

    function showModal(trip) {
        setShow(true)
        return (
            <div>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{trip.tripName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <p><b>Trip ID:</b> {trip.tripId}</p>
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
            </div>
        )

    };





    function renderTableData() {
        return searchResults.map((trip) => {


            return (

                <tr key={trip._id}>
                    <td>{trip.tripId}</td>
                    <td>{convertDate(trip.date)}</td>
                    <td>{trip.tripName}</td>
                    <td><a style={{ cursor: "pointer", color: "blue" }} className='view-trip' onClick={() => showModal(trip)} >VIEW</a></td>
                    <td><a style={{ cursor: "pointer", color: "orange" }} className='edit-trip' onClick={() => handleEdit(trip)}>EDIT</a></td>
                    <td><a style={{ cursor: "pointer", color: "red" }} className='delete-trip' id={trip._id} onClick={() => confirmDelete(trip)}>DELETE</a></td>


                </tr>
            )
        })
    }







    function getTrip(id) {
        console.log(id)
        API.getTrip(id)
            .then((result) => {
                setEditTrip(result.data)

                // console.log("GOT Trip", result.data);
            })
    }

    function handleEdit(trip) {
        const { tripName, people, type, lat, long, description, image, date, tripId } = trip

        setState({
            _id: trip._id,
            tripId: trip.tripId,
            tripName: trip.tripName,
            people: trip.people,
            type: trip.type,
            lat: trip.lat,
            long: trip.long,
            description: trip.description,
            image: trip.image,
            date: trip.date,


        });
        setEditTrip(trip)
        console.log(trip)
        getTrip(trip._id)


        // setPage(true);
        console.log("go to edit")
    }

    const confirmDelete = (trip) => {
        var result = window.confirm(`Are you sure you want to delete ${trip.tripName}?`);
        if (result) {
            deleteTrip(trip)
        }
    }

    const deleteTrip = (trip) => {
        API.deleteTrip(trip._id)
            .then((res) => {
                console.log("after delete API", res)
                getTrips()
                // toast("Your trip has been deleted")
            })
            .catch((err) => console.log("ERROR:" + err));

    };


    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();


        let data = state

        // data.update ?
        //  API.updateTrip({

        //         ...data,
        //         ...editTrip,
        //         _id: data._id,
        //         TripId: data.TripId,
        //         tripName: data.tripName,
        //         people: data.people,
        //         type: data.type,
        //         lat: data.lat,
        //         long: data.long,
        //         description: data.description,
        //         image: data.image,
        //         date: data.date,
        //         update: true

        //     })


        // : 
        API.uploadTrips({


            tripId: data.tripId,
            tripName: data.tripName,
            people: data.people,
            type: data.type,
            lat: data.lat,
            long: data.long,
            description: data.description,
            image: data.image,
            date: data.date,




        })


            .then((result) => {
            })
            .catch((err) => {
                console.log(err);
            });




    }

    useEffect(() => { getTrips(); }, []);

    return (
        <div id="reportid">

            {/* <ToastContainer /> */}

            <Container>
                <Row>
                    <Col>

                        <Card className='cardSearch mb-md-4'>
                            <Card.Body>
                                <Card.Title>Search Your Trips</Card.Title>
                                <Form
                                    inline
                                    onSubmit={handleSubmit}
                                >
                                    <FormControl
                                        style={{ textAlign: "center", width: "100%" }}
                                        type="text"
                                        placeholder="Search here..."
                                        className="mr-md-5"

                                        id="inputID"

                                        onChange={e => searchFilter(e)}
                                    />
                                </Form>
                            </Card.Body>
                        </Card>

                        <Acard
                            className='card'
                            title="Trip Reports"
                            category="Welcome to Your Report Library"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <div>

                                    <Table id='tripTable' className="ml-3" striped hover>
                                        <tbody>
                                            <tr>{renderTableHeader()}</tr>
                                            {renderTableData()}
                                        </tbody>
                                    </Table>
                                </div>







                            }




                        />


                    </Col>

                    <Col>
                        <Card style={{ padding: '1em' }} className='card'>
                            {/* <Col xs={6} md={4}>
                                <Image src="holder.js/171x180" rounded />
                            </Col> */}
                            <Card.Title style={{ textAlign: 'center' }}>Trip Report</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formGridName">
                                    <Form.Label>Trip Id:</Form.Label>
                                    <Form.Control
                                        type="text"

                                        value={state.tripId}
                                        onChange={handleInputChange}
                                        name="tripId"
                                    />
                                </Form.Group>





                                <Form.Group controlId="formGridName">
                                    <Form.Label>Trip Name:</Form.Label>
                                    <Form.Control
                                        type="text"

                                        value={state.tripName}
                                        onChange={handleInputChange}
                                        name="tripName"
                                    />
                                </Form.Group>



                                <Form.Group >
                                    <Form.Label>People on the Trip:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={state.people}
                                        onChange={handleInputChange}
                                        name="people"

                                    />
                                </Form.Group>

                                <Form.Row>

                                    <Form.Group as={Col} >
                                        <Form.Label>Date (MM/DD/YYYY):</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={state.date}
                                            name="date"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} >
                                        <Form.Label>Trip Type:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={state.type}
                                            name="type"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>




                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Label>Lat:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lat"
                                            value={state.lat}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Long:</Form.Label>
                                        <Form.Control
                                            type="text"

                                            name="long"
                                            value={state.long}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group >
                                    <Form.Label>Trip Details:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="6"
                                        name="description"
                                        value={state.description}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </div>

    )
}

export default Reports;