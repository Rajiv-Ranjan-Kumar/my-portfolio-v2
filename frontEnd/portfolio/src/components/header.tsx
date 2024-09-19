'use client';

import { useState, useContext } from 'react';
import SectionRefsContext from '@/app/SectionRefsContext';
import styles from '../assets/header.module.scss';

export default function Header() {

  // State to toggle the menu button
  const [isMenuButton, setIsMenuButton] = useState(false);
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home'); // Add state for active link

  const { homeSection, aboutSection, skillsSection, servicesSection, projectsSection, contactSection, } = useContext(SectionRefsContext);


  // // Smooth scroll handler
  // const scrollHandler = (sectionRef: any, section: string) => {
  //   if (sectionRef && sectionRef.current) {
  //     sectionRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //     setActiveSection(section); // Set the active link based on section
  //   }
  // };

  // Scroll handler with type safety, fallback, and debouncing
  let isScrolling = false;

  const scrollHandler = (sectionRef: React.RefObject<HTMLElement>, section: string) => {
    if (isScrolling) return; // Prevent multiple triggers
    if (!sectionRef || !sectionRef.current) return; // Safety checks

    // Set scrolling flag
    isScrolling = true;

    // Smooth scroll to the target section
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Set active section for styling or other logic
    setActiveSection(section);

    // Fallback for browsers that don't support `scrollIntoView` properly
    if (!('scrollBehavior' in document.documentElement.style)) {
      const offsetTop = sectionRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    // Reset the scrolling flag after scrolling finishes (add delay based on scroll speed)
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Adjust the timeout duration based on expected scroll time
  };



  return (
    <header className={styles.headerMainContainer}>
      {/* Logo link  */}
      <a href="/" className={styles.logo}>Portfo<span>lio</span></a>

      {/* Navigation links with conditional rendering for menu visibility */}
      <nav className={isMenuButton ? `${styles.nav} ${styles.navDisplay} ${styles.open}` : isMenuButtonClicked? `${ styles.nav } ${styles.navDisplay} ${ styles.close }`: styles.nav} >
        <span onClick={() => scrollHandler(homeSection, 'home')} className={activeSection == 'home' ? styles.active:''}>Home</span>
        <span onClick={() => scrollHandler(aboutSection, 'about')} className={activeSection == 'about' ? styles.active:''}>About</span>
        <span onClick={() => scrollHandler(skillsSection, 'skill')} className={activeSection == 'skill' ? styles.active:''}>Skills</span>
        <span onClick={() => scrollHandler(servicesSection, 'services')} className={activeSection == 'services' ? styles.active:''}>Services</span>
        <span onClick={() => scrollHandler(projectsSection, 'projects')} className={activeSection == 'projects' ? styles.active:''}>Projects</span>
        <span onClick={() => scrollHandler(contactSection, 'contact')} className={activeSection == 'contact' ? styles.active:''}>Contact</span>
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
