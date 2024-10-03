import React from 'react'
import "./HomeContent.css"
import Admin from "../asset/admin.png"
import Other from "../asset/other.png"
import Doctor from "../asset/doctor.png"

import Manager from "../asset/manager.png"
import Payment from "../asset/payment.png"
import Pharm from "../asset/pharma.png"
import Lab from "../asset/lab.png"
import Radio from "../asset/radiology.png"

const Homee = () => {
  return (
    <div>
      <div class="grid-container">
        <div class="home-page">
            <img src={Manager} alt=""/>
            <h1>Manager</h1>
        </div>
        <div id='docter' class="home-page">
          <img src={Doctor} alt=""/>
          <h1>Doctor</h1>
        </div>
        
        <div id='admin' class="home-page">
          <img src={Admin} alt=""/>
          <h1>Admin</h1></div>
          <div id='LabTechnician' class="home-page"><img src={Pharm} alt=""/>
            <h1>Pharmacist</h1></div>
        <div id='LabTechnician' class="home-page"><img src={Lab} alt=""/>
            <h1>Lab Technician</h1></div>
        <div id='nurse' class="home-page">
          <img src={Radio } alt=""/>
        <h1>Radiologist</h1>
        </div>
        <div id='staff' class="home-page"><img src={Other} alt="Admin"/>
            <h1>Other Staff  member</h1></div>
        <div id='payment' class="home-page">
          <img src={Payment} alt="Admi"/>
          <h1>payment</h1>
        </div>
      </div>

    </div>
  )
}

export default Homee
