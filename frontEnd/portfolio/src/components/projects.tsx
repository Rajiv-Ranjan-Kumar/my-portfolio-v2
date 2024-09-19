'use client';

import { useState, useContext } from 'react';
import SectionRefsContext from '@/app/SectionRefsContext';
import Image from 'next/image';
import img from '../../public/Screenshot (48).png';
import styles from '../assets/projects.module.scss';

// Projects component displaying a list of projects
export default function Projects() {
    // Get the ref from context
    const { projectsSection } = useContext( SectionRefsContext );

    // State to track which project is being hovered over
    const [indexNumber, setIndexNumber] = useState<null|Number>(null);

    // Handle mouse enter to show project details for the hovered project
    const handleMouseEnter = (index:any) => {
        setIndexNumber(index);
    }

    // Handle mouse leave to hide project details when not hovered
    const handleMouseLive = () => {
        setIndexNumber(null);
    }

    // Example array of projects, each containing project details and technologies
    const projects = [
        {
            projetsName: 'My Portfolio',
            description: 'A brief description of the first project. This is my portfolio website, showcasing my skills, expertise, and background. It provides an overview of my work and highlights my abilities in web development.',
            frontEndTechnologies: ['HTML', 'SASS', 'TYPESCRIPT','NEXT JS'],
            // Example of a project without back-end technologies
            imageUrl: img.src,
            gitHubeUrl: "http://#",
            projectUrl: "http://#"
        },
        {
            projetsName: 'My Portfolio',
            description: 'A brief description of the first project. This is my portfolio website, showcasing my skills, expertise, and background. It provides an overview of my work and highlights my abilities in web development.',
            frontEndTechnologies: ['HTML', 'SASS', 'TYPESCRIPT','NEXT JS'],
            backEndTechnologies: ['PYTHON', 'DJANGO NINJA', 'POSTGRESQL'],
            imageUrl: img.src,
            gitHubeUrl: "http://#",
            projectUrl: "http://#"
        },
        {
            projetsName: 'My Portfolio',
            description: 'A brief description of the first project. This is my portfolio website, showcasing my skills, expertise, and background. It provides an overview of my work and highlights my abilities in web development.',
            frontEndTechnologies: ['HTML', 'SASS', 'TYPESCRIPT','NEXT JS'],
            backEndTechnologies: ['PYTHON', 'DJANGO NINJA', 'POSTGRESQL'],
            imageUrl: img.src,
            gitHubeUrl: "http://#",
            projectUrl: "http://#"
        },
    ];

    return (
        <section className={styles.projectsSection} ref={ projectsSection }>
            {/* Section heading with a brief introduction */}
            <div className={styles.projectsHeading}>
                <h2>MY <span>Projects</span></h2>
                <p>Explore my projects to see how I apply my expertise and creativity in web development. Each project showcases my ability to build dynamic, responsive, and user-friendly applications using modern technologies. These projects address various challenges and are designed to enhance user experience and provide effective solutions.</p>
            </div>

            {/* Project container mapping over the list of projects */}
            <div className={styles.projectsContainer}>
                {projects.map((project:any, index:number) => (
                    <div key={index} className={styles.project} onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLive()}>
                        {/* Project image */}
                        <Image src={project.imageUrl} width={100} height={100} className={styles.img} alt="project image" />
                        
                        {/* Project name display */}
                        <div className={styles.text}>
                            <span>Project : </span>&nbsp;&nbsp;<h5 id='projectName'>{project.projetsName}</h5>
                        </div>

                        {/* Show project details when hovering over a project */}
                        {indexNumber === index && (
                            <div className={styles.projectDetails}>
                                <h6><span></span>Project Description :</h6>
                                <p>{project.description}</p>

                                <h6><span></span>Front End Technologies :</h6>
                                <ul>
                                    {project.frontEndTechnologies.map((tech:any, i:number) => (
                                        <li key={i}>{tech} <span>,</span></li>
                                    ))}
                                </ul>

                                {/* Conditional rendering for back-end technologies */}
                                {project.backEndTechnologies?.length > 0 && (
                                    <>
                                        <h6><span></span>Back End Technologies :</h6>
                                        <ul>
                                            {project.backEndTechnologies.map((tech:any, i:number) => (
                                                <li key={i}>{tech} <span>,</span></li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {/* Links to GitHub and live project */}
                                <div className={styles.urlsContainer}>
                                    <a href={project.gitHubeUrl} target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>
                                    </a>

                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
