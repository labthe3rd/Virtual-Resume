// /src/components/Header/ExperienceDropdown.js

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function ExperienceDropdown({ setSelectedCategory }) {
  const handleSelect = (category) => {
    console.log("Setting category to: ", category);
    setSelectedCategory(category);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary">Experience</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={() => handleSelect("Controls Engineering")}
          key="new"
        >
          Controls Engineering
        </DropdownItem>
        <DropdownItem
          onClick={() => handleSelect("Web Development")}
          key="copy"
        >
          Web Development
        </DropdownItem>
        <DropdownItem onClick={() => handleSelect("Programming")} key="edit">
          Programming
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
