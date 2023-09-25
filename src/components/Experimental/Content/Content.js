// /src/components/Content/Content.js

import SnakeGame from "../SnakeGame/SnakeGame";

export default function Content({ selectedCategory }) {
  console.log("Selected category is: ", selectedCategory);
  return (
    <div className="flex place-content-center items-start h-full w-full pt-8">
      {selectedCategory === "Controls Engineering" && (
        <div>Controls Engineering</div>
      )}
      {selectedCategory === "Web Development" && (
        <div>
          <h1 className="text-2xl">Web Development Skills</h1>
          <ul className="mt-2 list-disc">
            <li> React </li>
            <li> NextJS </li>
            <li> NodeJS </li>
            <li> Ubuntu </li>
            <li> Rest API </li>
            <li> NGINX </li>
            <li> Ubuntu Servers </li>
          </ul>
        </div>
      )}
      {selectedCategory === "Programming" && (
        <div>
          <SnakeGame />
        </div>
      )}
      {!selectedCategory && <></>}
    </div>
  );
}
