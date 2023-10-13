import React from 'react'
import slider1 from '../images/banner1.jpg';
import slider2 from '../images/banner2.jpeg';
import slider3 from '../images/banner3.jpg';
import slider4 from '../images/banner4.jpg';
import slider5 from '../images/banner5.jpeg';
import slider6 from '../images/banner6.jpg';
import slider7 from '../images/banner7.jpg';


export default function Sliders() {
  return (
    <>
    <div className='row sliders'>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={slider1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={slider2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={slider3} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={slider4} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={slider5} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={slider6} class="d-block w-100" alt="..."/>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img src={slider7} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>  
    </div>
    
    </>
  )
}
