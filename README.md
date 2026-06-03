# Slug Example

A small Next.js sample app that demonstrates dynamic routing with slug-based URLs.

## What this project shows

- Dynamic routes in Next.js using a slug parameter
- A simple page that renders from a URL like `/slug/example1`
- Navigation links for sample slugs

## Run locally

Install dependencies and start the development server from the `slug` folder:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Usage

Navigate to any slug route under `/slug` to see how the app resolves the URL parameter.

Examples:

- `/slug/example1`
- `/slug/example2`
- `/slug/example3`
- `/slug/example4`

The home page also includes links for these sample slug values.

## Project structure

- `app/page.tsx` — main landing page for the slug example
- `app/layout.tsx` — root layout and page metadata
- `app/globals.css` — global styles

## Notes

This repository is part of a larger Next.js workspace and is intended to illustrate how to work with slug-based dynamic routing.
