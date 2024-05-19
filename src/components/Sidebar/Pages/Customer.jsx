import React from 'react'
import { BsPersonLinesFill } from "react-icons/bs";
import './Css/Customer.css';
import { Link} from 'react-router-dom'


function Customer() {
  return (
    <div>
        <div className='Head'> 
        <h1 ><BsPersonLinesFill /> Customer</h1>
        <button className='customerbtn'><Link className="customerbtn" to="Customerlist">Show Customer</Link></button>
        </div>
       
        
    <div className="Container">
    <form action='' method='post'>
    
    <div className="content">
        <div className="input-box">
            <label htmlFor="name">Full Name<span>*</span></label>
            <input type="text"  placeholder='Type Here..' name='fullname'/>
        </div>
        <div className="input-box">
            <label htmlFor="name">Phone Number<span>*</span></label>
            <input type="text"  placeholder='Type Here..' name='PhNum'/>
        </div>
        <div className="input-box">
            <label htmlFor="name">Door Number<span>*</span></label>
            <input type="text"  placeholder='Type Here..' name='doornum'/>
        </div>
        <div className="input-box">
            <label htmlFor="name">Street Name<span>*</span></label>
            <input type="text"  placeholder='Type Here..' name='StreetName'/>
        </div>
        <div className="input-box">
            <label htmlFor="name">Land Mark<span>*</span></label>
            <input type="text"  placeholder='Type Here..' name='Landmark'/>
        </div>
        <div className="input-box">
            <label htmlFor="name">Pin Code<span>*</span></label>
            <input type="text"  placeholder='Type Here..' name='pincode'/>
        </div>
        <div className="input-box">
            <label htmlFor="name">City<span>*</span></label>
            {/* <input type="text"  placeholder='Type Here..' name='required'/> */}
           <select>
                <option value="">Select City</option>
                <option value="">Tuticorin</option>
                <option value="">Chennai</option>
           </select> 
            
        </div>
        <div className="input-box">
            <label htmlFor="name">State <span>*</span></label>
            <select>
                <option value="">Select State</option>
                <option value="">Tamil Namdu</option>
                <option value="">Maharashtra</option>
           </select> 
        </div>
        {/* <span className="gender-title">Gender</span>
        <div className="gender-category">
            <input type="radio" name='gender' id='male'/>
            <label htmlFor="gender">Male</label>
            <input type="radio" name='gender' id='female'/>
            <label htmlFor="gender">Female</label>
            <input type="radio" name='gender' id='others'/>
            <label htmlFor="gender">Others</label>
        </div> */}
    </div>
    <div className="btn-container">
    <button>Save</button>
    <button>Clear</button>
    </div>
    
    
    </form>
    
    </div></div>
  )
}

export default Customer