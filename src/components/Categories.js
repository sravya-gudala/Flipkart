import React from 'react'
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import icon7 from '../images/icon7.png';
import icon8 from '../images/icon8.png';
import icon9 from '../images/icon9.png';
import icon10 from '../images/icon10.png';


export default function () {
  return (
    <>
    <div className='row categories justify-content-center'>
      <div className='col-md-1 text-center'>
        <img src={icon1}/>
        <p>Offers</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon2}/>
        <p>Mobiles</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon3}/>
        <p>Electronics</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon4}/>
        <p>Appliances</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon5}/>
        <p>Fashion</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon6}/>
        <p>Beauty</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon7}/>
        <p>Home</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon8}/>
        <p>Furniture</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon9}/>
        <p>Flights</p>
      </div>

      <div className='col-md-1 text-center'>
        <img src={icon10}/>
        <p>Grocery</p>
      </div>
    </div>
    
    </>
  )
}
