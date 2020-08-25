import React from "react"
import Navbar from "../components/navbar/index"
import Sidebar from "../components/sidebar/index"
import Footer from "../components/footer/index"
import Map from "../components/map/index"


function LandingPage() {
    return (
        <div>
            <Navbar />
            {/* <Sidebar /> */}
            <Map />
            
            <Footer/>
        </div>
    )
}

export default LandingPage;