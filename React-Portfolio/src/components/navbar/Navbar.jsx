import React,{ useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';


export const Navbar = () => {
    return ( <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className= { styles.menuBtn } src = { getImageUrl("nav/menuIcon.png")} alt="menu-button" />
            <ul className={styles.menuItems}>
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>

    </nav>
    );
};