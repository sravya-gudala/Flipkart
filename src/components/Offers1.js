import React from 'react'
import discount from '../images/discount.jpg';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'


export default function () {
  return (
    <>
    <div className='row discount'>
        <img src={discount}/>
      </div>

      <div className='row offers1'>
        <div className='col-md-4 offerimg'>
          <img src={img1}/>
        </div>

        <div className='col-md-4 offerimg'>
          <img src={img2}/>
        </div>

        <div className='col-md-4 offerimg'>
          <img src={img3}/>
        </div>
      </div>
    </>
  )
}
