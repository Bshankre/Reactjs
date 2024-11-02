import React, { useState } from 'react'
import Playinglist from './Playinglist';
import JSON from './index.json'

const About = () => {
  let [state,setState]=useState(JSON);
  let [play,setPlay]=useState(state[0])

  let handleChange=(e)=>{
     setPlay(e.videoUrl,e.title)
  }
  return (
    <div id='about'>
  <marquee behavior="alternate" direction="right" scrollamount='20' loop='infinite' style={{backgroundColor:'rgb(52, 147, 113)',color:'white',margin:'5px'}}><h1>About Jspider's</h1></marquee>
      <div id="outer">
       
      <Playinglist state={state} play={play} handleChange={handleChange}></Playinglist>
     </div>

      </div>
  )
}

export default About
