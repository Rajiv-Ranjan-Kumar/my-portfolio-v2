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
        <a href='#home' onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</a>
        <a href='#about' onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</a>
        <a href='#skills' onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</a>
        <a href='#services' onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</a>
        <a href='#projects' onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</a>
        <a href='#contact' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</a>
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
