import '..'
import { FaShopify } from "react-icons/fa6";


function Pos(){
    return(
        <div className="Pos">
            <div className='Head'> 
            <h1><FaShopify /> Pos</h1>
            </div>
        <div className="Container">
            <form action='' method='post'>
                <div className="content">
                    <div className="input-box">
                        <label htmlFor="name">Customer <span>*</span></label>
                        <select>
                            <option value="">Select </option>
                            
                        </select> 
                    </div>
                    <div className="input-box">
                        <label htmlFor="name">category <span>*</span></label>
                        <select>
                            <option value="">Select </option>
                            
                        </select> 
                    </div>
                    <div className="input-box">
                        <label htmlFor="name">Product <span>*</span></label>
                        <select>
                            <option value="">Select </option>
                            
                        </select> 
                    </div>
                    <div className="input-box">
                        <label htmlFor="name">Price<span>*</span></label>
                        <input type="text"  placeholder='Type Here..' name='pincode'/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="name">Qty<span>*</span></label>
                        <input type="text"  placeholder='Type Here..' name='pincode'/>
                    </div>
                    <div className="input-box">
                    <div className="btn-container ">
                        <button>Add</button>
                        <button>Clear</button>
                    </div>
                    </div>
                </div>
            </form>
        </div>
           
        </div>
    )
}
export default Pos