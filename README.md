# 🚀 Michel Maia - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a beautiful dark/light theme, smooth animations, and a mobile-first design approach.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

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
- **Package Manager:** npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

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

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:3000` to see the portfolio in action.

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

### Personal Information

Edit the `constants.ts` file to update:

- Navigation items
- Social media links
- Skills and technologies
- Projects showcase
- Work experience

### Styling

The project uses Tailwind CSS. You can customize:

- Colors and themes in the Tailwind configuration
- Component styles directly in the component files
- Global styles in the main CSS file

### Profile Picture

Update the GitHub avatar URL in `components/Navbar.tsx`:

```tsx
src = "https://avatars.githubusercontent.com/u/YOUR_GITHUB_ID?v=4";
```

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
- Email: dimermichel@gmail.com

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<p align="center">Made with ❤️ by Michel Maia</p>
