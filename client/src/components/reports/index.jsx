import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import './style.css';

function Reports() {




    return (
        <div id="reportid">

            <Container>
                <Row>
                    <Col>
                        <Card className= 'card'>
                            <Card.Body>
                                <Card.Title>Trips List Here</Card.Title>
                                <Card.Text> This is some text within a card body.</Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ padding: '1em' }} className= 'card'>
                            <Card.Title>Trip Report</Card.Title>
                            <Form >
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Trip Name:</Form.Label>
                                    <Form.Control type="text" placeholder="The Best Cave Ever" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>People on the Trip:</Form.Label>
                                    <Form.Control type="text" placeholder="All my friends" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lat:</Form.Label>
                                    <Form.Control type="text" placeholder="34.02" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Long:</Form.Label>
                                    <Form.Control type="text" placeholder="-84.06" />
                                </Form.Group>


                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Trip Details:</Form.Label>
                                    <Form.Control as="textarea" rows="6" placeholder="We went somewhere and did some stuff" />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </div>

    )
}

export default Reports;