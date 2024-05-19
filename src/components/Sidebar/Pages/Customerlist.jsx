import React from 'react'
import { BsSearch,BsPersonLinesFill} from "react-icons/bs";
// import { AiOutlineSearch } from "react-icons/ai";

import './Css/Customerlis.css';
function Customerlist() {
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
        <h1 ><BsPersonLinesFill /> Customer List</h1>
        </div>
        <div>
        
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Mobile Number</th>
                <th>city</th>
                <th>State</th>
                <th>Action</th>
                
            </tr>
            </thead>
            <tbody>
                {/* {data.map(x=>{
                    return(
                        <React.Fragment>
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.emp_name}</td>
                            <td>{x.emp_num}</td>
                        </tr>
                        </React.Fragment>
                    )})} */}
            
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Customerlist