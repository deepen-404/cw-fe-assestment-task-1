# Code Refinement Assessment - [Live Demo](https://cw-fe-assestment-task-1-phi.vercel.app/)

## Project Setup & Code Quality

- Fixed build errors and configured `Prettier` for consistent code formatting
- Added `Husky` pre-commit hooks for automatic linting and formatting checks
- Cleaned up unused dependencies and files
- Refactored to `absolute imports` for better maintainability
- Added page-specific file and folder structure for better organization

## Component Development

- Broke down each UI section into its own component (`header`, `logo`, `user-avatar`, `body`, `tag-list`)  for better maintainability  
- Created reusable `SearchBar` component with `variants`, `JSDoc` documentation, `useSearchBarValues` hook, and proper TypeScript interfaces
- Created reusable `Image` component for optimized image loading and error handling

## Accessibility Implementation

- **Semantic HTML**: Added proper landmarks (`main`, `section`, `nav`) and heading hierarchy
- **Keyboard Navigation**: Made all interactive elements `focusable` with white focus rings for dark theme
- **Screen Reader Support**: Added ARIA labels, roles, and proper form semantics

## Component-Specific Changes

- **Logo**: Converted to button with keyboard focus and scroll-to-top functionality
- **User Avatar**: Made keyboard accessible with proper ARIA labeling
- **Search Components**: Added form structure, search roles, and proper event handling
- **Tag Lists**: Implemented semantic list structure with keyboard navigation

## Optimization

- Used `webp` format for hero image resulting in  reduced file size and faster load time (from approximately 2 MB to 44 KB )
- Removed 37 unused UI components and 25 unused dependencies, reducing the final bundle size.

## Technical Decisions

- Used separate branches for changes and improvements to maintain clean development workflow
- Maintained strict TypeScript typing while buidling components adding accessibility features
- Avoided barrel imports and exports as per tkdodo's [blog](https://tkdodo.eu/blog/please-stop-using-barrel-files)
- Added css variables for reusable colors from design
- Chose white focus indicators for optimal contrast on dark background

**Result**: Transformed static UI into fully responsive, accessible, keyboard-navigable interface.
