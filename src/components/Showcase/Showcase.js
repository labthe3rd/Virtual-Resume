import ProjectSherwood from "./ProjectSherwood";
import ThePartyZone from "./ThePartyZone";
import VibeBlaster from "./VibeBlaster";

export default function Showcase() {
  return (
    <div className="grid justify-items-center mt-8 mb-8 gap-4">
      <div className="text-2xl sm:text-5xl">Showcase</div>
      <ThePartyZone />
      <ProjectSherwood />
      <VibeBlaster />
    </div>
  );
}
