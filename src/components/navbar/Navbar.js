import "./../navbar/style.css";

import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Navbar = () => {

//    const activeLink = "nav-list__link nav-list__link--active";
//    const normalLink = "nav-list__link";

    return ( 
        <div className="navbar">
            <MobileNavigation/>
            <Navigation/>

        </div>
        // <nav className="header__navigation">
        //             <ul className="nav-list">
        //                     <li><NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink></li>                                                                                          
                            
        //                     <li><NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink></li>                                                        
  
        //                     <li><NavLink to="/skills" className={({isActive}) => isActive ? activeLink : normalLink}>Skills</NavLink></li>

        //                     <li><NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>
                        
        //             </ul>
        //             <div className="hamburger">
        //                 <span></span>
        //             </div>
        //         </nav>
                

     );
}
 
export default Navbar;