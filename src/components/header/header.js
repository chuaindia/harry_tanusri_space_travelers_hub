import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '..//image/logo.png';

const Header = () => {
  const links = [
    {
      id: 1,
      text: 'Rocket',
      path: '/',
    },
    {
      id: 2,
      text: 'Mission',
      path: '/missions',
    },
    {
      id: 3,
      text: 'My profile',
      path: '/profile',
    },
  ];

  const navList = links.map((link) => (
    <li key={link.id} className="navlink">
      <NavLink className="navLink" to={link.path}>{link.text}</NavLink>
    </li>
  ));

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img className="navLogo" src={logo} alt="Logo" />
          <a className="navbarBrand" href="/">Space Traveler's Hub</a>
          <button className="navbarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbarTogglerIcon" />
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbarnav">
              {navList}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;