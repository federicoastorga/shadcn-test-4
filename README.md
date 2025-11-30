# Astro + shadcn/ui Project

A modern web application built with Astro 5, React, and shadcn/ui components.

## Tech Stack

- **Framework**: Astro 5.x with React integration
- **UI Library**: shadcn/ui (New York style)
- **Styling**: Tailwind CSS v3
- **TypeScript**: Strict mode enabled
- **Import Alias**: `@/*` maps to `src/*`

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (auto-generated)
│   └── ...           # Custom components
├── lib/
│   └── utils.ts      # Utility functions (cn, etc.)
├── layouts/
│   └── Layout.astro  # Base layout
├── styles/
│   └── global.css    # Global styles and Tailwind CSS
└── pages/            # Astro pages
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your app.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

Components will be automatically added to `src/components/ui/` with proper TypeScript types and styling.

## Using Components in Astro

When using React components in Astro files, remember to add the `client:load` directive:

```astro
---
import { Button } from '@/components/ui/button';
---

<Button client:load>Click me</Button>
```

## Configuration Files

- `astro.config.mjs` - Astro configuration with React and Tailwind
- `tailwind.config.mjs` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration with strict mode
- `components.json` - shadcn/ui configuration

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Shadcn Studio MCP](https://shadcnstudio.com/mcp)

## Available Commands

See [CLAUDE.md](./CLAUDE.md) for Shadcn Studio slash commands:

- `/cui` - Customize existing blocks
- `/iui` - Generate inspired designs (Pro tier)
- `/rui` - Refine existing blocks
- `/ftc` - Figma to code conversion
