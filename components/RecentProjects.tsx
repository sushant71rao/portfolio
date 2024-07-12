import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">Recent Works</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4 mt-10">
        {projects.map((ele, i) => {
          let { title, des, img, iconLists, link } = ele;
          return (
            <div
              key={i}
              className="lg:min-h-[32.5rem] sm:h-[41rem]  h-[32rem] sm:w-[570px] flex items-center justify-center w-[80vw] "
            >
              <PinContainer title={title} href={link}>
                <div className="relative flex items-center justify-center w-[80vw] sm:w-[570px] sm:h-[40vh]  overflow-hidden h-[20vh] mb-10">
                  <div className="relative h-fit w-full overflow-hidden lg-rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  ></img>
                </div>
                <h1 className="font-bold text-base md:text-xl lg:text-2xl">
                  {title}
                </h1>
                <div className="lg:text-base lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </div>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists?.map((ele, ind) => (
                      <div key={ind} className="border-white/[0.02]">
                        <img
                          src={ele}
                          alt={ele}
                          className="p-2 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * i * 2})px`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
