import Proficient from "./Proficient";
import AltronAutomation from "./AltronAutomation";
import RomanManufacturing from "./RomanManufacturing";
import MarquipWardUnited from "./MarquipWardUnited";
import Trio from "./Trio";
import ThePartyZoneVR from "./ThePartyZoneVR";

export default function Experience() {
  return (
    <div className="grid justify-items-center mt-8 gap-4 mb-8">
      <div className="text-2xl sm:text-5xl">Work Experience</div>
      <Proficient />

      <RomanManufacturing />
      <AltronAutomation />
      <MarquipWardUnited />
      <ThePartyZoneVR />
      <Trio />
    </div>
  );
}
