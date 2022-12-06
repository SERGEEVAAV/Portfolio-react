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
            {/* <div className="header__logo">
                <a href="./index.html"className="header__logo__title"><strong>Freelance</strong> portfolio</a>
            </div>            */}
           <Navbar/>                                             
        </div>
    </header>
     );
}
 
export default Header;