
import { useEffect } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OrganizationsSection from "@/components/sections/OrganizationsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    // Show welcome toast when page loads
    toast.info("👋 Welcome to my portfolio!", {
      description: "Feel free to explore and reach out if you have any questions.",
      duration: 5000
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <OrganizationsSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
