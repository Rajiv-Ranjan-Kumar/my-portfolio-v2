'use client';
import React, { createContext, useRef } from 'react';

// Create a context to hold section refs
const SectionRefsContext = createContext<any>(null);

// Create a provider component
export const SectionRefsProvider = ({ children }: any) => {
  // Refs for each section
  const homeSection = useRef<HTMLDivElement>(null);
  const aboutSection = useRef<HTMLDivElement>(null);
  const skillsSection = useRef<HTMLDivElement>(null);
  const servicesSection = useRef<HTMLDivElement>(null);
  const projectsSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  return (
    <SectionRefsContext.Provider
      value={{
        homeSection,
        aboutSection,
        skillsSection,
        servicesSection,
        projectsSection,
        contactSection,
      }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
};

// Export the context
export default SectionRefsContext;
