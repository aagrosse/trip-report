import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Buttons from "../button/index"
import "./style.css"

function header() {
  return (
    <div>
      <div id='jumbo'>

        <Container>
          <Row>
            <Col ><Buttons /></Col>
            <Col xs={6}>
              <div id='text2'>
                <h1>Welcome to Trip Report</h1>
                <p>
                  Click on the map to see your reports
    </p>

              </div>
            </Col>
            <Col></Col>
          </Row>


        </Container>

      </div>


    </div>
  )
}

export default header;


