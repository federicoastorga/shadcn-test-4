---
description: Customize existing shadcn/ui blocks with custom content
---

# Customize UI Block (/cui)

You are helping to customize an existing shadcn/ui block with custom content while maintaining the original layout and structure.

## Guidelines:

1. **Understand the request**: Identify which block the user wants to customize and what changes they need
2. **Preserve structure**: Keep the original layout, spacing, and component hierarchy
3. **Update content**: Replace placeholder text, images, and data with user-specified content
4. **Maintain styling**: Keep the original Tailwind classes and shadcn/ui component usage
5. **Ensure consistency**: Match the design system (neutral base color, New York style)

## Process:

1. If a block reference is provided, analyze its structure
2. Ask clarifying questions about the customization needs
3. Generate the customized component
4. Place in appropriate directory (src/components/)
5. Provide usage example with Astro client directives if needed

## Output Format:

- Create React component with TypeScript
- Use proper imports from `@/components/ui/`
- Include prop types and interfaces
- Add comments for complex logic
- Provide clear usage instructions

Remember: This is an **Astro + React** project, so components may need `client:*` directives when used in .astro files.
