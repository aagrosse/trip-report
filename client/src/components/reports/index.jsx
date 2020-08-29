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

    const trip = {
        data: [
            { _id: "001", date: "07/19/2020", title: "The Coolest Cave", view: "", edit: "", delete: "" },
            { _id: "002", date: "08/20/2020", title: "Another Cool Cave", view: "", edit: "", delete: "" },
            { _id: "003", date: "02/13/2020", title: "A Beautiful Memory", view: "", edit: "", delete: "" },

        ]
    }

    const [searchResults, setSearchResults] = useState([]);
    const [newtrips, setNewTrips] = useState([
        { _id: "001", date: "07/19/2020", title: "The Coolest Cave", view: "", edit: "", delete: "" },
        { _id: "002", date: "08/20/2020", title: "Another Cool Cave", view: "", edit: "", delete: "" },
        { _id: "003", date: "02/13/2020", title: "A Beautiful Memory", view: "", edit: "", delete: "" },
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
                console.log("all songs from db:", results.data);
                setNewTrips(results.data);




            })
            .catch((err) => console.log(err));
    };

    const deleteTrip = (trip) => {
        const id = trip._id
        API.deleteTrip(id)
            .then((res) => {
                console.log("after delete API", res)
                getTrips()
                toast("Your trip has been deleted")
            })
            .catch((err) => console.log("ERROR:" + err));

    };



    function renderTableHeader() {
        let header = Object.keys(trip.data[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    function renderTableData() {
        return newtrips.map((trip) => {


            return (
                <tr key={trip._id}>
                    <td>{trip.id}</td>
                    <td>{trip.date}</td>
                    <td>{trip.title}</td>
                    <td><a style={{ cursor: "pointer", color: "blue" }} class='view-trip' >VIEW</a></td>
                    <td><a style={{ cursor: "pointer", color: "orange" }} class='edit-trip' onClick={() => handleEdit(trip)}>EDIT</a></td>
                    <td><a style={{ cursor: "pointer", color: "red" }} class='delete-trip' id={trip._id} onClick={() => deleteTrip(trip)}>DELETE</a></td>
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
        // const { albumId, title, date, _id, description} = song

        setState({
            //   albumId: song.album._id,
            //   title: song.title,
            //   album: song.album.title,
            //   description: song.album.description,
            //   art: song.album.art
        });
        setEditTrip(trip)
        console.log(trip)
        getTrip(trip._id)


        // setPage(true);
        console.log("go to edit")
    }




    // useEffect(() => { getTrips(); }, []);

    return (
        <div id="reportid">

            {/* <ToastContainer /> */}

            <Container>
                <Row>
                    <Col>

                        <Card className='cardSearch mb-md-4'>
                            <Card.Body>
                                <Card.Title>Search Your Trips</Card.Title>
                                <Form inline>
                                    <FormControl
                                        style={{ textAlign: "center", width: "100%" }}
                                        type="text"
                                        placeholder="Search here..."
                                        className="mr-md-5"
                                        type="text"
                                        id="inputID"

                                    //   onChange={e => searchFilter(e)}
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
                            <Form >
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Trip Name:</Form.Label>
                                    <Form.Control type="text" placeholder="The Best Cave Ever" />
                                </Form.Group>



                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>People on the Trip:</Form.Label>
                                    <Form.Control type="text" placeholder="All my friends" />
                                </Form.Group>

                                <Form.Row>

                                    <Form.Group as={Col} controlId="formGridText">
                                        <Form.Label>Date (MM/DD/YYYY):</Form.Label>
                                        <Form.Control type="text" placeholder="07/19/2020" name="date"
                                        // value={state.country}
                                        // onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridText">
                                        <Form.Label>Trip Type:</Form.Label>
                                        <Form.Control type="text" placeholder="vertical"
                                            name="type"
                                        // value={state.city}
                                        // onChange={handleInputChange}
                                        />
                                    </Form.Group>




                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridText">
                                        <Form.Label>Lat:</Form.Label>
                                        <Form.Control type="text" placeholder="34.56"
                                            name="lat"
                                        // value={state.city}
                                        // onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridText">
                                        <Form.Label>Long:</Form.Label>
                                        <Form.Control type="text" placeholder="-84.06" name="long"
                                        // value={state.country}
                                        // onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Trip Details:</Form.Label>
                                    <Form.Control as="textarea" rows="6" placeholder="We went somewhere and did some stuff" />
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