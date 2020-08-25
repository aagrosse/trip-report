import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import "./style.css"

function header() {
    return (
      <div>
        <div id='jumbo'>
<Jumbotron fluid>
  <Container>
    <div id='text2'>
    <h1>Welcome to Trip Report</h1>
    <p>
      Click on the map to see your reports
    </p>
    </div>
  </Container>
  </Jumbotron>
  </div>


      </div>
    )
}

export default header;