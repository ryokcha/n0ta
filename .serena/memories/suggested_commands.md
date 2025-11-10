# Suggested Commands for n0ta Portfolio Project

## Development & Running
```bash
# Install dependencies (if not already installed)
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm build

# Start production server
npm start
```

## Code Quality
```bash
# Run ESLint to check code quality
npm run lint

# Fix ESLint errors automatically
npm run lint -- --fix
```

## Git Commands
```bash
# Check git status
git status

# View recent commits
git log --oneline -10

# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push origin main
```

## Useful npm Commands
```bash
# List installed dependencies
npm list

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

## Project Navigation
- **Main App Directory**: `/app`
- **Public Assets**: `/public`
- **TypeScript Config**: `tsconfig.json`
- **Next.js Config**: `next.config.ts`
- **Tailwind Config**: Configured via PostCSS (postcss.config.mjs)
- **ESLint Config**: `eslint.config.mjs`
