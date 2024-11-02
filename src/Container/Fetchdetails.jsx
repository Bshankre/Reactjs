import React, { useEffect, useState }  from 'react'
import Studentlist from '../Studentlist';
import axios from 'axios'
import Spinner from './Spinner';

const Fetchdetails = () => {
    let [state,setState]=useState(null)
    let fetchDate=async()=>{
      let data=await axios.get("http://localhost:5000/course");
      setState(data.data)
    }
    useEffect(()=>{
      fetchDate()
    },[])
  return (
    <div>
      <center><h1 style={{margin:'20px'}}>DETAILS OF STUDENTS</h1>
     
      <div id="log">
     
     <div id="fied">,
       <table style={{cellPadding:'30px' }}>
       <tr className='td'>
              <th className='td'>STUDENTS NAME</th>
              <th className='td'>EMAIL_ID</th>
              <th className='td'>PHONE_NO</th>
              <th className='td'>DATE</th>
              <th className='td'>STREAM</th>
              <th className='td'>SUBJECT</th>
              <th className='td' colSpan='2'>ACTIONS</th>
           
            </tr>
{
  state===null ? (<Spinner></Spinner>):state.map((data)=>{return <Studentlist key={data.id}{...data}></Studentlist>})
}
</table>
</div>
</div>
</center>
    </div>
  )
}

export default Fetchdetails
