import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ExperienceTimeline } from '@/components/sections/experience-timeline';
import { ProjectShowcase } from '@/components/sections/project-showcase';
import { SkillsSection } from '@/components/sections/skills-section';
import { EducationDetails } from '@/components/sections/education-details';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { ContactInformation } from '@/components/sections/contact-information';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ExperienceTimeline />
        <ProjectShowcase />
        <SkillsSection />
        <EducationDetails />
        <AchievementsSection />
        <ContactInformation />
      </main>
      <Footer />
    </div>
  );
}
