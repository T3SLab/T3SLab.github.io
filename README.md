# T3S Lab Website

Portfolio website for the T3S (Security, Systems & Software) Research Laboratory.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-first config, `@custom-variant` dark mode)
- **next-themes** (dark / light / system toggle)
- **Framer Motion** (page transitions, staggered animations)
- **Lucide React** (icons)

## Getting Started

> Requires **Node.js ≥ 20**. If using `fnm`, run `fnm use 20` first.

```bash
npm install
npm run dev       # http://localhost:3000
```

## Pages

| Route           | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `/`             | Home — hero, stats, focus areas, recent pubs & posts, news   |
| `/members`      | Lab members with role filter and bio cards                   |
| `/publications` | Papers grouped by year with search, filters, and BibTeX cite |
| `/ctfs`         | CTF competition history, writeups, and skill breakdown       |
| `/projects`     | Research projects with status/tag filter                     |
| `/blogs`        | Blog list + `/blogs/[slug]` post detail with ToC sidebar     |

## Mock Data

All data lives in `src/data/`. Replace with real data or connect to a CMS.

| File              | Contents                                          |
| ----------------- | ------------------------------------------------- |
| `home.ts`         | Hero copy, stats, focus areas, news               |
| `members.ts`      | Lab members (PI, PhD, Masters, Undergrad, Alumni) |
| `publications.ts` | Papers with authors, venue, abstract, BibTeX      |
| `ctfs.ts`         | Competition history, writeups, skill tags         |
| `projects.ts`     | Projects with status, tech stack, highlights      |
| `blogs.ts`        | Blog posts with mock markdown content             |

## Theming

The site defaults to **dark mode**. Toggle with the sun/moon button in the navbar.

Colors are defined as CSS variables in `src/app/globals.css`. Tailwind v4 picks them up via the `@theme inline` block — no `tailwind.config.ts` needed.

## Scripts

```bash
npm run dev      # development server (requires Node ≥ 20)
npm run build    # production build
npm run lint     # ESLint
```
