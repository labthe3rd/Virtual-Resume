import Proficient from "./Proficient";
import AltronAutomation from "./AltronAutomation";
import RomanManufacturing from "./RomanManufacturing";
import MarquipWardUnited from "./MarquipWardUnited";
import Trio from "./Trio";

export default function Experience() {
  return (
    <div className="grid justify-items-center mt-8 gap-4">
      <div className="text-5xl">Experience</div>
      <Proficient />

      <RomanManufacturing />
      <AltronAutomation />
      <MarquipWardUnited />
      <Trio />
    </div>
  );
}
