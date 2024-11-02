
import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// npm i axios
// npm i react-toastify
const Register = () => {
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
  
    let {name,email,pass1,pass2,phone,subject,date,stream,message}=state
    let handleChange=(e)=>{
      let {name,value}=e.target 
      setState({...state,[name]:value})
    
    }
  let submit=async(e)=>{
    e.preventDefault();
    try{
      let payload={...state};
      
     
     
    
      let emailval=document.getElementById('email').value
      let val1=emailval.endsWith('@gmail.com');
      if(!val1){
        document.getElementById('emval').innerHTML="Please Enter Valid Email";
      }
      let pass1=document.getElementById('password1').value
      let pass2=document.getElementById('password2').value
      let val2=pass1!=pass2;
      if(val2){
        document.getElementById('epass').innerHTML="Password Missmatched please enter valid password"
      }
      let num=document.getElementById('phone_no').value
      let val3=(typeof(num)!==Number) && (num.length!=10);
      if(val3){
        document.getElementById('phone').innerHTML="Data should be number which is of length 10"
      }
  
      if((!val1) || val2 || val3 ){
        toast.error("Oops! Registration is not successfully completed",{
          position:"top-right",
          theme:'dark'
        })
      }
      else{
        let {data}=await axios.post("http://localhost:5000/course",payload)
        toast.success("Wow! You successfully registered",{
          position:"top-right",
          theme:'dark'
        })
        console.log({data})
        navigate('/studentlist')
      }
      setState( {
        name:'',
        email:'',
        pass1:'',
        pass2:'',
        phone:'',
        date:'',
        stream:'',
        message:''
      })
    }
    catch(e){
      console.log(e);
      }
  }
  return (
    <div>
    <center><h1 style={{margin:'20px'}}>REGISTRATION</h1></center>
    <div id="contact-box1">
      <form onSubmit={submit}>
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
         <td colSpan='2'> <button type="submit" className="btn btn-secondary" onClick={submit}>Register</button></td> 
        </tr>
        </table>
        </fieldset>
      </form>
    </div>
    <ToastContainer></ToastContainer>
  </div>
  )
}

export default Register
