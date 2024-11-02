import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Deletecourse = () => {
    let navigate=useNavigate();
    let [state,setState]=useState(
     {
       name:'',
       email:'',
       pass1:'',
       pass2:'',
       phone:'',
       subject:'',
       date:'',
       stream:'',
       message:''
     }
   )
   let {id}=useParams()
   let {name,email,pass1,pass2,phone,subject,date,stream,message}=state
   let handleChange=(e)=>{
     let {name,value}=e.target 
     setState({...state,[name]:value})
   
   }
   useEffect(()=>{
     let fetchDate=async()=>{
         let data=await axios.get(`http://localhost:5000/course/${id}`)
         setState(data.data)
     }  
     fetchDate()
 },[id])
 let submit=async(e)=>{
     e.preventDefault();
     try{
           let payload={...state}
           let {data}=await axios.delete(`http://localhost:5000/course/${id}`)
           console.log({data})
           navigate('/studentlist')
     }
     catch(err){
 
       console.log(err);
     }
 }
  return (
    <div>
        <h1 className="h-primary">Registration</h1>
  
    <div id="contact-box1">
      <form action="" onSubmit={submit}>
      <fieldset id="fied"> {/*onSubmit={handleSubmit} Use onSubmit for form */}
        <table>
        <tr className="form-group">
          <td><b><label htmlFor="name">Name:</label></b></td>
          <td><input type="text" name="name" value={name} id="name" placeholder="Enter your name" onChange={handleChange} /></td>
        </tr>
        <tr className="form-group">
          <td><b><label htmlFor="email">E-mail: <font style={{color:'red'}}>*</font></label></b></td>
          <td><input type="email" name="email" value={email} id="email" placeholder="Enter your e-mail" onChange={handleChange} required/><spna id='emval' style={{color:'red'}}></spna></td>
        </tr>
        <tr className="form-group">
          <td><b><label htmlFor="password">Password:<font style={{color:'red'}}>*</font></label></b></td>
          <td><input type="password" name="pass1" value={pass1} id="password1" placeholder="Enter your password" onChange={handleChange} required/></td>
        </tr>
        <tr className="form-group">
         <td> <b><label htmlFor="password">Confirm Password:<font style={{color:'red'}}>*</font></label></b></td>
         <td><input type="password" name="pass2" value={pass2} id="password2" placeholder="Enter your password" onChange={handleChange} required/><spna id='epass' style={{color:'red'}}></spna></td>
        </tr>
        <tr className="form-group">
         <td><b> <label htmlFor="phone_no">Phone number:</label></b></td> 
         <td><input type="tel" name="phone" id="phone_no" value={phone} placeholder="Enter your phone number" onChange={handleChange} /><spna id='phone' style={{color:'red'}}></spna></td> 
        </tr>
        <tr className="form-group">
          <td><b> <label htmlFor="date">Date of birth:</label> </b></td>
         <td><input type="date" name='date' value={date} id="date" onChange={handleChange} /></td> 
        </tr>
        <tr className="form-group">
          <td><b><label htmlFor="name">Choose Subject:</label></b></td>
          <td><input type="text" name="subject" value={subject} id="subject" placeholder="Enter subjects you want to choose" onChange={handleChange} /></td>
        </tr>
        <tr className="form-group">
         <td><b> <label htmlFor="stream">Enter your stream:</label></b></td>
       <td>  <select id="stream" name="stream" onChange={handleChange}>
            <option value="CSE" onChange={handleChange}>CSE</option>
            <option value="IT" onChange={handleChange}>ISE</option>
            <option value="ECE" onChange={handleChange}>ECE</option>
            <option value="EEE" onChange={handleChange}>EEE</option>
            <option value="MECH" onChange={handleChange}>MECH</option>
          </select>
        </td> 
        </tr>
        <tr className="form-group">
         <td><b><label htmlFor="message">Message:</label></b> </td> 
          <td><textarea id="message"  cols="30" name="message" value={message} rows="5" onChange={handleChange}></textarea></td>
        </tr>
        <tr className="form-group btn1">

         <td colSpan='2'><span>confrim to delete</span><br></br>
           <button type="submit" className="btn btn-secondary" onClick={submit}>Delete</button></td> 
        </tr>
        </table>
        </fieldset>
        
      </form>
    </div>
    </div>
  )
}

export default Deletecourse
