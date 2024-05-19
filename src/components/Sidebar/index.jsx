import './Pages/Css/Sidebar.css'
import { Link} from 'react-router-dom'
import { BsBoxes,BsPersonLinesFill,BsBoxSeamFill} from "react-icons/bs";
import { FaShopify } from "react-icons/fa6";


function Sidebar(){
    return(
        
        <div  className="Sidebar">
        
            {/* <ul>
                <li href="#" >Dashboard</li>
                <li href="#" >Products</li>
                <li href="#" >POS</li>
            </ul> */}
            
            <ul>
                <li><Link className="sidelist" to="/"><BsBoxes/> Dashboard</Link> </li>
                {/* <div><span>PRODUCT MANAGEMENT</span></div> */}
                <li><Link className="sidelist" to="Products"><BsBoxSeamFill/> Products</Link></li>
                {/* <div><span>ORDER MANAGEMENT</span></div> */}
                <li><Link className="sidelist" to="Pos"><FaShopify /> POS</Link></li>
                {/* <div><span>CUSTOMER MANAGEMENT</span></div> */}
                <li><Link className="sidelist" to="Customer"><BsPersonLinesFill /> Customer</Link></li>
                <li><Link className="sidelist" to="Customerlist"><BsPersonLinesFill /> Customer List</Link></li>
                {/* <div><span>HR MANAGEMENT</span></div> */}
                <li><Link className="sidelist" to="Employee"><BsPersonLinesFill /> Employee</Link></li>
                <li><Link className="sidelist" to="Employeelist"><BsPersonLinesFill /> Employee List</Link></li>
            </ul>
            
            
           
            
            
            
            
        </div>
        
    )
}
export default Sidebar


