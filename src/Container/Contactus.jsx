import React from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';


const Contactus = () => {
    let navigate= useNavigate();
    let handlesubmit=(e)=>{
         e.preventDefault();
         navigate('/register')
    }
  return (
    <div>
     
     <center><h1 style={{margin:'20px'}}>CONTACT US</h1></center>
   <div id="contact-box">
    <form action="/" method="post" onSubmit={handlesubmit}>
    <fieldset id="fied" className='flex'>
            {/* <legend>Form</legend> */}
            <table cellPadding="10px" cellSpacing="10px">
                <tr>
                    <td><label htmlFor="name"><b>USER NAME:</b></label></td>
                    <td><input type="text" name="name" id='name'className='logname-1' placeholder='Enter your name'/></td>
                </tr>
                <tr>
                    <td><label htmlFor="phone_no"><b>PHONE NO:</b></label></td>
                    <td><input type="tel" name="phone_no" id="phone_no" className='logname-1'   placeholder='Enter your password' /></td>
                </tr>
                <tr>
                    <td><label htmlFor="msg"><b>Send Queries:</b></label></td>
                    <td><textarea cols="10" rows="5" name='msg' className='logname-1'>
                        </textarea></td>
                </tr>
                <tr id="but">
                    <td colSpan="2">
                    <div class="form-group btn1">
        <button type="submit" class="btn btn-secondary">Submit</button>
        </div>
                    </td>
                </tr>
            </table>
            <div id='map'>
                
             
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.029090101938!2d77.54134044056471!3d12.98737075620171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b94643243%3A0x40375a113400fb58!2sJSpiders%20Rajajinagar!5e0!3m2!1sen!2sin!4v1728821223807!5m2!1sen!2sin" width="300" height="200"></iframe>
            <span className='text'> 
                <p>for any queries ,<br></br>please contact our support team at<br></br> <a href='mailto:jspider@gmail.com'>jspidermail@gmail.com</a></p>
                <p>Jspiders Rajiajinagar , 1234 ,<br></br> Rajajinagar , India -560001</p>
                <p>Phone : +91 567890876</p>
                <p>website: www.jspiders.com</p>
               </span>
            </div>
        </fieldset>
    </form>
   </div>

</div>
  )
}

export default Contactus
