import { Preloader } from "@/components/Preloader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Community } from "@/components/Community";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <ResumeCTA />
      <Experience />
      <Achievements />
      <Community />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
