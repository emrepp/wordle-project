import React from "react";

import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#d4ace3",
    textDecoration: "none",
    color: "peach",
    
  };
export default function NavBar() {
  return (
    <div className="header">
      <NavLink
        to="/wordle-project"
        exact="true"
        style={linkStyles}
        
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact="true"
        style={linkStyles}
       
      >
        About
      </NavLink>
      <NavLink
        to="/addWord"
        exact="true"
        style={linkStyles}
       
      >
        +Word
      </NavLink>

     
      
    </div>
  );
}


