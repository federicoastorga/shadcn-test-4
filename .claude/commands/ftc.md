---
description: Convert Figma designs to shadcn/ui code
---

# Figma to Code (/ftc)

You are helping to convert Figma designs into shadcn/ui components.

## Requirements:

1. **Figma URL or file**: User must provide Figma design link or file
2. **Frame names**: Original block frame names must be intact
3. **Access**: Ensure proper Figma access permissions

## Guidelines:

1. **Analyze design**: Study the Figma design structure and styling
2. **Component mapping**: Map Figma elements to shadcn/ui components
3. **Preserve intent**: Maintain the designer's vision
4. **Responsive design**: Implement proper breakpoints
5. **Exact spacing**: Match padding, margins, and gaps

## Process:

1. Request Figma URL or design details
2. Analyze the design structure
3. Identify appropriate shadcn/ui components
4. Map design tokens to Tailwind classes
5. Generate the component code
6. Add responsive behavior
7. Implement interactions and states

## Component Mapping:

- **Buttons** → `@/components/ui/button`
- **Cards** → `@/components/ui/card`
- **Forms** → `@/components/ui/input`, `form`, `label`
- **Dialogs** → `@/components/ui/dialog`
- **Navigation** → Custom components using shadcn/ui primitives

## Color & Style Mapping:

- Map Figma colors to Tailwind classes or CSS variables
- Use the neutral color scheme as base
- Preserve design system consistency
- Implement dark mode if specified in design

## Output Format:

- React component with TypeScript
- Exact Tailwind styling matching Figma
- shadcn/ui component integration
- Responsive breakpoints
- Usage instructions

## Important Notes:

⚠️ **Frame Names**: Do NOT rename Figma frame blocks, as this prevents proper identification and installation.

Remember: This is an **Astro + React** project. Components will need client directives in .astro files.
