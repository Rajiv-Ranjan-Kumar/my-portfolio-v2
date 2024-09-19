'use client';

import { useState, useContext } from 'react';
import SectionRefsContext from '@/app/SectionRefsContext';
import styles from '../assets/contactUs.module.scss';

// ContactUs component for displaying the "Contact Us" section
export default function ContactUs() {
    // Get the ref from context
    const { contactSection } = useContext( SectionRefsContext );

    return (
        <section className={styles.contactUsSection} ref={ contactSection }>
            {/* Contact Us section heading with a brief description */}
            <div className={styles.contactUsHeading}>
                <h2>Contact <span>Us</span></h2>
                <p>The &apos;Contact Us&apos; page allows users to get in touch with me directly. Whether you have a question, feedback, or need assistance, this form is the gateway to addressing your concerns and suggestions. Please fill out your details, and we will get back to you as soon as possible.</p>
            </div>

            {/* Form container holding the contact form */}
            <div className={styles.formsContainer}>
                <form action="">
                    <h4>Message</h4>

                    {/* Form field for the user's name */}
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Your Name :</label>
                        <input 
                            type="text" 
                            name="name" 
                            id='name' 
                            autoComplete='name' 
                            placeholder='Enter your name' 
                            required 
                        />
                    </div>

                    {/* Form field for the user's email */}
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Your Email :</label>
                        <input 
                            type="email" 
                            name="email" 
                            id='email' 
                            autoComplete='email' 
                            placeholder='Enter your email' 
                            required 
                        />
                    </div>

                    {/* Form field for the user's message */}
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Your Message :</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            placeholder='Write Message' 
                            required 
                        ></textarea>
                    </div>

                    {/* Submit button to send the form */}
                    <button type="button">Send</button>
                </form>
            </div>
        </section>
    );
}
