import NavLinks from "./NavLinks";
import "./../navbar/style.css";
import { useState } from "react";

import { Component } from "react";

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const hamburger = <div className="hamburger" onClick={() => setOpen(!open)}></div>
  
  const closeHamburger = <div className="close__hamburger" onClick={() => setOpen(!open)}></div>

  const closeMobileMenu = () => setOpen(false);
  return ( 
    <nav className="mobilenavigation">
      <div className="hamburger" onClick={() =>setOpen(!open)}>
        <span></span>
      </div>
      {open ? closeHamburger : hamburger}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </nav>
    
  );
}
 
export default MobileNavigation;