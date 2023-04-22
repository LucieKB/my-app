import React from "react";
import { NavLink } from "react-router-dom";




function NavBar(){
    return (
        <nav>
          <NavLink exact to="/">
            <strong>Home</strong>
          </NavLink> 
          <NavLink  to="/newForm">
            <strong>Add a New Student</strong>
          </NavLink>
          <NavLink  to="/studentList">
            <strong>Students List</strong>
          </NavLink>
        </nav>
      );
    }
    
export default NavBar;


