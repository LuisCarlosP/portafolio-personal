# Personal Portfolio

A modern, interactive developer portfolio built with React and Vite. Features a unique terminal-style interface alongside a traditional portfolio layout, with internationalization support, 3D backgrounds, and smooth scroll animations.

## Features

- **Dual Interface**: Traditional portfolio sections and an interactive terminal interface
- **Internationalization**: Full support for English and Spanish (i18next)
- **3D Visuals**: Interactive background using Three.js and React Three Fiber
- **Scroll Animations**: Smooth GSAP-powered animations on scroll
- **Theme System**: Multiple terminal themes (Dracula, Solarized, Matrix, Catppuccin)
- **Contact Form**: EmailJS integration for direct messaging
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Core | React 19, Vite 7 |
| 3D/Graphics | Three.js, React Three Fiber, Drei |
| Animations | GSAP |
| Routing | React Router DOM |
| i18n | i18next, react-i18next |
| Icons | Font Awesome |
| UI Components | Swiper |
| Email | EmailJS |

## Project Structure

```
src/
├── components/         # Shared components (LoadingScreen)
├── features/
│   ├── portfolio/      # Main portfolio sections
│   │   └── components/ # Hero, About, Skills, Projects, Contact, Footer
│   └── terminal/       # Terminal feature
│       ├── components/ # Terminal UI components
│       └── utils/      # Command handlers
├── hooks/              # Custom React hooks
├── i18n/               # Internationalization config and translations
├── pages/              # Route pages
├── providers/          # Context providers
└── utils/              # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Add your EmailJS credentials to .env
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## License

MIT
