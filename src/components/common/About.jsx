import React from 'react'
import oldMan from '../images/old_man.jpg'
import './About.css'
import Values from './Values'

function About() {
  return (
    <div className='about_container'>
      <div className='about_wrapper'>
          <div className='about d-flex flex-row '>
            <div className="about_image">
              <img src='https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="Old Man"/>
              
            </div>
            {/* <div>
                <Values/>
            </div> */}
            <div className="description d-flex flex-column">
              <h1>About Us</h1>
              <p>Pledge Up is a movement committed to the ideals of living together in peace and serving humanity, and it works within the framework of social responsibility and philanthropy.We are here to bridge the gap between investors and entrepreneurs, with the potential to increase entrepreneurship by expanding the pool of investors beyond the traditional circle of owners, relatives, and venture capitalists.
                Aside from this, in the recent years we've seen many individuals affected by the pandemic, drought, hefty medical expenses, children unable to go to school and other tragic events. We hope to create a platform which will help raise funds for such ventures and to support the next big thing. Our application provides a forum to anyone with an idea to pitch it in front of waiting investors; and for investors to have a wide scope of projects and charities to invest or donate to.
              </p>            
            </div> 
          
          </div>
      </div>

    </div>
  )
}

export default About