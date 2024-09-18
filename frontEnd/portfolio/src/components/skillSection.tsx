'use client';

import htmlLogo from '../../public/html_logo.png';
import htmxLogo from '../../public/htmx_logo.png';
import cssLogo from '../../public/css_logo.png';
import sassLogo from '../../public/sass_logo.png';
import bootstrapLogo from '../../public/bootstrap_css_logo.png';
import telwindLogo from '../../public/tailwind_css_logo.png';
import jsLogo from '../../public/js_logo.png';
import reactLogo from '../../public/react_js_logo.png';
import nextLogo from '../../public/next_js_logo.png';
import pythonLogo from '../../public/py_logo.png';
import djangoLogo from '../../public/django_logo.png';
import djangoNinjaLogo from '../../public/dj_ninja_logo.png';
import fastApiLogo from '../../public/fast_api_logo.png';
import pstgresqlLogo from '../../public/postgresql_logo.png';
import gitLogo from '../../public/git_logo.png';
import jwtLogo from '../../public/jwt_logo.png';
import c_logo from '../../public/c_logo.png';
import cppLogo from '../../public/C++_logo.png';
import javaLogo from '../../public/java_logo.png';

import styles from '../assets/skill.module.scss'; // Importing styles for the Skill component.

export default function Skill() {

    // Frontend skills with associated logos.
    const frontendSkills = [
        { name: 'HTML', logo: htmlLogo },
        { name: 'HTMX', logo: htmxLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'bootstrap', logo: bootstrapLogo },
        { name: 'SASS', logo: sassLogo },
        { name: 'telwind css', logo: telwindLogo },
        { name: 'Java Script', logo: jsLogo },
        { name: 'React js', logo: reactLogo },
        { name: 'Next js', logo: nextLogo },
    ];

    // Backend skills with associated logos.
    const backendSkills = [
        { name: 'Python', logo: pythonLogo },
        { name: 'Django', logo: djangoLogo },
        { name: 'Django ninja', logo: djangoNinjaLogo },
        { name: 'Fast Api', logo: fastApiLogo },
        { name: 'PostgreSQL', logo: pstgresqlLogo },
    ];

    // Other skills with associated logos.
    const otherSkills = [
        { name: 'Git / GitHub', logo: gitLogo },
        { name: 'JWT', logo: jwtLogo },
        { name: 'C', logo: c_logo },
        { name: 'C++', logo: cppLogo },
        { name: 'Java', logo: javaLogo },
    ];

    return (
        <section className={styles.skillSection} id='skills'>
            {/* Section heading with title and description */}
            <div className={styles.skillHeading}>
                <h2>MY <span>Skills</span></h2>
                <p>
                    My skill set includes expertise in both front-end and back-end development technologies. I am proficient in HTML, CSS, JavaScript, and frameworks like React.js and Next.js for creating dynamic and responsive user interfaces. On the back-end, I utilize Python, Django, Django-Ninja, FastAPI, and PostgreSQL to build robust and scalable applications. Additionally, I am skilled in using Git and GitHub for version control, ensuring efficient collaboration and code management.
                </p>
            </div>

            {/* Content area where skills are displayed */}
            <div className={styles.skillContent}>
                {/* Frontend skills section */}
                <fieldset>
                    <legend>Front End</legend>
                    {frontendSkills.map((skill, index) => (
                        <div className={styles.skill} key={index}>
                            <div className={styles.logoContainer}>
                                <img src={skill.logo?.src} alt={skill.name} />
                            </div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </fieldset>

                {/* Backend skills section */}
                <fieldset>
                    <legend>Back End</legend>
                    {backendSkills.map((skill, index) => (
                        <div className={styles.skill} key={index}>
                            <div className={styles.logoContainer}>
                                <img src={skill.logo?.src} alt={skill.name} />
                            </div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </fieldset>

                {/* Other skills section */}
                <fieldset>
                    <legend>Other</legend>
                    {otherSkills.map((skill, index) => (
                        <div className={styles.skill} key={index}>
                            <div className={styles.logoContainer}>
                                <img src={skill.logo?.src} alt={skill.name} />
                            </div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </fieldset>
            </div>
        </section>
    )
}
