"use client"; // Indicates that this is a client-side component

import { useRef, useState } from "react";

// Importing necessary assets: the 'about' image and the SCSS styles for the component
import aboutImage from "../../public/rajiv-removebg-preview.png";
import styles from "../assets/about.module.scss";



/**
 * Functional component representing the 'About Me' section of the webpage.
 * This section includes a personal image, a brief biography, and a link for additional information.
 */
export default function About() {

  const [isFullText, setIsFullText] = useState(false);

  const scrollableRef = useRef<HTMLDivElement>(null);

  const showAllText = (event:boolean) =>{
    setIsFullText(event);
    if (!event && scrollableRef.current) {
      scrollableRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    // Main section with a unique ID and styling from the imported SCSS file
    <section className={styles.aboutSection} id="about">
      {/* Wrapper for the content within the 'About' section */}
      <div className={styles.aboutContentSection}>

        {/* Left section for displaying the image */}
        <div className={styles.aboutImageSection}>
          {/* Div containing the image with its associated styles */}
          <div className={styles.aboutImage}>
            <img src={aboutImage.src} alt="about image" />
          </div>
        </div>

        {/* Right section for displaying text content about the developer */}
        <div className={styles.aboutText}>
          {/* Header for the 'About Me' section */}
          <h2>
            About <span>Me</span> {/* 'Me' is styled differently for emphasis */}
          </h2>

          {/* Container for the detailed text content */}
          <div ref={scrollableRef} className={ !isFullText? styles.textContainer: `${styles.textContainer} ${styles.textContainerFull}`}>
            <h3>Full Stack Developer</h3> 

            {/* Paragraph detailing the developer's skills and expertise */}
            <p>
              I am a Full Stack Developer with experience in both front-end and
              back-end technologies. I specialize in creating dynamic, responsive,
              and user-centric web applications. On the front-end, I work with
              HTML5, CSS3, JavaScript, and modern frameworks like React.js and
              Next.js to build engaging and visually appealing user interfaces. My
              designs focus on user experience, ensuring that the applications I
              build are intuitive and functional across all devices and platforms.
              On the back-end, I utilize Python, Django, Django-Ninja, FastAPI,
              and PostgreSQL to develop robust and scalable server-side
              applications. I focus on delivering high-performance APIs and secure
              authentication systems, ensuring the smooth operation of web
              applications. I am also proficient in version control using Git and
              GitHub, which helps manage and track code efficiently during
              collaboration. My aim is to continuously improve and stay up-to-date
              with the latest technologies to create innovative solutions that
              meet user and business needs.
            </p>
          </div>

          {isFullText ? (
            // If isFullText is true, show a "Read less" button with an upward chevron
            <button type="button" onClick={()=>showAllText(false)}>
              <p>Read less</p>

              <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
              </svg>
            </button>
          ):(  
            // If isFullText is false, show a "Read more" button with a downward chevron
            <button type="button" onClick={()=>showAllText(true)}>
              <p>Read more</p>

              <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className={`${styles.svg1} bi bi-chevron-down`} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
