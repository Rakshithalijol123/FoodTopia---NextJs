import React from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'

export const metadata = {
  title: 'Home | FoodTopia',
}

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className="section1 mt-56">
          <Section1/>
        </div>
    </div>
  )
}

export default page
