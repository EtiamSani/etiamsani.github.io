import {
  frontend,
  backend,
  entrepreneur,
  javascript,
  html,
  css,
  reactjs,
  vite,
  tailwind,
  nodejs,
  science,
  git,
  threejs,
  postgresql,
  smart,
  mytherapist,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Me concernant",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vite",
    icon: vite,
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];





const projects = [
  {
    name: "My Therapist",
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
    source_code_link: "https://github.com/EtiamSani/Project-my-therapist-back",
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
    source_code_link: "https://github.com/EtiamSani/Live-stock-tracker-",
  },
];

export { services, technologies, projects };
