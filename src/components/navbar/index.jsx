import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';
import { useSpring, animated } from 'react-spring';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const props = useSpring({
    marginTop: showNav ? '2rem' : '-500px',
  });

  return (
    <div className={styles.Navbar}>
      <div className={styles.links}>
        <NavLink activeClassName={styles.active} exact to="/">
          Me
        </NavLink>
        <NavLink activeClassName={styles.active} exact to="/resume">
          Resume
        </NavLink>
        <NavLink activeClassName={styles.active} exact to="/projects">
          Projects
        </NavLink>
        <NavLink activeClassName={styles.active} exact to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName={styles.active} exact to="/resources">
          Resources
        </NavLink>
      </div>
      <div className={styles.mobileNav}>
        <animated.div style={props}>
          <div className={styles.m_links}>
            <NavLink activeClassName={styles.active} exact to="/">
              Me
            </NavLink>
            <NavLink activeClassName={styles.active} exact to="/resume">
              Resume
            </NavLink>
            <NavLink activeClassName={styles.active} exact to="/projects">
              Projects
            </NavLink>
            <NavLink activeClassName={styles.active} exact to="/contact">
              Contact
            </NavLink>
            <NavLink activeClassName={styles.active} exact to="/resources">
              Resources
            </NavLink>
          </div>
        </animated.div>
      </div>
      <div onClick={() => setShowNav(!showNav)} className={styles.hamburger}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;