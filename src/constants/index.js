import {
  frontend,
  backend,
  entrepreneur,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  kanban,
  nestjs,
  java,
  springboot,
  vite,
  Nextjs,
  tailwind,
  nodejs,
  science,
  git,
  threejs,
  postgresql,
  smart,
  mytherapist,
  vêtements,
  opti,
  docker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Me concernant 🚀",
  },
];

const services = [
  {
    title: "Développement front-end",
    icon: frontend,
  },
  {
    title: "Développement back-end",
    icon: backend,
  },
  {
    title: "Esprit entrepreneurial",
    icon: entrepreneur,
  },
  {
    title: "Rigueur scientifique",
    icon: science,
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
    name: "Vite",
    icon: vite,
  },
  {
    name: "Next",
    icon: Nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring boot",
    icon: springboot,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Docker",
    icon: docker,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];





const projects = [
  {
    name: "My Therapist API",
    description:
      "Saas mise en relation des clients avec des psychologues propre au besions de chaque clients",
    tags: [
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "APIRest",
        color: "green-text-gradient",
      },
      {
        name: "Back-end",
        color: "orange-text-gradient",
      },
    ],
    image: mytherapist,
    demo: true,
    source_code_link: "https://github.com/EtiamSani/Project-my-therapist-back",
    demo_link: "https://my-therapist.netlify.app/",
  },
  {
    name: "Smart Stock Tracker",
    description:
      "Application web permettant de suivre en temps réel ses actions préférées.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "APIRest",
        color: "green-text-gradient",
      },
      {
        name: "Full Stack",
        color: "orange-text-gradient",
      },
    ],
    image: smart,
    demo:true,
    source_code_link: "https://github.com/EtiamSani/Live-stock-tracker-",
    demo_link: "https://main--jolly-conkies-bbb7ae.netlify.app/",
  },
  {
    name: "Vêtements.API",
    description:
      "API RESTful d'un site de vente de vêtements en ligne.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring boot",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "JPA",
        color: "green-text-gradient",
      },
      {
        name: "Flyway",
        color: "pink-text-gradient",
      },
      {
        name: "APIRest",
        color: "green-text-gradient",
      },
      {
        name: "Back-end",
        color: "orange-text-gradient",
      },
    ],
    image: vêtements,
    demo:true,
    doc:true,
    source_code_link: "https://github.com/EtiamSani/Project-e-commerce-API",
    demo_link: "https://vetements-api.netlify.app",
  },
  {
    name: "OptiTeam Builder",
    description:
      "Application web de gestion d'équipe permettant la formation d'équipes de façon optimale",
    tags: [
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Nest.js",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "APIRest",
        color: "green-text-gradient",
      },
      {
        name: "Full Stack",
        color: "orange-text-gradient",
      },
    ],
    image: opti, 
    demo:false,
    doc:false,
    source_code_link: "https://github.com/EtiamSani/Project-optiteam-builder",
    source_code_link_2: "https://github.com/EtiamSani/Project-optiteam-builder"
    
  },
  {
    name: "Kanban",
    description:
      "Organisateur de tâches",
    tags: [
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bulma",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "APIRest",
        color: "green-text-gradient",
      },
      {
        name: "Full Stack",
        color: "orange-text-gradient",
      },
    ],
    image: kanban, 
    demo:false,
    doc:false,
    source_code_link: "https://github.com/EtiamSani/kanban-front",
    source_code_link_2: "https://github.com/EtiamSani/kanban-api",
    demo_link: "",
  },
];

export { services, technologies, projects };
