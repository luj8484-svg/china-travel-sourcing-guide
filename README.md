# China Travel & Sourcing Guide

An English content site for first-time China travelers, Canton Fair visitors, and overseas small business buyers sourcing from China.

The site is built with Astro for fast static output, Markdown/MDX article publishing, SEO-friendly metadata, sitemap generation, robots.txt, Article schema, and FAQ schema.

## Tech Stack

- Astro
- MDX
- Astro Content Collections
- Static site generation
- `@astrojs/sitemap`

## Project Structure

```text
src/
  components/      Reusable UI and SEO components
  content/blog/    MDX blog articles
  layouts/         Page layout wrappers
  pages/           Static pages and dynamic blog routes
  styles/          Global CSS
public/
  robots.txt
  og/
```

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

The local development server usually runs at:

```text
http://localhost:4321
```

## Build

```bash
npm run build
```

The static site is generated into:

```text
dist/
```

## Preview Production Build

```bash
npm run preview
```

## Add a Blog Article

Create a new `.mdx` file in:

```text
src/content/blog/
```

Use frontmatter like this:

```yaml
---
title: "Article Title"
description: "Short SEO description."
pubDate: 2026-05-18
category: "china-travel"
canonical: "https://example.com/blog/article-slug/"
ogImage: "/og/default.svg"
faqs:
  - question: "Question?"
    answer: "Answer."
---
```

Supported categories:

- `china-travel`
- `canton-fair`
- `china-sourcing`
- `tools`

## SEO Notes

- Sitemap is generated automatically by `@astrojs/sitemap`.
- `robots.txt` is stored in `public/robots.txt`.
- Page metadata is handled by `src/components/Seo.astro`.
- Blog posts automatically include Article schema.
- Blog posts with `faqs` automatically include FAQ schema.

Before deployment, update the `site` value in `astro.config.mjs` and the sitemap URL in `public/robots.txt` to match the production domain.

## Deployment

This is a static Astro site and can be deployed to platforms such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages.

General deployment settings:

```text
Build command: npm run build
Output directory: dist
```

For most hosting platforms:

1. Push the repository to GitHub.
2. Connect the GitHub repository to the hosting platform.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Add environment variables only if future features require them.
