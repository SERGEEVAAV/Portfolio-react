import Navbar from "../navbar/Navbar";
import "./style.css";

import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="header">
        <div className="wrapper header__wrapper">
            <NavLink to="/" className="header__logo__title">
            <strong>Freelance</strong> portfolio
            </NavLink>
           <Navbar/>                                             
        </div>
    </header>
     );
}
 
export default Header;