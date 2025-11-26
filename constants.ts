import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import {
  NavItem,
  SocialLink,
  Project,
  ExperienceItem,
  SkillCategory,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/dimermichel", icon: Github },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/dimermichel",
    icon: Linkedin,
  },
  { platform: "Twitter", url: "https://x.com/DMichelMaia", icon: Twitter },
  { platform: "Email", url: "mailto:dimermichel@gmail.com", icon: Mail },
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "Angular",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap 5",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Java",
      "Node.js",
      "Spring Boot",
      "Express",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "Grpc",
      "Kafka",
      "RabbitMQ",
      "Microservices",
    ],
  },
  {
    name: "Database & Cloud",
    skills: ["AWS", "PostgreSQL", "MongoDB", "Redis", "Docker"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "CI/CD", "JUnit", "Prometheus", "Grafana", "Swagger"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Quickbite Restaurant API",
    description:
      "A modern Spring Boot application for food service management following Clean Architecture principles.",
    tags: ["Java", "Spring Framework", "Docker", "PostgreSQL"],
    imageUrl: "https://picsum.photos/id/163/800/600",
    repoUrl: "https://github.com/dimermichel/quickbite",
    featured: true,
  },
  {
    id: "2",
    title: "Video Prompter App",
    description:
      "Create scripts and record yourself with confidence. A teleprompter app that helps you deliver your message smoothly.",
    tags: ["React Native", "Expo", "Typescript", "Styled Components"],
    imageUrl:
      "https://images.unsplash.com/photo-1600195558301-9197701f6758?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dimermichel/promakerapp",
    featured: true,
  },
  {
    id: "3",
    title: "Travel App",
    description:
      "Travel planning app that helps users discover new destinations and create itineraries.",
    tags: ["React", "Node.js", "Google APIs", "MongoDB"],
    imageUrl: "https://picsum.photos/seed/project3/800/600",
    repoUrl: "https://github.com/dimermichel/Ironhack-Project-3-Frontend",
    featured: false,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    company: "M9 Solution LLC",
    role: "Full Stack Developer",
    period: "2022 - Present",
    description: [
      "Feature Development & Modernization: Led the modernization of a SaaS web platform for church management, migrating the entire UI from legacy Angular to Angular 17, Bootstrap 5, and mobile-friendly responsive design.",
      "Performance Optimization: Applied lazy loading, Angular Signals, and RxJS observables to enhance component rendering and asynchronous data handling, reducing page load time by 40%.",
      "Full-Stack Development: Developed and deployed scalable back-end services using Java (Spring Boot, Spring Data, Spring Security) and Node.js, integrating with PostgreSQL databases and leveraging microservices architecture for improved performance and reliability.",
      "Cloud & DevOps Integration: Implemented AWS pipelines for application hosting, boosting uptime and deployment efficiency. Oversaw CI/CD workflows and automated testing to ensure secure, seamless deployments.",
    ],
    skills: ["Angular", "Java", "Spring Boot", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: "2",
    company: "Clever Church Software Corp.",
    role: "Full Stack Developer",
    period: "2021 - 2022",
    description: [
      "Built and maintained a React with TypeScript codebase optimized for mobile and web responsiveness, implementing state management and improving user experience.",
      "Developed and maintained core features of a SaaS platform serving religious institutions, enhancing application performance and reliability.",
      "Designed RESTful APIs and integrated automated testing pipelines to ensure continuous delivery, reducing deployment time by30%.",
    ],
    skills: ["React", "React Native", "TypeScript", "Java", "MongoDB"],
  },
];
