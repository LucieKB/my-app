import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "underline",
    color: "darkgreen",
  };



function NavBar(){
    return (
        <nav>
          {/* <NavLink to="/"
          style={linkStyles}
          activeStyle={{
            color: "lawngreen",
          }}
         >
            Home
          </NavLink> */}
          <NavLink  to="/newForm"
          style={linkStyles}
          activeStyle={{
            color: "lawngreen",
          }}>
            Add a New Student
          </NavLink>
          <NavLink  to="/participants"
          style={linkStyles}
          activeStyle={{
            color: "lawngreen",
          }}>
            Students List
          </NavLink>
          {/* <NavLink to="/groups"
          style={linkStyles}
          activeStyle={{
            color: "lawngreen",
          }}>
            Create Groups
          </NavLink> */}
        </nav>
      );
    }
    
    export default NavBar;

        {/* <NavLink to="/"
          style={linkStyles}
          activeStyle={{
            color: "lawngreen",
          }}
         >
            Home
          </NavLink> */}
          // <NavLink  to="/newForm"
          // style={linkStyles}
          // activeStyle={{
          //   color: "lawngreen",
          // }}>
          //   Add a New Student
          // </NavLink>
          // <NavLink  to="/participants"
          // style={linkStyles}
          // activeStyle={{
          //   color: "lawngreen",
          // }}>
          //   Students List
          // </NavLink>
          {/* <NavLink to="/groups"
          style={linkStyles}
          activeStyle={{
            color: "lawngreen",
          }}>
            Create Groups
          </NavLink> */}
