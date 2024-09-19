"use client";

import { useState, useContext } from "react";
import SectionRefsContext from "@/app/SectionRefsContext";
import styles from "../assets/services.module.scss";

// Services component showcasing different service offerings
export default function Services() {
  // Get the ref from context
  const { servicesSection } = useContext( SectionRefsContext );

  // State to handle the extended/collapsed state for each service
  const [isExtended, setIsExtended] = useState([false, false, false]);

  // Toggle the extended state for a specific service
  const toggleExtend = (index:number) => {
    const newExtended = [...isExtended];
    newExtended[index] = !newExtended[index];
    setIsExtended(newExtended);
  };

  return (
    <section className={styles.servicesSection} ref={ servicesSection }>
      {/* Section heading and introductory paragraph */}
      <div className={styles.servicesHeading}>
        <h2>Services</h2>
        <p>
          I provide web development services, including both front-end and
          back-end development. My goal is to create modern, responsive, and
          user-friendly websites and applications tailored to meet the specific
          needs of your business.
        </p>
      </div>

      <div className={styles.servicesContentSection}>

        {/* Front-End Development Service */}
        <div className={isExtended[0] ? `${styles.servicesBackground} ${styles.servicesBackgroundColor}` : `${styles.servicesBackground}`}>
          <div className={styles.services}>
            {/* Close button when the service details are extended */}
            {isExtended[0] && <span onClick={() => toggleExtend(0)}>X</span>}
            
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-palette-fill" viewBox="0 0 16 16">
                <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </div>

            <h3>Front End Development</h3>

            <div className={styles.text}>
              <p>
                In my front-end development process, I employ a range of
                technologies to create modern, responsive, and user-friendly web
                interfaces. HTML5 provides the foundation for structuring content
                with semantic elements that improve accessibility and SEO. CSS3,
                combined with SASS, is used to craft sophisticated, scalable
                stylesheets that enable custom designs and maintainability.
                Bootstrap and Tailwind CSS are frameworks I use to quickly build
                responsive layouts and ensure consistent styling across different
                devices and screen sizes. For enhancing interactivity and creating
                dynamic web applications, I rely on JavaScript, with React.js for
                building reusable components and managing complex state, and
                Next.js for server-side rendering and optimizing performance. HTMX
                is integrated with Django to add advanced interactivity to HTML
                directly, allowing for smoother user experiences with less
                reliance on JavaScript. This combination of tools and technologies
                ensures that I deliver high-quality, performant web applications
                that meet the needs of users and businesses alike.
              </p>
            </div>

            {/* Button to toggle the service details section */}
            {!isExtended[0] 
              ? <button type="button" onClick={() => toggleExtend(0)}>Read more</button> 
              : <button type="button" className={styles.button} onClick={() => toggleExtend(0)}>Close</button>
            }

          </div>
        </div>

        {/* Back-End Development Service */}
        <div className={isExtended[1] ? `${styles.servicesBackground} ${styles.servicesBackgroundColor}` : `${styles.servicesBackground}`}>
          <div className={styles.services}>
            {/* Close button when the service details are extended */}
            {isExtended[1] && <span onClick={() => toggleExtend(1)}>X</span>}
            
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
              </svg>
            </div>

            <h3>Back End Development</h3>

            <div className={styles.text}>
              <p>
                For back-end development, I utilize a range of technologies to
                build robust and scalable server-side applications. Python is the
                core programming language I use for developing back-end logic and
                data processing due to its versatility and efficiency. Django, a
                comprehensive web framework, allows me to quickly and efficiently
                create secure and feature-rich web applications. I use
                Django-Ninja and FastAPI to develop high-performance REST APIs
                that offer speed and advanced features. JWT (JSON Web Tokens) is
                employed for secure user authentication and authorization,
                ensuring that only authorized users can access sensitive
                information. PostgreSQL, a powerful and reliable relational
                database, is used for data storage and management, ensuring data
                integrity and efficiency. Together, these technologies enable me
                to deliver effective and dependable back-end solutions that meet
                all the needs of your application.
              </p>
            </div>
            
            {/* Button to toggle the service details section */}
            {!isExtended[1] 
              ? <button type="button" onClick={() => toggleExtend(1)}>Read more</button> 
              : <button type="button" className={styles.button} onClick={() => toggleExtend(1)}>Close</button>
            }
          </div>
        </div>

        {/* Version Control Service */}
        <div className={isExtended[2] ? `${styles.servicesBackground} ${styles.servicesBackgroundColor}` : `${styles.servicesBackground}`}>
          <div className={styles.services}>
            {/* Close button when the service details are extended */}
            {isExtended[2] && <span onClick={() => toggleExtend(2)}>X</span>}
            
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" className="bi bi-android" viewBox="0 0 16 16">
                <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.9 8.9 0 0 1 8 5a8.9 8.9 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </div>

            <h3>Version Control</h3>

            <div className={styles.text}>
              <p>
                For version control and collaborative development, I use Git and
                GitHub, which are essential tools for managing and tracking
                changes in code. Git, a distributed version control system, allows
                me to keep track of every modification made to the codebase. It
                supports branching and merging, enabling me to work on multiple
                features or fixes simultaneously without interfering with the main
                codebase. This ensures that code changes are well-organized, and
                the development process remains streamlined.
                
                GitHub, a web-based platform built around Git, enhances my version control workflow by
                providing a collaborative environment for code management. It
                allows me to host repositories, manage issues, and collaborate
                with other developers through pull requests and code reviews.
                GitHub&apos;s features, such as project boards and actions, help
                streamline the development process, automate workflows, and
                maintain code quality. 
                
                Together, Git and GitHub facilitate
                effective version control, enabling me to track changes,
                collaborate with team members, and maintain a high standard of
                code quality throughout the development lifecycle. This
                combination ensures that the codebase is reliable, maintainable,
                and ready for deployment.
              </p>
            </div>
            
            {/* Button to toggle the service details section */}
            {!isExtended[2] 
              ? <button type="button" onClick={() => toggleExtend(2)}>Read more</button> 
              : <button type="button" className={styles.button} onClick={() => toggleExtend(2)}>Close</button>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
