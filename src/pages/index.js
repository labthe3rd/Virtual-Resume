// /src/pages/index.js
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Content from "@/components/Content/Content";
import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Example1 from "@/components/Animation/Example1";
import SnakeGame from "@/components/SnakeGame/SnakeGame";
import Proficient from "@/components/Experience/Proficient";
import AltronAutomation from "@/components/Experience/AltronAutomation";
import RomanManufacturing from "@/components/Experience/RomanManufacturing";
import MarquipWardUnited from "@/components/Experience/MarquipWardUnited";
import Trio from "@/components/Experience/Trio";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Freelance from "@/components/Freelance/Freelance";
import Contact from "@/components/Contact/Contact";
import Head from "next/head";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Education");
  return (
    <div>
      <Head>
        <title>Louis Bersine's Website</title>
        <meta property="og:title" content="Louis Bersine's Website" />
        <meta
          property="og:description"
          content="This website was coded from scratch using NextJS and TailwindCSS."
        />
        <meta
          property="og:image"
          content="/public/lb-logo-whitebackground.png"
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
            <div className="border-neutral-500 border-large box-border border-double h-32 grid grid-cols-1 content-center">
              <div className=" text-2xl sm:text-5xl  text-center">
                Louis Bersine's Website
              </div>
              <div className="text-xs sm:text-medium w-1/2 place-self-center sm:w-full text-center italic">
                This website was coded from scratch using NextJS and TailwindCSS
              </div>
            </div>
            <div className="flex flex-col text-center">
              {selectedCategory === "Education" && <Education />}
              {selectedCategory === "Experience" && <Experience />}
              {selectedCategory === "Freelance" && <Freelance />}
              {selectedCategory == "Contact" && <Contact />}
              {selectedCategory === "SnakeGame" && (
                <div className="mt-8">
                  <SnakeGame />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
