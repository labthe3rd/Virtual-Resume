// /src/pages/index.js
import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import SnakeGame from "@/components/SnakeGame/SnakeGame";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Freelance from "@/components/Freelance/Freelance";
import Contact from "@/components/Contact/Contact";
import Head from "next/head";
import Weather from "@/components/Weather/Weather";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { SiGumroad } from "react-icons/si";
import Showcase from "@/components/Showcase/Showcase";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Education");
  return (
    <div>
      <Head>
        <title>Louis Bersine's Website</title>
        <meta property="og:title" content="Louis Bersine's Website" />
        <meta
          property="og:description"
          content="Source code for my website can be found on my github page"
        />
        <meta
          property="og:image"
          content="https://www.louisbersine.com/lb-logo-whitebackground.png"
        />
        <meta property="og:url" content="https://www.louisbersine.com" />
      </Head>
      <main className="flex flex-row w-screen h-screen">
        <Sidebar
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <div className="relative h-full w-full">
          <div className="absolute inset-y-0 top-0 w-full h-full overflow-y-auto box-border border-neutral-400 border-large">
            <div className="fixed border-neutral-500 border-large box-border border-double h-32 grid grid-cols-1 content-center w-full bg-black shadow-md shadow-neutral-500">
              <div className=" text-2xl sm:text-5xl  text-center">
                Louis Bersine's Website
              </div>
              <div className="text-xs sm:text-medium w-1/2 place-self-center sm:w-full text-center italic">
                Source code for my website can be found on my github page
              </div>
              <div className="flex gap-10 md:gap-4 mt-6 md:mt-2 place-content-center">
                <a href="mailto:labthe3rd@gmail.com">
                  <HiMail className="object-center text-2xl hover:text-primary-500" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/louis-bersine-iii/"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="object-center text-2xl hover:text-primary-500" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/labthe3rd"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="object-center text-2xl hover:text-primary-500" />
                </a>
                <a
                  target="_blank"
                  href="https://labthe3rd.gumroad.com/"
                  rel="noopener noreferrer"
                >
                  <SiGumroad className="object-center text-2xl hover:text-primary-500" />
                </a>
              </div>
            </div>
            <div className="flex flex-col text-center mt-32">
              {selectedCategory === "Education" && <Education />}
              {selectedCategory === "Experience" && <Experience />}
              {selectedCategory === "Freelance" && <Freelance />}
              {selectedCategory === "Showcase" && <Showcase />}
              {selectedCategory == "Contact" && <Contact />}
              {selectedCategory === "SnakeGame" && (
                <div className="mt-8">
                  <SnakeGame />
                </div>
              )}
              {selectedCategory == "Weather" && <Weather />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
