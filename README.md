# 🚀 Michel Maia - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site presents Michel Maia's skills, featured projects, professional experience, resume, and contact form in a polished single-page experience.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- Responsive single-page portfolio layout
- Dark and light theme toggle with persisted preference
- Animated hero section with resume download and project CTA
- GSAP-powered custom cursor and magnetic hover interactions on desktop
- Scroll-driven professional experience timeline
- Projects, skills, experience, contact, and footer sections driven by shared constants
- EmailJS contact form with client-side validation and submit feedback
- Reduced-motion handling for users who prefer less animation

## 🛠️ Tech Stack

- React 19
- TypeScript 5
- Vite 6
- Tailwind CSS 4
- GSAP
- Lucide React
- EmailJS
- npm

## 📋 Prerequisites

- Node.js 18 or newer
- npm

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/dimermichel/portfolio-2025.git
   cd portfolio-2025
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your local environment file:

   ```bash
   cp .env.example .env
   ```

4. Add your EmailJS credentials to `.env`.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open `http://localhost:3000`.

## 🔑 Environment Variables

The contact form uses EmailJS and expects these Vite variables:

| Variable                   | Description         |
| -------------------------- | ------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service ID  |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key  |

`.env` is ignored by Git. `.env.example` contains safe placeholder values for local setup.

## 📜 Available Scripts

- `npm run dev` - Start the local Vite development server on port `3000`
- `npm run build` - Build the production bundle
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```text
portfolio-2025/
├── components/             # Portfolio sections and shared components
│   ├── Contact.tsx         # EmailJS contact form
│   ├── Experience.tsx      # GSAP animated experience timeline
│   ├── Footer.tsx          # Footer and social links
│   ├── Hero.tsx            # Hero section and primary CTAs
│   ├── Navbar.tsx          # Navigation and theme toggle
│   ├── Projects.tsx        # Featured projects grid
│   ├── Skills.tsx          # Skill categories
│   └── ui/
│       ├── Cursor.tsx      # Desktop custom cursor
│       ├── Magnetic.tsx    # Magnetic hover wrapper
│       ├── ScrollToTop.tsx # Scroll-to-top control
│       └── Section.tsx     # Reusable animated section wrapper
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── assets/             # Images and decorative assets
├── App.tsx                 # Main app shell
├── constants.ts            # Navigation, social links, skills, projects, and experience data
├── index.css               # Tailwind theme, global styles, and animation helpers
├── index.html              # HTML template
├── index.tsx               # React entry point
├── types.ts                # Shared TypeScript types
├── vite.config.ts          # Vite, React, Tailwind, env, and alias configuration
└── README.md
```

## 🎨 Customization

Most portfolio content lives in `constants.ts`:

- `NAV_ITEMS` controls the navbar anchor links.
- `SOCIAL_LINKS` controls social icons and profile URLs.
- `SKILLS` controls the skill category lists.
- `PROJECTS` controls the featured project cards.
- `EXPERIENCE` controls the professional timeline.

The resume download points to `public/resume.pdf`. Replace that file when updating the downloadable resume.

Global colors, glass styles, cursor styles, timeline progress styles, and reduced-motion behavior live in `index.css`.

## 🌐 Deployment

Create a production build:

```bash
npm run build
```

The optimized output is generated in `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider.

## 👤 Author

**Michel Maia**

- GitHub: [@dimermichel](https://github.com/dimermichel)
- LinkedIn: [@dimermichel](https://www.linkedin.com/in/dimermichel)
- Twitter: [@DMichelMaia](https://x.com/DMichelMaia)
- Email: [dimermichel@gmail.com](mailto:dimermichel@gmail.com)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<p align="center">Made with ❤️ by Michel Maia</p>
