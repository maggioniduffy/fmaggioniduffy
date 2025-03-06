export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: "Emily Johnson",
//     position: "Marketing Director at GreenLeaf",
//     img: "assets/review1.png",
//     review:
//       "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//   },
//   {
//     id: 2,
//     name: "Mark Rogers",
//     position: "Founder of TechGear Shop",
//     img: "assets/review2.png",
//     review:
//       "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
//   },
//   {
//     id: 3,
//     name: "John Dohsas",
//     position: "Project Manager at UrbanTech ",
//     img: "assets/review3.png",
//     review:
//       "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//   },
//   {
//     id: 4,
//     name: "Ether Smith",
//     position: "CEO of BrightStar Enterprises",
//     img: "assets/review4.png",
//     review:
//       "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
//   },
// ];

export const myProjects = [
  {
    title: "YC Directory",
    desc: "Site for submitting and reviewing new starups Pitch. Vote and get noticed in virtual competitions.",
    subdesc:
      "Built as a serverles app with Next.js 15, Tailwind CSS, TypeScript, and Sanity. Tracked with Sentry plus user authentication provided by OAuth and Github. YC Directory is fully responsive and allows scalability.",
    href: "https://yc-jsm-seven.vercel.app/",
    texture: "/textures/project/yc.mp4",
    logo: "/assets/YC.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "SolversNotes",
    desc: "Simple app to add, edit and, delete notes. Allows each user to categorize notes and query by its tags, search or status.",
    subdesc:
      "Fullstack app made with Next.js 15 and NestJS. Relying in a Mongo DB and auth provided by github. Made for a work interview with Ensolvers.",
    href: "https://solversnotes.vercel.app/",
    texture: "/textures/project/notes.mp4",
    logo: "/assets/notes.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "NestJS",
        path: "/assets/nestjs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/mongo.png",
      },
    ],
  },
  {
    title: "Pacifico Basquet",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://pacifico-frontend.vercel.app/",
    texture: "/textures/project/pacifico.mp4",
    logo: "/assets/pacifico.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg,rgba(58, 58, 58, 0.31),rgba(109, 102, 6, 0.31)), linear-gradient(180deg, rgba(107, 93, 12, 0.9) 0%, rgba(225, 252, 105, 0.8) 100%)",
      border: "0.2px solid rgb(19, 20, 20)",
      boxShadow: "0px 0px 60px 0px rgba(220, 223, 48, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Mongo DB",
        path: "/assets/mongo.png",
      },
      {
        id: 5,
        name: "NestJS",
        path: "/assets/nestjs.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [1, 4, 0]
      : isMobile
      ? [2, 4, 0]
      : isTablet
      ? [3, 4, 0]
      : [6, 3, 0],
    ringPosition: isSmall
      ? [-20, 24, 0]
      : isMobile
      ? [-24, 10, 0]
      : isTablet
      ? [-24, 22, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Scale AI",
    pos: "Software Developer for AI Training",
    duration: "May 2023 - Dec 2023",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/scale.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "National University of Comahue",
    pos: "Assistant Professor - Database I Course",
    duration: "Aug 2022 - Feb 2023",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/unco.png",
    animation: "idle",
  },
  {
    id: 3,
    name: "Ensolvers",
    pos: "Software Engineer Trainee",
    duration: "June 2022 - Aug 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 4,
    name: "Patagonian",
    pos: "Software Developer in NEST Program",
    duration: "Nov 2021 - Jan 2022",
    title:
      "Beautiful place to start as professional. Despite the brief time I learned a lot. Main task involved QA Automation with Playwright and Cucumber, plus backend development usgin NestJS",
    icon: "/assets/patagonian.png",
    animation: "salute",
  },
];
