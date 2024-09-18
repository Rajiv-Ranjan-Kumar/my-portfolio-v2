"use client";

import React, { lazy, useEffect, useState } from "react";

const SocialMedia = lazy(() => import("@/components/socialMedia"));

import img from "../../public/rajiv-removebg-preview.png"; // Importing profile image
import styles from "../assets/homeSection.module.scss"; // Importing styles

export default function HomeSection() {
  // State to manage different titles (roles)
  const [destination, setDestination] = useState([
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
  ]);

  // State for the text being displayed
  const [displayText, setDisplayText] = useState("");
  
  // State for managing the index of the current word in 'destination'
  const [index, setIndex] = useState(0);
  
  // State for the current character index in the selected word
  const [charIndex, setCharIndex] = useState(0);

  // Effect to handle typing animation logic
  useEffect(() => {
    // If we haven't reached the last word
    if (index < destination.length) {
      // If we haven't typed the whole word yet
      if (charIndex < destination[index].length) {
        const timeout = setTimeout(() => {
          // Update display text by adding the next character
          setDisplayText((prev) => prev + destination[index][charIndex]);
          setCharIndex(charIndex + 1); // Move to the next character
        }, 250); // 250ms delay for each character
        return () => clearTimeout(timeout); // Clear timeout on cleanup
      } else {
        // If the whole word is typed, wait before resetting for the next word
        const timeout = setTimeout(() => {
          setDisplayText(""); // Clear the display text for the next word
          setCharIndex(0); // Reset character index for next word
          setIndex(index + 1); // Move to the next word in the destination array
        }, 2000); // 2 seconds delay between words
        return () => clearTimeout(timeout); // Clear timeout on cleanup
      }
    } else {
      setIndex(0); // Restart the animation once all words are displayed
    }
  }, [charIndex, index, destination]); // Dependencies for re-triggering the effect

  return (
    <section className={styles.homeSection} id="home">
      <div className={styles.homeSectionContent}>
        <h3>Hi, Myself</h3>
        <h1>Rajiv Ranjan Kumar</h1>
        <div className={styles.typingText}>
          <h3>And I&apos;m a&nbsp;</h3>
          <div className={styles.typingText}>
            <span>{displayText}</span> {/* Display the animated typing text */}
          </div>
        </div>
        <p>
          I specialize in creating dynamic, user-friendly web applications, with
          expertise in both front-end and back-end technologies, delivering
          high-quality solutions tailored to meet business needs.
        </p>

        {/* Social Media Buttons */}
        <SocialMedia borderBottom={false} />

        {/* Download CV button */}
        <a href="#" className={styles.downloadBtn}>
          Download CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={styles.downloadIcon}
          >
            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
        </a>
      </div>

      {/* Profile image section */}
      <div className={styles.imageSection}>
        <div className={styles.image}>
          <img src={img.src} alt="profile pic" />
        </div>
      </div>
    </section>
  );
}
