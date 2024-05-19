import { Route,Routes} from 'react-router-dom'
import Dashboard  from '../Sidebar/Pages/Dashboard'
import Products from '../Sidebar/Pages/Products'
import Pos from '../Sidebar/Pages/Pos'
import Customer from '../Sidebar/Pages/Customer'
import Customerlist from "../Sidebar/Pages/Customerlist";
import Employee from '../Sidebar/Pages/Employee'
import Employeelist from '../Sidebar/Pages/Employeelist'

function PageContent(){
    return(
        <div className="PageContent">
           {/* <AppRouter/> */}
           
           <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/Customer' element={<Customer/>}/>
                <Route path='/Products' element={<Products/>}/>
                <Route path='/Pos' element={<Pos/>}/>
                <Route path='/Customerlist' element={<Customerlist/>}/>
                <Route path='/Employee' element={<Employee/>}/>
                <Route path='/Employeelist' element={<Employeelist/>}/>
                
                {/* <Route path='Products' element={</>}/> */}
            </Routes>
            
           <div className="box">
           
           </div>
        </div>
    )
}
export default PageContent
