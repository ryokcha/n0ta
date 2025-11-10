# Code Conventions & Style Guidelines

## TypeScript Configuration
- **Strict Mode**: Enabled
- **Module System**: ESM (esnext)
- **Target**: ES2017
- **JSX**: react-jsx

## Naming Conventions
- **Components**: PascalCase (e.g., `HomePage`, `ContactForm`)
- **Functions/Variables**: camelCase (e.g., `handleSubmit`, `isLoading`)
- **Constants**: camelCase (e.g., `maxRetries`, `defaultTimeout`)
- **CSS Classes**: kebab-case via Tailwind (e.g., `flex items-center justify-between`)

## File Structure
- **Pages**: `/app` directory using App Router
- **Components**: Create `/app/components` for reusable components
- **Styles**: Use Tailwind CSS utility classes (no separate CSS files needed for most cases)
- **Global Styles**: `/app/globals.css`
- **Public Assets**: `/public` directory

## Component Standards
- Use functional components with TypeScript
- Prefer hooks (useState, useEffect, etc.)
- Type all props using interfaces
- Use `Readonly<>` for immutable props when appropriate
- Extract type definitions to separate files if components become complex

## Code Style
- **Quote Style**: Double quotes (`"`)
- **Semicolons**: Yes
- **Line Length**: No strict limit (follow readability)
- **Indentation**: 2 spaces (ESLint default)
- **Trailing Commas**: Yes (ESLint default)

## ESLint Configuration
- Uses `eslint-config-next/core-web-vitals`
- Uses `eslint-config-next/typescript`
- Ignored files: `.next`, `out`, `build`, `next-env.d.ts`
- Run linting with: `npm run lint`

## Import Paths
- Use path aliases: `@/*` refers to root directory
- Example: `import Layout from '@/app/components/Layout'`
