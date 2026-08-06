import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectSection from '@/sections/ProjectSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';
import FooterSection from '@/sections/FooterSection';
import { Toaster } from 'react-hot-toast';
import AnimationLayout from '@/components/layout/AnimationLayout';

export default function Home() {
  return (
    <>
      <AnimationLayout>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
        <Toaster />        
      </AnimationLayout>      
    </>
  );
}
