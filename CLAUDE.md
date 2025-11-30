# Claude AI Guidelines for Shadcn Studio + Astro Project

## Project Overview
This is an Astro project with React integration, Tailwind CSS, and shadcn/ui components. Use these guidelines when generating or modifying UI components.

## Framework Configuration
- **Framework**: Astro 5.x with React integration
- **UI Library**: shadcn/ui (New York style)
- **Styling**: Tailwind CSS v4
- **TypeScript**: Strict mode enabled
- **Import Alias**: `@/*` maps to `src/*`

## Component Structure

### File Organization
```
src/
├── components/
│   ├── ui/           # shadcn/ui components (auto-generated)
│   └── ...           # Custom components
├── lib/
│   └── utils.ts      # Utility functions (cn, etc.)
├── styles/
│   └── global.css    # Global styles and Tailwind CSS
└── pages/            # Astro pages
```

### Import Patterns
```typescript
// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Utilities
import { cn } from '@/lib/utils';

// Styles (in layout or page files)
import '@/styles/global.css';
```

## Best Practices

### 1. Component Generation
- Generate **one block at a time** for precision
- Use **Agent Mode** for optimal results
- Prefer **Claude Sonnet 3.5+** models
- Create **fresh chat windows** for each new component

### 2. React Components in Astro
- Mark interactive components with `client:load` or appropriate client directive
- Example:
```astro
---
import MyReactComponent from '@/components/MyReactComponent';
---
<MyReactComponent client:load />
```

### 3. Styling
- Use Tailwind CSS utility classes
- Leverage CSS variables from `src/styles/global.css`
- Use the `cn()` utility for conditional classes
- Base color: **Neutral**
- CSS Variables: **Enabled**

### 4. Accessibility
- Ensure all components are keyboard navigable
- Include proper ARIA labels and roles
- Maintain semantic HTML structure
- Test with screen readers when possible

### 5. TypeScript
- Use strict TypeScript typing
- Define proper prop interfaces
- Avoid `any` types

## Shadcn Studio Commands

### Available Commands:
- `/cui` - **Customize existing blocks**: Reuse layouts with custom content
- `/iui` - **Generate inspired designs**: Creative, unique UI (Pro tier only)
- `/rui` - **Refine existing blocks**: Edit and update components
- `/ftc` - **Figma to code**: Convert Figma designs to code

### Command Usage Tips:
1. **Be specific** with prompts for better output quality
2. **One component at a time** maintains code quality
3. **Preserve Figma frame names** when using `/ftc`
4. **Review generated code** before committing

## Component Installation

### Adding shadcn/ui Components:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

### Manual Installation:
Components are automatically added to `src/components/ui/` with proper TypeScript types and styling.

## Code Quality Standards

### 1. Clean Code
- Self-documenting variable and function names
- Small, focused components
- Avoid deep nesting

### 2. Performance
- Lazy load components when appropriate
- Optimize images and assets
- Use Astro's partial hydration features

### 3. Responsiveness
- Mobile-first approach
- Test on multiple screen sizes
- Use Tailwind's responsive utilities

### 4. Version Control
- Commit generated components separately
- Review diffs before committing
- Document significant changes

## Common Patterns

### Button Component:
```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card Component:
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

## Troubleshooting

### Import Errors
- Verify `@/*` alias in `tsconfig.json`
- Check component exists in `src/components/ui/`
- Ensure dependencies are installed

### Styling Issues
- Verify `global.css` is imported
- Check Tailwind CSS variables in `global.css`
- Confirm `components.json` configuration

### Type Errors
- Run `npm run astro check` for type checking
- Verify TypeScript version compatibility
- Check React types are installed

## Resources
- [Astro Docs](https://docs.astro.build)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Shadcn Studio MCP](https://shadcnstudio.com/mcp)
