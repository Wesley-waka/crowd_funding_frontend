import React from 'react'
import Banner from '../common/Banner'
import Brands from '../common/Brands'
import { NavLink } from 'react-router-dom'
import Testimonials from '../common/Testimonials'
import Statistics from '../common/Statistics/Statistics'




function Home({search}) {

  return (
    <div className='home-container text-center'>   
      <Banner/>
      <Statistics/>
      <div className="photo-containwer">
      <h1 style={{marginTop: '0.7em'}}>Find it First on Pledge Up</h1>
      <p style={{fontSize: '16px'}}>Pledge up is where early adopters and innovation seekers find lively, imaginative tech before it hits the market and where you can express your diverse interest </p>
      <div style={{marginBottom: '2em'}}>
        <NavLink className= 'btn btn-warning btn-lg' to='/about'>Learn More</NavLink>
      </div>
      </div>
      <h1>Project Highlights: </h1>
      <Testimonials/>
     
      {/* <Brands/>  */}
    </div>
  )
}

export default Home