# Japanese Hidden Gems

A small Vite + React starter site (TanStack Start) showcasing destinations, guides and journals — organized for a static SPA with optional Cloudflare Workers support.

## Tech stack

- Vite + React
- TypeScript
- TanStack Router & React Query
- Tailwind CSS and Radix UI components
- Optional Cloudflare Workers server (`src/server.ts`)

## Quick start

Prerequisites
- Node.js 18+ (or newer)
- Git
- Optional: Bun (used by the included Vercel config)

Install dependencies (choose one):

```bash
npm install
# or
bun install
# or
pnpm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
# or for a development-mode build
npm run build:dev
```

Preview the production build locally:

```bash
npm run preview
```

Linters & formatting

```bash
npm run lint
npm run format
```


## Project structure (key files)

- [src/server.ts](src/server.ts) — optional worker server entrypoint
- [src/router.tsx](src/router.tsx) — app router
- [src/routes](src/routes) — route pages for the site
- [src/components](src/components) — UI components and primitives
