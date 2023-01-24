import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
    <ul>
      <li> <NavLink to="/"  activeStyle={{color:"green"}}>
        Home
      </NavLink></li>
      <li> <NavLink to="/movies"  activeStyle={{color:"green"}}>
        Movies
      </NavLink></li>
      <li> <NavLink to="/directors"  activeStyle={{color:"green"}}>
        Directors
      </NavLink></li>
      <li> <NavLink to="/actors"  activeStyle={{color:"green"}}>
        Actors
      </NavLink></li>
    </ul>
    </div>
     
  )
}

export default NavBar;
