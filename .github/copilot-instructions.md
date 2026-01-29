# Open Data Orbit - Copilot Instructions

## Project Overview

**Open Data Orbit** is a static site built with [Astro](https://astro.build) deployed to GitHub Pages. It serves as a Swedish community hub for learning about, building with, and sharing open data.

**Key Technologies**: Astro, TypeScript, Markdown/MDX, CSS (no external UI frameworks)
**Location**: `/site` directory
**Base Path**: `/open-data-hub-se/` (GitHub Pages)

## Architecture & Structure

### Directory Layout
```
/site
├── src/
│   ├── pages/           # Astro file-based routing
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layout wrappers
│   ├── content/         # Markdown content (guides collection)
│   └── styles/          # Global CSS
├── astro.config.ts      # Astro configuration
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies & scripts
```

### Routing & Pages
Routes are file-based via the `/src/pages` directory:
- `index.astro` → `/` (hero section with Card components)
- `guides/index.astro` → `/guides/` (lists all guides from content collection)
- `guides/[slug].astro` → `/guides/{guide-name}/` (individual guide pages)
- `resources.astro` → `/resources/`
- `labs.astro` → `/labs/`
- `community.astro` → `/community/` (links to GitHub Discussions)
- `rewards.astro` → `/rewards/`
- `about.astro` → `/about/`

## Key Patterns & Conventions

### 1. **Layout Pattern**
All pages wrap content in `Layout.astro` which provides:
- Global navigation (`Navigation` component)
- Meta tags (title, description)
- Footer with copyright

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Title" description="Meta description">
  <!-- Your content here -->
</Layout>
```

### 2. **Styling Approach**
- **Global variables** in `src/styles/globals.css`: `--color-*`, `--spacing-*`, `--font-size-*`, `--gradient-accent`
- **GitHub-inspired palette**: light grays, accent blue (`#0969da`), accent gradient
- **Scoped styles** in each `.astro` component using `<style>` blocks
- **No utility classes** – write semantic CSS inline in components

### 3. **Card Component**
Reusable card for displaying content snippets. Used on homepage and throughout:

```astro
<Card
  title="Learn"
  description="Explore guides and tutorials"
  icon="📚"
  href="/guides/"
/>
```

### 4. **Content Collections** (Astro Content)
Guides use Astro's content collections API:
- Location: `/src/content/guides/` (markdown files)
- Config: `/src/content/config.ts` (schema definition)
- Schema includes: `title`, `description`, `author`, `publishedAt`, `tags`
- Access via: `getCollection('guides')`

Example guide structure:
```markdown
---
title: Getting Started
description: Introduction to open data
author: Open Data Orbit
publishedAt: 2026-01-28
tags: [intro, basics]
---

# Your Markdown Content
```

### 5. **Navigation Component**
`Navigation.astro` provides consistent header across all pages:
- Displays logo "Open Data Orbit"
- Highlights active page using `Astro.request.url` path matching
- Responsive design (flex layout, adapts to mobile)

## Build & Deployment

### Scripts (in `package.json`)
```json
{
  "dev": "astro dev",        // Local dev server (port 3000)
  "build": "astro build",    // Build for production (outputs to `dist/`)
  "preview": "astro preview"
}
```

### GitHub Pages Deployment
- **Base path**: `base: '/open-data-hub-se/'` in `astro.config.ts`
- **Site URL**: `site: 'https://MelissaSkywalkz.github.io/open-data-hub-se/'`
- **Build output**: Static files in `dist/` → committed to `gh-pages` branch

## Adding Content

### New Guide
1. Create file: `/src/content/guides/my-guide.md`
2. Add frontmatter (title, description, etc.)
3. Write markdown content
4. Automatically appears on `/guides/` with slug `my-guide`

### New Page
1. Create `.astro` file in `/src/pages/` (e.g., `new-page.astro`)
2. Import `Layout` component
3. Add to Navigation menu (edit `src/components/Navigation.astro`)

## Design System

### Color Palette
- **Primary**: `--color-accent: #0969da` (GitHub blue)
- **Gradient**: `--gradient-accent: linear-gradient(135deg, #0969da 0%, #1f6feb 50%, #388bfd 100%)`
- **Backgrounds**: `--color-bg` (white), `--color-bg-secondary` (#f6f8fa light gray)
- **Text**: `--color-text` (dark), `--color-text-secondary` (muted)
- **Borders**: `--color-border` (light gray)

### Spacing Scale
- `--spacing-xs` to `--spacing-2xl` (0.25rem → 3rem)
- Use consistently for padding, margins, gaps

### Typography
- Font: System fonts (GitHub-style)
- Sizes: `--font-size-sm` to `--font-size-2xl`

## Component Development Guidelines

- **Keep components small** – each `.astro` file handles one UI element
- **Use scoped `<style>`** – CSS is scoped to component by default
- **Pass props via frontmatter** – `export interface Props { ... }`
- **Avoid external dependencies** – maintain lightweight build
- **Responsive by default** – use CSS Grid/Flexbox, test mobile view

## External Integrations

- **GitHub Discussions**: Link in community page (`/community.astro`)
- **Repository**: [github.com/MelissaSkywalkz/open-data-hub-se](https://github.com/MelissaSkywalkz/open-data-hub-se)

## Common Tasks

### Update a Page Title
- Edit the `<Layout title="...">` prop in the page's `.astro` file

### Change Colors
- Modify CSS variables in `/src/styles/globals.css`

### Add Navigation Link
- Update menu in `/src/components/Navigation.astro`

### Publish New Guide
- Add `.md` file to `/src/content/guides/` with proper frontmatter

## TypeScript Configuration

- Strict mode enabled (`"extends": "astro/tsconfigs/strict"`)
- JSX support for Astro (`"jsx": "react-jsx"`)
- Type safety enforced across `.astro` files

---

**Last Updated**: January 2026
