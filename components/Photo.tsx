"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-full hidden xl:block scale-75 w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src={"/self.png"}
            priority
            quality={100}
            fill
            alt="self"
            className="object-contain rounded-full"
          />
        </motion.div>
        <motion.svg
          className={"w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]"}
          fill={"transparent"}
          xmlns={"http://www.w3.org/200/svg"}
        >
          <motion.circle
            cx={"253"}
            cy="253"
            r="250"
            stroke={"#a580dc"}
            strokeWidth={"8"}
            strokeLinecap={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 253 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
