import React, { useState } from 'react'
import { BsPersonLinesFill } from "react-icons/bs";
import './Css/Employee.css'
import axios from 'axios';


function Employee() {
  const [FormData, setFormData] = useState(
    {
      emp_name: "",
      emp_phone: "",
      emp_mail: "",
    }
  );

  const handleSubmit = async (e) => {

    console.log(FormData);
    e.preventDefault();
    try {
      // console.log(FormData);
      const response = await axios.post("http://localhost:8080/employee/save", FormData);
      console.log("post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  
  };

  const handleChange = (e) => {
    // console.log("Name :",e.target.name,"Value :",e.target.value);
    setFormData({ ...FormData, [e.target.name]: e.target.value });
    console.log("Form:", FormData)
  }



  return (
    <div>
      <div className='Head'>
        <h1 ><BsPersonLinesFill /> Employee</h1>

      </div>
      <div className="Container">
        <form onSubmit={handleSubmit}  >

          <div className="content">
            <div className="input-box">
              <label >Full Name<span>*</span></label>
              <input type="text" placeholder='Type Here..' name="emp_name" value={FormData.fullname} onChange={handleChange} />
            </div>
            <div className="input-box">
              <label >Mobile Number<span>*</span></label>
              <input type="text" placeholder='Type Here..' name="emp_phone" value={FormData.mobnum} onChange={handleChange} />
            </div>
            <div className="input-box">
              <label >Mail Id<span>*</span></label>
              <input type="text" placeholder='Type Here..' name="emp_mail" value={FormData.mailid} onChange={handleChange} />
            </div>
            <div className='upload-img'>
            <div className="input-box" >
              <label htmlFor="name">Image<span> *</span></label> 
           </div>
            <div className='upload'>
              <input type="file"  placeholder='Type Here..' name='fullname'/><br></br>
              <label className='uploadlabel' htmlFor="file">Upload image(.jpj .png files)</label>
            </div>
            </div>
          </div>

          <div className="btn-container">
            <button type="submit">Save</button>
            <button>Clear</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Employee;