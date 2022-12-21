import "./../navbar/style.css";

import { NavLink } from "react-router-dom";
const NavLinks = (props) => {

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return ( 
    <ul className="nav-list">
      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink></li>                                                                                          
      
      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink></li>                                                        

      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/skills" className={({isActive}) => isActive ? activeLink : normalLink}>Skills</NavLink></li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>

    </ul> );
}
 
export default NavLinks;