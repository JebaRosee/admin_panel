import '..'
import { BsBoxSeamFill } from "react-icons/bs";


function Products(){
    return(
        <div className="Products">
            <div className='Head'><h1 ><BsBoxSeamFill/> Products</h1></div>
            
            <div className="Container">
             <div className="content">
                <div className="input-box">
                <label htmlFor="name">category <span>*</span></label>
                    <select>
                        <option value="">Select </option>
                    </select> 
                </div>
                <div className="input-box">
                    <label htmlFor="name">Product Name<span>*</span></label>
                    <input type="text"  placeholder='Type Here..' name='fullname'/>
                </div>
                <div className="input-box">
                <label htmlFor="name">Unit <span>*</span></label>
                    <select>
                        <option value="">Select </option>
                    </select> 
                </div>
                <div className="input-box">
                    <label htmlFor="name">Price<span>*</span></label>
                    <input type="number"  placeholder='Type Here..' name='fullname'/>
                </div>
                <div className="input-box">
                    <label htmlFor="name">Qty<span>*</span></label>
                    <input type="number"  placeholder='Type Here..' name='fullname'/>
                </div>
                <div className="input-box">
                    <label htmlFor="name">tax<span>*</span></label>
                    <input type="number"  placeholder='Type Here..' name='fullname'/>
                </div>
        </div>
        <div className="btn-container">
             <button>Save</button>
             <button>Clear</button>
        </div>
            </div>
           
        </div>
    )
}
export default Products