import React from "react"
import Navbar from "../components/navbar/index"
import Sidebar from "../components/button/index"
import Footer from "../components/footer/index"
import Map from "../components/map/index"
import Reports from "../components/reports/index"


function tripReport() {
    return (
        <div>
            <Navbar />
           
            <Reports />
            <Footer/>
        </div>
    )
}

export default tripReport;