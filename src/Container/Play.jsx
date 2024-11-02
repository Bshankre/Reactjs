import React from 'react'

const Play = (props) => {
    console.log(props)
    let {title,videoUrl,uploadTime,views}=props.data
  return (
    
    <div onClick={()=>{
        props.handleChange(props.data)
    }}>
      
         <figure  className='videos'>
          <video src={videoUrl} ></video>
        </figure>  
       <center><h3 id="title"> {title} &nbsp;&nbsp;<span style={{color:'red',fontSize:'0.7em'}}>{uploadTime}</span><br></br>views&nbsp;<span style={{color:'brown',fontSize:'0.8em'}}>{views}</span></h3>
      </center> 
    </div>
  )
}

export default Play
