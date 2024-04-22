import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import LeadershipSection from "@/components/LeadershipSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <ExperiencesSection></ExperiencesSection>
      <ProjectsSection></ProjectsSection>
      <LeadershipSection></LeadershipSection>
      <SkillsSection></SkillsSection>
      <FooterSection></FooterSection>
    </main>
  );
}
