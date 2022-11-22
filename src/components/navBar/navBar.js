import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbarWrapper}>
        <div className={styles.navbarContainer}>
          <img className={styles.navLogo} src="planet.png" alt="Logo" />
          <h1>Space Travelers Hub</h1>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <NavLink activeClassName={styles.active} className={styles.link} to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} className={styles.link} to="/missions">Missons</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} className={styles.profileLink} to="/myprofile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    );
}

export default NavBar;