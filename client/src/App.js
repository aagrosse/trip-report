import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage"
// import Admin from "./pages/Dashboard/Dashboard"


function App() {
    return (
      <Router>
        {/* <StoreProvider> */}
          <Route exact path='/' component={LandingPage} />
          {/* <Route exact path='/dashboard' component={Admin} /> */}
        {/* </StoreProvider> */}
      </Router>
  );
}

export default App;
