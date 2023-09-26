import Delirium from "./Delirium";
import MetaPlazaVR from "./MetaPlazaVR";
import ProjectSherwood from "./ProjectSherwood";
import ThePartyZone from "./ThePartyZone";
import Universum from "./Universum";
import VibeBlaster from "./VibeBlaster";

export default function Portfolio() {
  return (
    <div className="grid justify-items-center mt-8 mb-8 gap-4">
      <div className="text-2xl sm:text-5xl">Video Portfolio</div>
      <MetaPlazaVR />
      <Universum />
      <Delirium />
      <ThePartyZone />
      <ProjectSherwood />
      <VibeBlaster />
    </div>
  );
}
