# Moon

Moon is an e-commerce storefront for handmade ceramics and home decor. An SSR app built with Nuxt 4, featuring a shop catalog, product pages, cart, checkout, and blog.

## Tech Stack

- [Nuxt 4](https://nuxt.com/) (SSR) — app source lives in `app/` per the Nuxt 4 directory convention
- [Vue 3](https://vuejs.org/) — Composition API only, `<script setup>`
- [Tailwind CSS](https://tailwindcss.com/) — all styling via utility classes; custom color palette and typography in `tailwind.config.js`
- [radix-vue](https://www.radix-vue.com/) — primitives for interactive UI elements (select, dialog, radio group)
- [@nuxt/image](https://image.nuxt.com/) — image optimization and rendering
- [@nuxt/icon](https://nuxt.com/modules/icon) — local SVG icons from the design system (`app/assets/icons`)
- TypeScript

## Project Structure

```
app/
├── assets/        # design system CSS and SVG icons
├── components/    # reusable components (auto-imported)
├── composables/   # reactive logic shared across components
├── layouts/        # page wrappers (default.vue)
├── pages/         # application routes
└── utils/         # pure helpers, constants, mock data
public/img/        # static images (products, backgrounds, logo)
```

## Installation

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the Google Maps key (used on the contact page):

```bash
cp .env.example .env
```

```
NUXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

## Development

Start the dev server at `http://localhost:3000`:

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

Locally preview the production build:

```bash
npm run preview
```

Static generation (if needed):

```bash
npm run generate
```

See the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for more.
