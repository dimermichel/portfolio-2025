# 🚀 Michel Maia - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a beautiful dark/light theme, smooth animations, and a mobile-first design approach.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- **🎨 Dark/Light Theme** - Toggle between dark and light modes with smooth transitions
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **🎯 Modern UI/UX** - Clean, professional design with attention to detail
- **🧩 Component-Based** - Modular React components for easy maintenance
- **🎭 Smooth Animations** - Engaging user experience with subtle animations
- **🔍 SEO Friendly** - Optimized metadata and semantic HTML
- **♿ Accessible** - ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework:** React 19.2.0
- **Language:** TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Email:** EmailJS
- **Package Manager:** npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

## 🔑 Environment Variables

The contact form is powered by [EmailJS](https://www.emailjs.com) and requires three environment variables. Copy `.env.example` to `.env` and fill in your own values:

```bash
cp .env.example .env
```

| Variable | Where to find it |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS dashboard → Email Services → your service → **Service ID** |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS dashboard → Email Templates → your template → **Template ID** |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS dashboard → Account → API Keys → **Public Key** |

> `.env` is gitignored and will never be committed. `.env.example` is safe to commit — it contains only placeholder values.

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dimermichel/portfolio-2025.git
   cd portfolio-2025
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` with your EmailJS credentials (see [Environment Variables](#-environment-variables) above).

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to see the portfolio in action.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```
portfolio-2025/
├── components/         # React components
│   ├── Contact.tsx     # Contact section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero/landing section
│   ├── Navbar.tsx      # Navigation bar with theme toggle
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── ui/             # Reusable UI components
│       ├── ScrollToTop.tsx
│       └── Section.tsx
├── App.tsx             # Main application component
├── constants.ts        # Configuration and static data
├── types.ts            # TypeScript type definitions
├── index.tsx           # Application entry point
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## 🎨 Customization

### Personal Information (`constants.ts`)

All site content is driven by the `constants.ts` file. Below is a guide for each exported constant.

---

#### `NAV_ITEMS` — Navigation links

```ts
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  // add or remove entries as needed
];
```

Each entry needs a `label` (display text) and an `href` (anchor link to the matching section `id`).

---

#### `SOCIAL_LINKS` — Social media icons in the navbar/footer

```ts
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/your-username", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: Linkedin },
  { platform: "Twitter", url: "https://x.com/your-handle", icon: Twitter },
  { platform: "Email", url: "mailto:your@email.com", icon: Mail },
];
```

Icons come from [Lucide React](https://lucide.dev/icons/). Import any icon from `lucide-react` and pass it as the `icon` value.

---

#### `SKILLS` — Skills section

```ts
export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Java", "Spring Boot"],
  },
  // add more categories as needed
];
```

Each category has a `name` and a `skills` array of plain strings.

---

#### `PROJECTS` — Projects showcase

```ts
export const PROJECTS: Project[] = [
  {
    id: "1",                           // unique string id
    title: "My Project",
    description: "A short description of the project.",
    tags: ["React", "TypeScript"],     // tech tags shown as badges
    imageUrl: "https://...",           // cover image URL
    repoUrl: "https://github.com/...", // GitHub link (optional)
    demoUrl: "https://...",            // live demo link (optional)
    featured: true,                    // whether to highlight the card
  },
];
```

Remove `demoUrl` or `repoUrl` if the project has no live demo or public repo.

---

#### `EXPERIENCE` — Work experience timeline

```ts
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    company: "Company Name",
    role: "Your Role",
    period: "2023 - Present",
    description: [
      "First bullet point about your responsibilities.",
      "Second bullet point with an achievement.",
    ],
    skills: ["React", "Node.js"], // skills used at this job
  },
];
```

`description` is an array of strings — each string renders as a separate bullet point.

---

### Styling

The project uses Tailwind CSS. You can customize:

- Colors and themes in the Tailwind configuration
- Component styles directly in the component files
- Global styles in the main CSS file

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to be deployed.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dimermichel/portfolio-2025/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Michel Maia**

- GitHub: [@dimermichel](https://github.com/dimermichel)
- LinkedIn: [@dimermichel](https://www.linkedin.com/in/dimermichel)
- Twitter: [@DMichelMaia](https://x.com/DMichelMaia)
- Email: dimermichel@gmail.com

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<p align="center">Made with ❤️ by Michel Maia</p>
