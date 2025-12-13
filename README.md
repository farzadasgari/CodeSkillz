<h1 align="center">
CodeSkillz
</h1>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg?style=for-the-badge&logo=openaccess&logoColor=orange)](https://github.com/farzadasgari/CodeSkillz/blob/main/LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-crimson?style=for-the-badge&logo=rocket&logoColor=white)](https://farzadasgari.github.io/CodeSkillz)
[![Stars](https://img.shields.io/github/stars/farzadasgari/CodeSkillz?style=for-the-badge&logo=starship&color=yellow)](https://github.com/farzadasgari/CodeSkillz/stargazers)
[![Forks](https://img.shields.io/github/forks/farzadasgari/CodeSkillz?style=for-the-badge&logo=github&color=blue)](https://github.com/farzadasgari/CodeSkillz/network/members)

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

## 📖 About

**CodeSkillz** is a modern, full-featured online coding education platform that offers both live classes via Google Meet and recorded on-demand courses. Built with React and TypeScript, this platform provides an engaging learning experience for students looking to master programming skills.


## ✨ Features

### 🎥 Learning Options
- **Live Classes** - Interactive sessions via Google Meet with real-time Q&A
- **Recorded Courses** - On-demand video content for self-paced learning
- **Course Assignments** - Hands-on coding projects and exercises

### 👤 User Experience
- **User Dashboard** - Track progress, manage enrollments, and view achievements
- **Course Catalog** - Browse and filter available courses
- **Progress Tracking** - Monitor your learning journey with detailed analytics
- **Achievements System** - Earn badges and rewards for milestones

### 🌐 Internationalization
- **Multi-language Support** - Full i18n implementation with language switcher
- **RTL Support** - Right-to-left layout support for languages like Persian/Arabic

### 📱 Modern UI/UX
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile
- **Dark/Light Themes** - Theme switching with next-themes
- **Accessible Components** - Built with Radix UI primitives for accessibility
- **Smooth Animations** - Polished animations with Tailwind CSS

### 📝 Content & Community
- **Blog System** - Educational articles and tutorials
- **FAQ Section** - Searchable frequently asked questions
- **Newsletter Signup** - Stay updated with new courses and content
- **Contact Form** - Easy communication channel

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool & Dev Server |
| **React Router DOM** | Client-side Routing |
| **TanStack Query** | Server State Management |

### Backend
| Technology | Purpose |
|------------|---------|
| **Python** | Backend Language |
| **Django** | Web Framework |
| **Django REST Framework** | RESTful API |
| **PostgreSQL** | Relational Database |

### Styling
| Technology | Purpose |
|------------|---------|
| **Tailwind CSS** | Utility-first CSS |
| **Radix UI** | Accessible UI Primitives |
| **Lucide React** | Icon Library |
| **tailwindcss-animate** | Animations |

### Form & Validation
| Technology | Purpose |
|------------|---------|
| **React Hook Form** | Form Management |
| **Zod** | Schema Validation |

### Internationalization
| Technology | Purpose |
|------------|---------|
| **i18next** | Internationalization Framework |
| **react-i18next** | React Integration |
| **i18next-browser-languagedetector** | Auto Language Detection |

### Other Libraries
| Technology | Purpose |
|------------|---------|
| **Recharts** | Data Visualization |
| **date-fns** | Date Utilities |
| **Sonner** | Toast Notifications |
| **Embla Carousel** | Carousel Component |

## 📁 Project Structure

```
CodeSkillz/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Radix UI-based primitives
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CourseCard.tsx
│   │   ├── BlogCard.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── ... 
│   ├── contexts/          # React Context providers
│   ├── data/              # Static data and mock content
│   ├── hooks/             # Custom React hooks
│   ├── i18n/              # i18n configuration
│   ├── lib/               # Utility functions
│   ├── locales/           # Translation files
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── Courses.tsx
│   │   ├── CourseDetail.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Blog.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Auth.tsx
│   │   ├── FAQ.tsx
│   │   └── ... 
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json
├── tailwind.config.ts
├── vite.config. ts
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or Bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/farzadasgari/CodeSkillz. git
   cd CodeSkillz
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with Bun
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🌍 Deployment

The project is configured for GitHub Pages deployment. The live version is available at: 

🔗 **https://farzadasgari.github.io/CodeSkillz/**

To deploy your own instance:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

Contributions are welcome! Please read our [Code of Conduct](https://github.com/farzadasgari/CodeSkillz/blob/main/CODE_OF_CONDUCT.md) before contributing.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔒 Security

For security concerns, please review our [Security Policy](https://github.com/farzadasgari/CodeSkillz/blob/main/SECURITY.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/farzadasgari/CodeSkillz/blob/main/LICENSE) file for details.


## 📨 Contact

If you have any questions or suggestions regarding CodeSkillz, feel free to contact us at khufarzadasgari@gmail.com or std_farzad.asgari@khu.ac.ir.


## 🔗 Links

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://farzadasgari.ir/)

[![Google Scholar](https://img.shields.io/badge/Google%20Scholar-4285F4?style=for-the-badge&logo=googlescholar&logoColor=fff)](https://scholar.google.com/citations?user=Rhue_kkAAAAJ&hl=en)

[![ResearchGate](https://img.shields.io/badge/ResearchGate-0CB?style=for-the-badge&logo=researchgate&logoColor=fff)](https://www.researchgate.net/profile/Farzad-Asgari)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/farzad-asgari/)

[![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/farzad_asg)

---

## ⭐ Support & Donations

If you find CodeSkillz useful, please consider supporting development:

**💸 Crypto Donations**
- Bitcoin: `bc1qxd8um2jre6xz4je64uhar9eh9uzu9yrvzh08sm`
- Ethereum: `0xCc8693060409263F68e37f75f76d519c19B2bAdE`
- USDT (TRC20): `TLL9ou7PahrNob2GEppV3o4e5B9vYqgsJN`

**🌐 Donate via CoinDrop**

<p align="center">
  <a href="https://coindrop.to/farzadasgari" target="_blank">
    <img src="https://coindrop.to/embed-button.png" style="border-radius: 10px; height: 57px !important;width: 229px !important;" alt="Coindrop.to me">
  </a>
</p>

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/farzadasgari">FarZad</a></sub>
</div>
