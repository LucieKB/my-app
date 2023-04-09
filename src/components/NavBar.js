import React from "react";
import { NavLink } from "react-router-dom";




function NavBar(){
    return (
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink> 
          <NavLink  to="/newForm">
            Add a New Student
          </NavLink>
          <NavLink  to="/studentList">
            Students List
          </NavLink>
          <NavLink to="/studentGroups">
            My Groups
          </NavLink> 
        </nav>
      );
    }
    
export default NavBar;


