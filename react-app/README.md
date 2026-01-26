# SalmonCloud Landing (React)

This repository contains the SalmonCloud marketing site rebuilt with Vite + React. It uses a shared design system (light/dark theme, frosted cards, etc.) and pulls legal pages directly from the original static HTML.

## Getting Started

```bash
git clone https://github.com/salmoncloud/landing_page.git
cd landing_page/react-app
npm install
npm run dev
```

Open the URL printed by Vite (default `http://localhost:5173/`) to preview the site.

### Production Build

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` – wraps layout, routes, theme context
- `src/components/layout` – navigation, footer, etc.
- `src/components/sections` – hero, metrics, services, map, OS library, CTA, community, status/legal bar
- `src/data/siteData.js` – copy + card metadata, dropdown items, etc.
- `src/context/ThemeContext.jsx` – light/dark theme toggler using `data-theme`
- `src/content` – HTML used for Privacy and Terms pages

## Requirements

- Node.js 20.8+ (project currently uses Vite 5, compatible with Node 20.8.0)
- npm 10+

You may see engine warnings if Node < 20.19, but build/dev still function.
