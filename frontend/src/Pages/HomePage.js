import React from 'react'
import Navbar from '../Components/Navbar'
import Tenant from '../Components/Tenant'
import Owner from '../Components/Owner'
import Footer from '../Components/Footer'
import './Homepage.css'
function HomePage() {
  return (
    <div className='Homepage'>
        <Navbar/>
        <div className='TenantOwnerDiv'>
        <Tenant/>
        <Owner/>
        </div>
        <Footer/>
        
        
    </div>
  )
}

export default HomePage