# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Next.js 16, port 3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Stack

- **Next.js 16** with App Router and React 19 — read `node_modules/next/dist/docs/` before writing Next.js code, APIs differ from older versions
- **Tailwind v4** — configured via `@import "tailwindcss"` in `globals.css`, no `tailwind.config.*`. Theme aliases use `@theme inline { --color-x: var(--x) }` pattern; use CSS var shorthand in Tailwind classes (e.g. `gap-(--space-5)`, `rounded-(--r-md)`)
- **next-themes** — sets `data-theme="light|dark"` on `<html>`; theme tokens live in `globals.css` under `[data-theme]` selectors

## Architecture

**Data layer** — all site content (lab info, publications, members, CTFs, news) is typed and exported from `src/data/index.ts`. Add content there first.

**Theme system** — `globals.css` defines all design tokens as CSS custom properties (`--bg`, `--fg`, `--accent`, spacing, type scale, etc.). `AccentProvider` (`src/contexts/ThemeContext.tsx`) manages accent color + density preference via `localStorage`, writing directly to `document.documentElement` style. `Providers` wraps both `ThemeProvider` and `AccentProvider`.

**Layout shell** — `layout.tsx` composes `<Topbar>` + `<main>` + `<Footer>` inside a full-width flex column. Inner content is constrained by `--content-max` (CSS var) and given horizontal breathing room via `--gutter: clamp(20px, 4vw, 56px)`.

**Server vs client** — pages and `Footer` are server components. `Topbar` is a client component (needs `usePathname`, `useTheme`). Server components cannot use event handlers; use the CSS hook classes in `globals.css` instead (e.g. `link-accent`, `btn-ghost-link`, `proj-card`).

**Component split**
- `src/components/layout/` — structural shell (Topbar, Footer, Providers, SearchBox)
- `src/components/ui/` — reusable display pieces (Icon, Wordmark, Logo, Avatar, PubRow, SectionHeader, etc.)
