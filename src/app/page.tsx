import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectSection from '@/sections/ProjectSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';
import FooterSection from '@/sections/FooterSection';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
      <Toaster />
    </>
  );
}
