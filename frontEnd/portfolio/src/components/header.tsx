'use client';

import { useState } from 'react';
import styles from '../assets/header.module.scss';

export default function Header() {

  // State to toggle the menu button
  const [isMenuButton, setIsMenuButton] = useState(false);
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false);

  return (
    <header className={styles.headerMainContainer}>
      {/* Logo link  */}
      <a href="/" className={styles.logo}>Portfo<span>lio</span></a>

      {/* Navigation links with conditional rendering for menu visibility */}
      <nav className={isMenuButton ? `${styles.nav} ${styles.navDisplay} ${styles.open}` : isMenuButtonClicked? `${ styles.nav } ${styles.navDisplay} ${ styles.close }`: styles.nav} >
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#services'>Services</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>

      {/* Menu button (hamburger icon) for mobile view, with toggle effect */}
      <div className={isMenuButton ? `${styles.menuButton} ${styles.active}` : styles.menuButton} 
           onClick={() => {setIsMenuButtonClicked(true);setIsMenuButton(!isMenuButton);}}>
        <div className={styles.pii}></div>
        <div className={styles.pii}></div>
        <div className={styles.pii}></div>
      </div>
    </header>
  )
}
