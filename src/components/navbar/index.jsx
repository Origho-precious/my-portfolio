import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <NavLink activeClassName={styles.active} exact to='/'>Me</NavLink>
            <NavLink activeClassName={styles.active} exact to='/projects'>Projects</NavLink>
            <NavLink activeClassName={styles.active} exact to='/contact'>Contact</NavLink>
        </div>
    );
}

export default Navbar;