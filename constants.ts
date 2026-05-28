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
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
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
    skills: [
      "AWS",
      "Vercel",
      "Oracle Cloud",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      "Git",
      "CI/CD",
      "Github Actions",
      "JUnit",
      "Prometheus",
      "Grafana",
      "Swagger",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Booky - Speak with your AI Book",
    description:
      "Booky is an AI-powered book companion that allows users to interact with their favorite books in a conversational way.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Vercel Blobs",
      "VAPI AI",
      "Clerk Auth",
    ],
    demoUrl: "https://booky-weld.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1720465593275-6d4c64d7da55?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dimermichel/booky",
    featured: true,
  },
  {
    id: "2",
    title: "Intelligent Triage and Reception System",
    description:
      "Fullstack enterprise-grade serverless hospital triage and reception system designed to optimize patient flow.",
    tags: [
      "Java",
      "React",
      "Quarkus",
      "Terraform",
      "AWS Lambda",
      "SQS",
      "CloudFront",
      "S3",
      "WebSockets",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1565307528294-f70f3c7094e0?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dimermichel/triagem-hospitalar",
    featured: true,
  },
  {
    id: "3",
    title: "Course Feedback System",
    description:
      "Enterprise-grade serverless feedback management system for online courses.",
    tags: [
      "Java",
      "Quarkus",
      "Terraform",
      "SNS/SQS",
      "AWS Lambda",
      "EventBridge",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1629836472253-577cb69025bf?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dimermichel/course-feedback-system",
    featured: true,
  },
  {
    id: "4",
    title: "Time Care",
    description:
      "A microservices-based healthcare scheduling platform designed to streamline the connection between patients and medical professionals.",
    tags: ["Java", "GraphQL", "Docker", "PostgreSQL", "MongoDB", "RabbitMQ"],
    imageUrl:
      "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dimermichel/timecare",
    featured: true,
  },
  {
    id: "5",
    title: "Quickbite Restaurant",
    description:
      "A modern Spring Boot application for food service management following Clean Architecture principles.",
    tags: ["Java", "Spring Framework", "Docker", "PostgreSQL"],
    imageUrl: "https://picsum.photos/id/163/800/600",
    repoUrl: "https://github.com/dimermichel/quickbite",
    featured: true,
  },
  {
    id: "6",
    title: "Video Prompter App",
    description:
      "Create scripts and record yourself with confidence. A teleprompter app that helps you deliver your message smoothly.",
    tags: ["React Native", "Expo", "Typescript", "Styled Components"],
    imageUrl:
      "https://images.unsplash.com/photo-1765285262680-1175453963d5?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dimermichel/promakerapp",
    featured: true,
  },
  {
    id: "7",
    title: "Personal Portfolio Website",
    description:
      "Personal portfolio website built with React, TypeScript, and Tailwind CSS to showcase projects and professional experience, featuring a modern design and responsive layout.",
    tags: ["React", "Vite", "Typescript", "Tailwind CSS", "EmailJS"],
    imageUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dimermichel/portfolio-2025",
    featured: true,
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
