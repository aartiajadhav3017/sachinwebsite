import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Wrapper from '../pages/Wrapper/Wrapper'
import Departments from '../pages/Departments/Departments'
import ERPInfo from '../pages/ERPInfo/ERPInfo'
import IntegrateModules from '../pages/IntegrateModules/IntegrateModules'
import ManufacturingERP from '../pages/CompanyCarousel/ManufacturingERP/ManufacturingERP'
import Testimonials from '../pages/Testimonials/Testimonials'
import WhyERP from '../pages/WHYERP/WhyERP'
import Whatsapp from '../components/Whatsapp/Whatsapp'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Wrapper/>
        <Departments/>
        <ERPInfo/>
        <IntegrateModules/>
        <ManufacturingERP/>
        <Testimonials/>
        <WhyERP/>
        <Footer/>
        <Whatsapp/>
    </div>
  )
}

export default Layout