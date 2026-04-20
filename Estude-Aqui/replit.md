# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Estude Aqui (artifacts/estude-aqui)
Brazilian educational SPA at `/` with 13 school subjects (Português, Matemática, História, Geografia, Ciências, Física, Química, Biologia, Inglês, Educação Física, Artes, Filosofia, Sociologia). Each subject has 5 topics with:
- Full Portuguese explanations
- 5 real educational YouTube videos per topic (325 total — all replaced with genuine Brazilian educational content, zero placeholders)
- 5 exercises with answers/resolutions
- 20+ PDFs per subject (anchor links)
- localStorage login/dashboard, favorites, history
- AdSense placeholder spaces
- SEO meta tags (pt-BR, OG, Twitter card)
- SPA routing with Wouter, lazy loading + Suspense
- Blue/purple design (`#1E40AF` / `#7C3AED`)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
