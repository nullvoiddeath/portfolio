import { WaveCanvas } from "@/components/hero/wave-canvas";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ResearchSection } from "@/components/sections/research-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <WaveCanvas />
      <div className="relative z-[1]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResearchSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </>
  );
}
