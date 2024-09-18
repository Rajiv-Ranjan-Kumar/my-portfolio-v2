import { Suspense, lazy } from "react";

// Lazily load the components to optimize the application's performance by splitting the code
const HomeSection = lazy(() => import("@/components/homeSection"));
const AboutSection = lazy(() => import("@/components/aboutSection"));
const Skill = lazy(() => import("@/components/skillSection"));
const Services = lazy(() => import("@/components/services"));
const Projects = lazy(() => import("@/components/projects"));
const ContactUs = lazy(() => import("@/components/contactUs"));

export default function Home() {
  return (
    <>
      {/* Wrap each section in Suspense to handle loading states while the component is being fetched */}
      <Suspense>
        <HomeSection />
      </Suspense>

      <Suspense>
        <AboutSection />
      </Suspense>

      <Suspense>
        <Skill />
      </Suspense>

      <Suspense>
        <Services />
      </Suspense>

      <Suspense>
        <Projects />
      </Suspense>

      <Suspense>
        <ContactUs />
      </Suspense>
    </>
  );
}
