import NavLinks from "./NavLinks";
import "./../navbar/style.css";
import { useState } from "react";
import { Component } from "react";

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);
  return ( 
    <nav className="mobilenavigation">
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
      </div>
      {open && <NavLinks/>}
    </nav>
    
  );
}
 
export default MobileNavigation;