// src/components/Sidebar/sidebar.js
import { HiOutlineMenu } from "react-icons/hi";
import React, { useState, useEffect, useRef } from "react";
import useIsMobile from "@/hooks/useIsMobile";

export default function Sidebar({ setSelectedCategory, selectedCategory }) {
  const [clickCount, setClickCount] = useState(0);
  const isMobile = useIsMobile();
  const [menu, setMenu] = useState(true);

  //Change content
  const handleSelect = (category) => {
    console.log("Setting category to: ", category);
    setSelectedCategory(category);
  };

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current === true) {
      firstUpdate.current = false;
      return;
    }
  });

  function OpenMenu(e) {
    setClickCount(clickCount + 1);
    setMenu(!menu);
  }

  return (
    <>
      {menu ? (
        <>
          <div className="fixed h-full w-44 z-10">
            <div className="absolute left-0 h-full w-40 box-border bg-neutral-800 border-large rounded-r-xl shadow-lg shadow-default-500">
              <div className="flex flex-row place-content-end w-full">
                <button onClick={OpenMenu}>
                  <HiOutlineMenu className="text-2xl" />
                </button>
              </div>
              <div className="flex flex-row place-content-center mt-4">
                <div className="grid grid-rows-1 grid-flow-row gap-4">
                  {/* Adding a blog in the future, leaving this here for now so I can update the site without experimental features effecting performance. */}
                  {/* <div
                    className={`flex place-content-center font-bold h-8 w-32 ${
                      selectedCategory === "Blog"
                        ? "text-blue-500 cursor-not-allowed"
                        : "cursor-pointer hover:text-blue-200"
                    }`}
                    onClick={() => handleSelect("Blog")}
                    key="Blog"
                  >
                    Blog
                  </div> */}
                  <div
                    className={`flex place-content-center font-bold h-8 w-32 ${
                      selectedCategory === "Education"
                        ? "text-blue-500 cursor-not-allowed"
                        : "cursor-pointer hover:text-blue-200"
                    }`}
                    onClick={() => handleSelect("Education")}
                    key="Education"
                  >
                    Education
                  </div>
                  <div
                    className={`flex place-content-center font-bold h-8 w-32 ${
                      selectedCategory === "Experience"
                        ? "text-blue-500 cursor-not-allowed"
                        : "cursor-pointer hover:text-blue-200"
                    }`}
                    onClick={() => handleSelect("Experience")}
                    key="Experience"
                  >
                    Experience
                  </div>
                  <div
                    className={`flex place-content-center font-bold h-8 w-32 ${
                      selectedCategory === "Projects"
                        ? "text-blue-500 cursor-not-allowed"
                        : "cursor-pointer hover:text-blue-200"
                    }`}
                    onClick={() => handleSelect("Projects")}
                    key="Projects"
                  >
                    Projects
                  </div>
                  <div
                    className={`flex place-content-center font-bold h-8 w-32 ${
                      selectedCategory === "Portfolio"
                        ? "text-blue-500 cursor-not-allowed"
                        : "cursor-pointer hover:text-blue-200"
                    }`}
                    onClick={() => handleSelect("Portfolio")}
                    key="Portfolio"
                  >
                    Portfolio
                  </div>
                  <div
                    className={`flex place-content-center font-bold h-8 w-32 ${
                      selectedCategory === "Contact"
                        ? "text-blue-500 cursor-not-allowed"
                        : "cursor-pointer hover:text-blue-200"
                    }`}
                    onClick={() => handleSelect("Contact")}
                    key="Contact"
                  >
                    Contact
                  </div>
                  {!isMobile && (
                    <div
                      className={`flex place-content-center font-bold h-8 w-32 ${
                        selectedCategory === "SnakeGame"
                          ? "text-blue-500 cursor-not-allowed"
                          : "cursor-pointer hover:text-blue-200"
                      }`}
                      onClick={() => handleSelect("SnakeGame")}
                      key="SnakeGame"
                    >
                      Snake Game
                    </div>
                  )}
                  <div
                    className={`flex place-content-center font-bold h-8 w-32 ${
                      selectedCategory === "Weather"
                        ? "text-blue-500 cursor-not-allowed"
                        : "cursor-pointer hover:text-blue-200"
                    }`}
                    onClick={() => handleSelect("Weather")}
                    key="Weather"
                  >
                    Weather API
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="fixed h-full w-10 z-10">
            <div className="absolute left-0 h-full w-10 box-border bg-neutral-800 border-large rounded-r-xl shadow-lg shadow-default-500">
              <div className="flex flex-row place-content-center w-full">
                <button onClick={OpenMenu}>
                  <HiOutlineMenu className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
