import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Magicbutton from "./ui/Magicbutton";
import { FaLocationArrow } from "react-icons/fa";
import Photo from "./Photo";
import { HiDocumentArrowDown } from "react-icons/hi2";

const Hero = () => {
  function ResumeDownload(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="pb-20 pt-16">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-16 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experience"
          ></TextGenerateEffect>
          <p className="text-center text-sm md:tracking-wider mb-4 md:text-lg lg:text-2xl">
            Hi, I&apos;m Sushant, a Web Developer based in India
          </p>
          <div className="flex gap-2">
            <a href="#about">
              <Magicbutton
                title="Show my Work"
                icon={<FaLocationArrow />}
                position="right"
              ></Magicbutton>
            </a>
            <a href="/resume/SushantRao.pdf">
              <Magicbutton
                title="My Resume"
                icon={<HiDocumentArrowDown></HiDocumentArrowDown>}
                position="right"
              ></Magicbutton>
            </a>
          </div>
        </div>
        <div className="">
          <Photo  />
        </div>
      </div>
    </div>
  );
};

export default Hero;
