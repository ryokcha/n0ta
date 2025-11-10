# Task Completion Checklist

## After Implementing Features or Fixes

### Code Quality Checks
- [ ] Run ESLint: `npm run lint`
- [ ] Check TypeScript compilation: `npm run build` (includes type checking)
- [ ] Verify code follows naming conventions (see code_conventions.md)

### Testing
- [ ] Run any existing tests (if added to project)
- [ ] Manually test in development server: `npm run dev`
- [ ] Test responsive design in browser dev tools (mobile, tablet, desktop)

### Before Committing
- [ ] All linting errors resolved
- [ ] TypeScript compilation successful
- [ ] Code follows project conventions
- [ ] Commit message is clear and descriptive
- [ ] Related pages/components updated if necessary

### Common Scenarios

#### Adding a New Page
1. Create folder in `/app` (e.g., `/app/about`)
2. Add `page.tsx` file with the page component
3. Add layout if needed (optional)
4. Update navigation component with link to new page
5. Run lint and build checks

#### Adding a Reusable Component
1. Create component in `/app/components` with `.tsx` extension
2. Define TypeScript interface for props
3. Add proper exports
4. Import and use in pages
5. Run lint and build checks

#### Styling Changes
1. Use Tailwind CSS utility classes (prefer over custom CSS)
2. Test responsive breakpoints (sm, md, lg, xl)
3. Check dark mode compatibility if applicable
4. Verify no breaking changes to existing pages
