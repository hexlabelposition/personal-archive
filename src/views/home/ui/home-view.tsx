import { HeroSection } from "./hero-section";
import { WorkSection } from "./work-section";
// import { LabSection } from "./lab-section";
// import { NotesSection } from "./notes-section";
import { AboutSection } from "./about-section";

export function HomeView() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      {/* <LabSection /> */}
      {/* <NotesSection /> */}
      <AboutSection />
    </main>
  );
}
