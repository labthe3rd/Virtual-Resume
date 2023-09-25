// /src/components/Content/Header.js

import ExperienceDropdown from "./ExperienceDropdown";

export default function Header({ setSelectedCategory }) {
  return (
    <>
      <div className="flex place-content-center items-center border-primary h-full border-large shadow-primary shadow-md bg-primary-500 bg-opacity-30">
        <div className="opacity-100">
          <ExperienceDropdown setSelectedCategory={setSelectedCategory} />
        </div>
      </div>
    </>
  );
}
