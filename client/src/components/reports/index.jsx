import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import './style.css';

function Reports() {

    const [searchResults, setSearchResults] = useState([]);

    // const searchFilter = (e) => {
    //     const filter = e.target.value;
    //     const filteredUserList = songs.filter(song => {
    //       let values = Object.values(song).join("").toLowerCase();
    //       return values.indexOf(filter.toLowerCase()) !== -1;
    //     });
    //     setSearchResults(filteredUserList);
    //   }


    return (
        <div id="reportid">

            <Container>
                <Row>
                    <Col>

                    <Card className='cardSearch mb-md-4'>
                            <Card.Body>
                                <Card.Title>Search Your Trips</Card.Title>
                                <Form inline>
            <FormControl
              style={{ textAlign: "center", width: "100%"}}
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

                        <Card className='card'>
                            <Card.Body>
                                <Card.Title>Trips List Here</Card.Title>
                                <Card.Text> This is some text within a card body.</Card.Text>
                                <Card.Link href="#">Delete</Card.Link>
                                <Card.Link href="#">Edit</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ padding: '1em' }} className='card'>
                            {/* <Col xs={6} md={4}>
                                <Image src="holder.js/171x180" rounded />
                            </Col> */}
                            <Card.Title style={{textAlign: 'center'}}>Trip Report</Card.Title>
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