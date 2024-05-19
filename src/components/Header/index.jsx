import { BsChatSquareTextFill,BsBellFill,BsFillBrightnessHighFill} from "react-icons/bs";
import logo  from './logo1.png';
function Header(){
    return(
        <div className="Header">
            <img src={logo} className='Header-logo' alt="logo" />
            <h1>Admin Dashboard</h1>
            <div>
            <BsChatSquareTextFill className="icon1" />
            <BsBellFill className="icon2"/>
            <BsFillBrightnessHighFill className="icon2"/>

            </div>
        </div>
    )
}
export default Header