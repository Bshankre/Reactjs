import React from 'react'
import img1 from '../Images/imghome1.png'
import img2 from '../Images/imghome2.jpg'
import img3 from '../Images/imghome3.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/css';


// or other themes
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';


// or only core styles
import '@splidejs/splide/css/core';
import Jspiders from './Jspiders';
// import TechInfo from './TechInfo';

// npm i @splidejs/react-splide 
const Home = () => {
  return (
    <div id="splide-cont">
     <Splide
      options={ {
        rewind: true,
        gap   : '0.1rem',
        height: 560,
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
      <Jspiders></Jspiders>   
      <img src={img1} alt="Image 1"/>
       
      </SplideSlide>

      <SplideSlide>
        {/* <span style={{position:"absolute",zIndex:100,top:"100px",color:"red"}}>Image</span> */}
        {/* <Javafull></Javafull> */}
        <Jspiders></Jspiders>   
        <img src={img2} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        {/* <span style={{position:"absolute",zIndex:100,top:"100px",color:"red"}}>Image</span> */}
        <Jspiders></Jspiders>   
        <img src={img3} alt="Image 3"/>
      </SplideSlide>
    </Splide>


    </div>

  )
}

export default Home
