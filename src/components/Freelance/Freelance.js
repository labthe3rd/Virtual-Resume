import Discord from "./Discord";
import Gumroad from "./Gumroad";
import MetaPlazaVR from "./MetaPlazaVR";
import Universum from "./Universum";

export default function Freelance() {
  return (
    <div className="grid justify-items-center mt-8 gap-4">
      <div className="text-5xl">Freelance Projects</div>
      <MetaPlazaVR />
      <Universum />
      <Discord />
    </div>
  );
}