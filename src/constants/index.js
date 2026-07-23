import {
  mobile,
  backend,
  js,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  laravel,
  nextjs,
  mysql,
  git,
  figma,
  docker,
  iflair,
  movie,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  carrent,
  taskm,
  tripguide,
  banking,
  threejs,
  phplogo,
} from "../assets";

export const resumeUrl = "/Vaibhav_FullStack.pdf";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "React Js & Next Js Developer",
    icon: mobile,
  },
  {
    title: "Laravel Developer",
    icon: backend,
  },
  {
    title: "AI Assisted Developer",
    icon: js,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PHP",
    icon: phplogo,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "iFlair Web Technologies Pvt. Ltd.",
    icon: iflair,
    iconBg: "#FAF9F7",
    date: "January 2024 - Present",
    points: [
      "Delivered end-to-end full-stack business modules, including frontend interfaces, backend APIs, authentication, databases, and deployment.",
      "Improved application performance, reliability and security through debugging, optimization, Docker-based deployments, and secure authentication workflows.",
      "Adopted AI-assisted engineering workflows using Cursor, OpenAI Codex, Claude Code and ChatGPT to accelerate feature development, debugging, refactoring, code reviews, and technical research while maintaining production-quality code.",
    ],
  },
  // {
  //   title: "Next.js Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using Next.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "MovieX",
    description:
      "Web-based platform that allows users to search, filter and trending movies and Tv-shows from API, providing a full details of movie/tv-shows shows that shows main actors actresses and also watch the trailer or other details.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/vaibhavjethva/MovieX",
  },
  {
    name: "Project Task Management",
    description:
      "Developed a full-stack task management website using Laravel-11 for the backend, React(Inertia) for the frontend seamless integration. Features task management, user authentication and organization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: taskm,
    source_code_link:
      "https://github.com/vaibhavjethva/laravel-react-task-management",
  },
  {
    name: "Horizon",
    description:
      "Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: banking,
    source_code_link: "https://github.com/vaibhavjethva/banking",
  },
];

export { services, technologies, experiences, projects };
