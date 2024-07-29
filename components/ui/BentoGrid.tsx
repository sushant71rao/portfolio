"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { InfiniteMovingCards } from "./Movingcards";
import Lottie from "react-lottie";
import { useState } from "react";
import animationdata from "@/data/confetti.json";
import Magicbutton from "./Magicbutton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  let [copied, setCopied] = useState(false);
  function HandleCopy(): void {
    navigator.clipboard.writeText("raosushant71@gmail.com");
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,3,98,1) 51%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={`${id == 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5  ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id == 6 && (
          <BackgroundGradientAnimation className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md-text-4xl lg-text-7xl"></BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full  min-h-40 flex flex-col px-5 p-5 lg:p-10 "
          )}
        >
          <div className="font-sans font-light  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 ">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id == 2 && <GlobeDemo></GlobeDemo>}
          {id == 5 && (
            <>
              <InfiniteMovingCards
                speed="slow"
                items={[
                  { img: "/reactjs.svg", width: 110, height: 110 },
                  { img: "/nextjs.svg", width: 60, height: 60 },
                  { img: "/mongodb.svg", width: 80, height: 80 },
                  { img: "/expressjs.svg", width: 90, height: 90 },
                  { img: "/twcss.svg", width: 120, height: 120 },
                  { img: "/ts.svg", width: 80, height: 80 },
                  { img: "/nodejs.svg", width: 90, height: 90 },
                ]}
              ></InfiniteMovingCards>
            </>
          )}
          {id == 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {/* <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationdata,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                /> */}
              </div>
              <Magicbutton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161831]"
                handleClick={HandleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
