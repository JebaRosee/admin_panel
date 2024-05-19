import React, { useState } from 'react'
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import './Login.css'
import { Link} from 'react-router-dom'
import {emailValidator,passwordValidator} from './RegexValidator';

function Login() {

const [input,setInput]= React.useState({email:"",password:""});
const [errmsg, seterrmsg] = React.useState('')
const [Succmsg, setSuccmsg] = React.useState('')

const handleChange =(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
    console.log("Form:",input);
}

const formsub=async(e)=>{
    setSuccmsg('');
    e.preventDefault();
    if(!emailValidator(input.email))
        return(seterrmsg("Please Enter valid Email Id"));
    
    if(!passwordValidator(input.password))
        return(seterrmsg("Password should have minimum 8 characters to 12 Characters with the combination of Uppercase,Lowercase,Numbers and SpecialCharacters"));

        setSuccmsg("Sucessfully Validated!!")
    
};
  return (
    <div className='login'>
        <div className="wrapper">
            <h1>Login Here!</h1>
            <p>Welcome our Fashion world</p>
            <form onSubmit={formsub}>
                {errmsg.length > 0 && <div style={{color:'red',marginBottom :'10px'}}>{errmsg}</div>}

                {Succmsg.length > 0 && <div style={{color:'green',marginBottom :'10px'}}>{Succmsg}</div>}
                <input type="text" onChange={handleChange} name='email' placeholder="Enter userid"/>

                <input type="password" onChange={handleChange} name='password' placeholder="Password"/>

                {/* {seterrmsgpassword.length > 0 && <div style={{color:'red',marginBottom :'10px'}}>{seterrmsgpassword}</div>} */}
                <p className="forgot">
                    <a href="#">Forgot Password</a>
                </p>

                <button className='login-btn'>Log in</button>
            </form>

                <p className="or">
                    -- or continue with --
                </p>
                <div className="icons">
                    <i className='fab fa-google'><AiOutlineGooglePlus className='i'/></i>
                    <i className='fab fa-facebook'><BsFacebook className='i'/></i>
                </div> 

                <div className="not-acc">
                Create a Account?  <Link to="Register">Register Now</Link>
                </div>

        </div>
    </div>
  )
}

export default Login