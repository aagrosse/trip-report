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
import Image from 'react-bootstrap/Image';
import './style.css';
import { ToastContainer, toast } from "react-toastify";

import API from "../../utils/API";

function Reports() {
    const mongoose = require("mongoose");
    
    const trip = {
        data: [
            { id: "001", date: "07/19/2020", title: "The Coolest Cave", view: "", edit: "", delete: "" },
            { id: "002", date: "08/20/2020", title: "Another Cool Cave", view: "", edit: "", delete: "" },
            { id: "003", date: "02/13/2020", title: "A Beautiful Memory", view: "", edit: "", delete: "" },

        ]
    }
    const [id, setId] = useState(10001);
    const [searchResults, setSearchResults] = useState([]);
    const [newtrips, setNewTrips] = useState([
        { id: "001", date: "07/19/2020", tripName: "The Coolest Cave", people: "", type: "", lat: "", long: "", description: "", image: "", view: "", edit: "", delete: "" },
        { id: "002", date: "08/20/2020", tripName: "Another Cool Cave", people: "", type: "", lat: "", long: "", description: "", image: "", view: "", edit: "", delete: "" },
        { id: "003", date: "02/13/2020", tripName: "A Beautiful Memory", people: "", type: "", lat: "", long: "", description: "", image: "", view: "", edit: "", delete: "" },
    ]);
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
        let header = Object.keys(trip.data[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    function renderTableData() {
        return searchResults.map((trip) => {


            return (
                <tr key={trip.id}>
                    <td>{trip.id}</td>
                    <td>{trip.date}</td>
                    <td>{trip.tripName}</td>
                    <td><a style={{ cursor: "pointer", color: "blue" }} className='view-trip' >VIEW</a></td>
                    <td><a style={{ cursor: "pointer", color: "orange" }} className='edit-trip' onClick={() => handleEdit(trip)}>EDIT</a></td>
                    <td><a style={{ cursor: "pointer", color: "red" }} className='delete-trip' id={trip._id} onClick={() => deleteTrip(trip)}>DELETE</a></td>
                </tr>
            )
        })
    }


    function getTrip(id) {
        console.log(id)
        API.getTrip(id)
            .then((result) => {
                setEditTrip(result.data)

                console.log("GOT Trip", result.data);
            })
    }

    function handleEdit(trip) {
        const { tripName, people, type, lat, long, description, image, date, id } = trip

        setState({
            id:trip.id,
            tripName: trip.tripName,
            people: trip.people,
            type: trip.type,
            lat: trip.lat,
            long: trip.long,
            description: trip.description,
            image: trip.image,
            date: trip.date
        });
        setEditTrip(trip)
        console.log(trip)
        getTrip(trip._id)


        // setPage(true);
        console.log("go to edit")
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
        console.log(state)
       
        
        API.uploadTrips({

            
            id: data.id,
            tripName: data.tripName,
            people: data.people,
            type: data.type,
            lat: data.lat,
            long: data.long,
            description: data.description,
            image: data.image,
            date: data.date

        

        })
        // API.updateTrip({

        //     ...data,
        //     ...editTrip,
        //     tripName: data.tripName,
        //     people: data.people,
        //     type: data.type,
        //     lat: data.lat,
        //     long: data.long,
        //     description: data.description,
        //     image: data.image,
        //     date: data.date

        // })

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
                                        
                                        value={state.id}
                                        onChange={handleInputChange}
                                        name="id"
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