import React from 'react'
import Cero from '../images/cero.png'
import Patreon from '../images/patreon.png'
import './Brands.css'

function Brands() {
  return (
    <div className='brand_container'>
        <h1>Brands we're proud to support</h1>
        <div className="brands d-flex justify-content-evenly flex-row mb-3">
            <img src="https://pbs.twimg.com/media/DzKt3nqUcAARcOe.jpg" alt="Dreamcast logo"/>
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/5388/brand.gif?SBaiJepDO.q241D1HDvXtzQDy0sqvb5o&itok=6OYUS8xI" alt="Ceresit logo" />
            <img src={Cero} alt="Cero logal"/>
            <img src={Patreon} alt="Patreon" />
        </div>
    </div>
  )
}

export default Brands