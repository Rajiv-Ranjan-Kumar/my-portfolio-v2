'use client';

import { lazy } from 'react';
import styles from '../assets/footer.module.scss'; // Importing SCSS module for scoped styling of the Footer component.

const SocialMedia = lazy(() => import("@/components/socialMedia"));

export default function Footer() {
    return (
        <section className={styles.footerSecion}>
            <SocialMedia borderBottom={true}/>

            {/* Copyright Message */}
            <p>&copy; 2024 Rajiv Ranjan Kumar. All rights reserved.</p>
        </section>
    );
}
