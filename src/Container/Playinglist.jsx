import React from 'react'
import Play from './Play'
import Video from './Video'
import TechInfo from './TechInfo'

const Playinglist = ({state,play,handleChange}) => {
  return (
  <div>
    <div id='video-outer'>
     
        <aside  id="vid">
        <Video play={play}></Video>
        <TechInfo></TechInfo>
        </aside>
        <div id='videos'>
        
                {
                    state.map((data)=>{
                        return <Play data={data} handleChange={handleChange}></Play>
                    })
                }
      
        </div>
       

    
    </div>
    </div>
  )
}

export default Playinglist
