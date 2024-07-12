import React from "react";
import Magicbutton from "./ui/Magicbutton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
    
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to next Level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:raosushant71@gmail.com">
          <Magicbutton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          ></Magicbutton>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-sm md:text-base md:font-normal font-light">
          Copyright © 2024 Sushant{" "}
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((ele, i) => {
            return (
              <a
                href={ele.href}
                key={i}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-x-black-300"
              >
                <img src={ele.img} alt={ele.img} width={24} height={24} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
