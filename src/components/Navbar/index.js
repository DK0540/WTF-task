import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElement";
import "./logo.css";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to ="/">
       <img className='logo' src={require("../../Images/logo2.png")} alt="logo" />
      </NavLink>
      <Bars/>
      <NavMenu>
        <NavLink to="/about" activeStyle>
            About
        </NavLink>
        <NavLink to="/Service" activeStyle>
            Service
        </NavLink>
        <NavLink to="/gym" activeStyle>
            Gyms
        </NavLink>
        <NavLink to="/Nutrition" activeStyle>
            Nutrition
        </NavLink>
        <NavLink to="/Signup" activeStyle>
            Sign up
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to ="/signUp">Login</NavBtnLink>
      </NavBtn>
    </Nav>
  )
}

export default Navbar;
