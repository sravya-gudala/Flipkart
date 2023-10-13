import React from 'react'
import title from '../images/title.svg'
import minilogo from '../images/minilogo.svg'

export default function () {
  return (
    <>
    <div className='row top'>
      <div className='col-md-2 float-start'>
        <img src={title}/>
        <span className='explore'>Explore</span>
        <span className='plus'>Plus</span>
        <img src={minilogo} />
      </div>

      <div className='col-md-6'>
        <button className='search-icon'><i class="fa-solid fa-magnifying-glass"></i></button>
        <input type='text' className='searchbar' placeholder='Search for Products, Brands and more'></input>
      </div>

      <div className='col-md-4'>
        <ul className='navmenu'>
          <li><i class="fa-solid fa-store"></i>Become a Seller</li>
          <li><i class="fa-regular fa-user"></i>Sign in</li>
          <li><i class="fa-solid fa-cart-shopping"></i>Cart</li>
          <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
        </ul>
      </div>
    </div>
  
    
    </>
    
  )
}
