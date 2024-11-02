import React from 'react'

const Video = ({play,title}) => {
  return (
    <div>
       <center> <video id="cvid" src={play} controls ></video>
       <h1>{title}</h1>
     
       </center>  
    </div>
  )
}

export default Video
