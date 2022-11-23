import React from 'react';
import { NavLink, Nav, NavMenu } from './navbarElements';
import planet from '../assets/planet.png';
import '../App.css';

const Navbar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavLink className="nav-logo">
          <img src={planet} className="planet" alt="planet" />
          <h1>Space Travelers Hub</h1>
        </NavLink>
      </NavMenu>
      <NavMenu className="nav-links">
        <NavLink to="/" activeStyle>
          Rockets
        </NavLink>
        <NavLink to="/mission">
          Missions
        </NavLink>
        <NavLink to="/profile">
          My Profile
        </NavLink>
      </NavMenu>
    </Nav>
  </>
);

export default Navbar;
