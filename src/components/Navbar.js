import React from 'react';
import { NavLink, Nav, NavMenu } from './navbarElements';
import planet from '../page/planet.png';
import '../App.css';

const Navbar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavLink className="NavLogo">
          <img src={planet} className="Planet" alt="planet" />
          <h1>Space Travelers Hub</h1>
        </NavLink>
      </NavMenu>
      <NavMenu className="NavLinks">
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
