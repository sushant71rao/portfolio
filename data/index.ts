export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Eager to learn and collaborate, fostering open communication and teamwork",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable and quick to learn new technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about coding and problem-solving.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Exploring More Technologies",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Alumni Portal RSCOE",
    des: " Connect alumni and students with a platform for discussions, posts, and messaging, enhancing academic networking.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nodejs.svg", "/fm.svg"],
    link: "https://www.alumnirscoe.in",
  },
  {
    id: 2,
    title: "Feedback System",
    des: " Enable anonymous teacher ratings using a MERN stack system to improve teaching methods and foster collaboration.",
    img: "/p2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/nodejs.svg",
      "/mongodb.svg",
    ],
    link: "https://feedback-system-lake.vercel.app/",
  },
  {
    id: 3,
    title: "Aspira- A career Guidance Platform",
    des: "Revolutionize career exploration for students with ASPIRA, a platform that leverages user responses and NextJS with OpenAI's API to provide tailored career recommendations.",
    img: "/p3.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/nodejs.svg",
      "/mongodb.svg",
    ],
    link: "https://github.com/sushant71rao/Aspira",
  },
  {
    id: 4,
    title: "TEDxJSPMRSCOE Website",
    des: "Designed And Developed the TedxJspmrscoe Website for 2023",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://tedxjspmrscoe.in/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Alumi Portal Lead",
    desc: "Led the development and spearheaded the design and implementation of a comprehensive platform that connects alumni and students",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer at TEDx",
    desc: "Designed and Developed the event's landing page and collaborated with the team to enhance the overall user experience, ensuring a high-quality product.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Worked as a FreeLancer on the Pune Kabbadi Association website utilizing the MERN stack to create a dynamic platform for data retrieval and registration of teams,players etc",
    className: "col-span-4", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    href: "https://github.com/sushant71rao",
    img: "/git.svg",
  },
  {
    id: 2,
    href: "https://x.com/Sushant71Rao",
    img: "/twit.svg",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/sushant-rao-351630249/",
    img: "/link.svg",
  },
];
