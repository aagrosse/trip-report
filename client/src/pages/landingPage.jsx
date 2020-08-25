import React from "react"
import Navbar from "../components/navbar/index"
import Sidebar from "../components/sidebar/index"
import Footer from "../components/footer/index"
import Map from "../components/map/index"


function LandingPage() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Map />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aspernatur quo recusandae aliquam rem, expedita saepe nesciunt necessitatibus modi consectetur?
            <Footer/>
        </div>
    )
}

export default LandingPage;