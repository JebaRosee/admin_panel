import React, { useEffect,useState } from 'react'
import axios from "axios"
import { BsPersonLinesFill,BsSearch,BsFillTrash3Fill,BsEyeFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";


function Employeelist() {
    const [data,setData]=useState([]);
    
    const fetchData = async(id) => {
        try {
            const response = await axios.get("http://localhost:8080/employee/list");
            setData(response.data);
        } catch (error) {
            console.log("Error fetchind data:",error);
        }
    };

    useEffect(()=>{
        fetchData();
    },[])

    const deletePost=async(id)=>{
        console.log(id);
        try{
            await axios.delete('http://localhost:8080/employee/delete?id='+id);
            console.log("Post deleted :",id);
            setData(data.filter((post) => post.id !== id));
        }catch(error){
            console.error("Error on deleting post : ",error);
        }
    };
  return (
    <div>
         <div class="container">
        <div class="search-box">
        <BsSearch className='search_icon'/>
        <input type="text" placeholder="Search..."/>
        <button className='search_btn'>Search</button>
        </div>
        <div class="download-options">
            <button onclick="downloadExcel()">Download Excel</button>
            <button onclick="downloadPDF()">Download PDF</button>
        </div></div>
        <div className=''> 
        <h1 ><BsPersonLinesFill /> Employee List</h1>
        </div>
        <div>
        
        <table>
            <thead>
                
            <tr>
                <th>Id</th>
                <th>Employee Name</th>
                <th>Mobile Number</th>
                <th>Mail Id</th>
                <th>Action</th>
                {/* <th>Action</th> */}
                
            </tr>
            </thead>
            <tbody>
                {data.map(x=>{
                    return(
                        <React.Fragment>
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.emp_name}</td>
                            <td>{x.emp_phone}</td>
                            <td>{x.emp_mail}</td>
                            <td className='download-options'>
                                <button onClick={() => deletePost(x.id)}><BsFillTrash3Fill/></button>
                                <button><AiFillEdit/></button>
                                <button><BsEyeFill/></button>
                                
                            </td>
                        </tr>
                        </React.Fragment>
                    )})} 
            
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Employeelist