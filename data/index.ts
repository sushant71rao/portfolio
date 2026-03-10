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
      "Architecting highly available backends and cloud-native microservices on AWS.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Implementing AI-powered automation and deterministic LLM workflows.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Constantly exploring new cloud architectures and scalable backend patterns.",
    description: "Always Evolving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[12.5rem]",
    imgClassName: "absolute inset-0 w-full h-full object-cover opacity-20",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Software Engineer with a focus on fault-tolerant systems.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "My Tech stack",
    className: "md:col-span-3 md:row-span-2",
    description: "Node.js, AWS, TypeScript & LangChain.",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
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
    title: "EISHA - Healthcare AI Automation",
    des: "WhatsApp Business API-based AI system orchestrating appointments, driving 60% of bookings via LangChain workflows.",
    img: "/p1.png",
    iconLists: ["/nodejs.svg", "/aws.svg", "/mongodb.svg", "/ts.svg"],
    link: "https://eikoshealth.com",
  },
  {
    id: 2,
    title: "Alumni Engagement Portal",
    des: "Full-stack monorepo bridging alumni and students through threaded discussions, real-time messaging, and targeted academic networking.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nodejs.svg"],
    link: "https://www.alumnirscoe.in",
  },
  {
    id: 3,
    title: "College Feedback Management",
    des: "Award-winning system enforcing session-based voting logic and robust role-based access, complete with advanced administrative dashboards.",
    img: "/p3.png",
    iconLists: [
      "/re.svg",
      "/nodejs.svg",
      "/mongodb.svg",
      "/ts.svg",
    ],
    link: "https://feedback-system-lake.vercel.app/",
  },
  {
    id: 4,
    title: "E-Commerce Frontend Engine",
    des: "Production-ready storefront built using Next.js, featuring optimized data-fetching patterns and a precision backend-driven query builder.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg"],
    link: "https://fillracks.com",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer at Eikoshealth.com",
    desc: "Architected event-driven microservices on AWS and deployed an AI automation system (EISHA) that drives 60% of appointment bookings with a 99% payment webhook success rate.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Development Intern at Fillracks Pvt. Ltd.",
    desc: "Engineered high-performance e-commerce interfaces with Next.js and optimized backend-driven data filtering workflows, delivering features under strict release deadlines.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-Stack Lead at Alumni Portal RSCOE",
    desc: "Spearheaded a cross-functional team to build a scalable monorepo platform connecting alumni and students, managing RESTful API design and Next.js frontend logic.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "National Hackathon Winner",
    desc: "Secured First Prize at Hacksprint v5.0 (MMCOE), demonstrating rapid problem-solving, architectural design mapping, and robust full-stack implementation capabilities.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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
