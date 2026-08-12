# Project Context and AI Rules

You are a Senior Frontend Developer. Your task is to help write clean, maintainable, and optimized code.

## Technology Stack (Frontend)
*   **Framework:** Nuxt 4 (SSR enabled). Note: Follow the Nuxt 4 directory structure (source files inside the `app/` directory).
*   **Base:** Vue 3, strictly Composition API and `<script setup>`.
*   **UI / Styling:** Tailwind CSS + shadcn-vue.
*   **Icons:** Local SVGs via `@nuxt/icon`.

## Project Structure (Nuxt 4)
*   All Vue app source code lives inside `app/`: `app/components/`, `app/pages/`, `app/layouts/`, `app/assets/`, `app/app.vue`.
*   Public static assets remain in the root `public/` directory (e.g., `public/img/`).

## Coding Guidelines (Frontend)
1.  **Strict Composition API:** Never use the Options API (`data`, `methods`). Only use `ref`, `computed`, and lifecycle hooks inside `<script setup>`.
2.  **Styling:** Do not use `<style scoped>` with regular CSS. All styling must be implemented exclusively using Tailwind utility classes.
3.  **shadcn-vue:** When new UI elements are needed, prioritize using Radix Vue primitives or existing shadcn components.
4.  **Imports:** Nuxt 4 automatically auto-imports hooks, Vue utilities, and components from `app/components/`. Do not manually import them.
5.  **Typing:** Use TypeScript wherever possible.
6.  **Markup:** Write semantic HTML5.
7.  **Images:** Never use the standard `<img>` tag for raster images or content illustrations. 
    *   Always use the `<NuxtImg>` component provided by `@nuxt/image`.
    *   Assume all static content images (products, backgrounds, logos) are located in the `public/img/` directory and referenced with an absolute path (e.g., `src="/img/product.png"`).
    *   Apply Tailwind classes directly to `<NuxtImg>` for styling.
8.  **Responsive Design:**
    *   Follow a Mobile-First approach using Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
    *   Write default classes for mobile screens, and use prefixes to override them for larger screens (e.g., `flex-col md:flex-row`).
    *   Do not create separate files for mobile and desktop versions of a component unless the UI is completely unrecognizably different. Use Tailwind's `hidden` and display classes (`md:flex`, `lg:block`) to toggle element visibility across viewports.

## Design System & Assets
*   **Colors:** The project uses a custom color palette defined in `tailwind.config.js`. Do NOT use standard Tailwind colors (like `gray-500`, `blue-500`, `red-400`). Use ONLY the following custom color classes:
    *   **Primary Palette:** `warm-black`, `beige-peach`, `light-brown`, `green`, `overlay-gray`, `brand-gold`, `heading`, `error`.
        *   *Example usage:* `bg-warm-black`, `text-beige-peach`, `border-light-brown`, `bg-overlay-gray`, `text-brand-gold`, `text-heading`, `text-error`.
    *   **Neutral Palette:** `neutral-800`, `neutral-700`, `neutral-600`, `neutral-500`, `neutral-400`, `neutral-300`, `neutral-200`, `white`.
        *   *Example usage:* `text-neutral-800`, `bg-neutral-200`.
*   **Typography:** The project uses two distinct font families defined in `tailwind.config.js`.
    *   **Sans-serif (Inter):** Mapped to `font-sans`. Use this for all general UI text, paragraphs, and "Display" text elements.
    *   **Serif (Garamond):** Mapped to `font-serif`. Use this EXCLUSIVELY for formal "Heading" elements (e.g., semantic `h1` through `h6` tags that require a classic serif look).
    *   **Weights:** Use only `font-normal` (Regular), `font-semibold` (Semi Bold), and `font-extrabold` (Extra Bold).
    *   **Sizes:** Rely on standard Tailwind text sizing classes (`text-xs` to `text-9xl`) to match the design system's exact pixel values. Always combine size with appropriate line-height if required (e.g., `text-[96px] leading-[96px]`).
*   **Icons:** We use `@nuxt/icon` for local SVG icons exported from the design system. 
    *   Always render icons using the `<Icon>` component.
    *   The design system provides 4 distinct icon styles. Use the appropriate prefix based on the UI context:
        1. **Line Rounded** (Default UI): `<Icon name="custom:line-rounded-[icon-name]" />`
        2. **Line Square** (Sharp UI): `<Icon name="custom:line-square-[icon-name]" />`
        3. **Filled** (Active states, emphasis): `<Icon name="custom:filled-[icon-name]" />`
        4. **Social Media** (Brands): `<Icon name="custom:social-[brand-name]" />`
    *   *Example:* `<Icon name="custom:filled-heart" class="w-6 h-6 text-brand-gold" />`
    *   Icons are monochromatic (except some social ones). Always apply Tailwind text color classes (e.g., `text-neutral-500`, `text-brand-gold`) to colorize them.

## Work Cycle

Reading this file — and matching the existing pattern in the surrounding code — is the first step of any task, not something to reconcile with after the fact. Before editing:

1.  Identify which parts of this file apply (stack, structure, design system, boundaries) and re-check them, even for small changes.
2.  Look at neighboring files for an existing pattern to mirror instead of inventing a new one.
3.  For anything beyond a one-line fix, write a short plan first: files to create/modify, where the logic belongs (component vs composable vs util), what stays mocked or temporary, and how you will verify the change. Present the plan before editing when the change is non-trivial.
4.  If new context changes the shape of the task mid-way, stop and revisit the plan rather than pushing through the original one.

## Architecture Boundaries

*   **Components** (`app/components/**`, `app/pages/**`): own markup, local UI state (`ref`, `computed`) and orchestration. Keep business logic out — call a composable or util instead of inlining it.
*   **Composables** (`app/composables/`, `useXxx.ts`): reactive logic that is reused across components, or that coordinates multiple reactive sources (fetched data, route, local state). A composable used in exactly one place is a signal it may belong inline in that component instead.
*   **Utils** (`app/utils/`): pure, non-reactive helpers — formatters, constants, schema validation. No `ref`, no lifecycle hooks, no Nuxt context here.
*   Before adding a new composable or util, search `app/composables/**` and `app/utils/**` for something that already does the job. Prefer extending an existing helper over creating a near-duplicate.
*   Do not introduce a new abstraction (shared component, composable, or util) until at least two concrete call sites justify it.

## Data Fetching

*   Use `useFetch` / `useAsyncData` for data needed at render time; reserve raw `$fetch` for one-off calls inside event handlers (form submits, actions), not for data a component renders.
*   Do not call `$fetch` directly inside a component's template-facing logic when a composable would let the fetch be reused or tested in isolation — wrap it in a composable once it is needed in more than one place.
*   Type the response shape of every fetch call. Do not leave it as `any` or an inferred loose type — declare or import an interface/type for the payload.
*   Handle fetch errors close to where the request is made (in the composable), not by wrapping raw `$fetch` calls in try/catch scattered across components.

## Verification

*   After editing, run the project's formatter and linter on the touched files, and the project's type-checker, using whatever scripts are defined in `package.json` (e.g. `npm run lint`, `npm run typecheck`, `npm run build`) — confirm the exact script names against `package.json` rather than assuming.
*   If the project has an existing test setup (unit/component/e2e), run the narrowest tier that actually covers the change rather than the full suite by default; escalate to a broader run for anything touching routing, auth, or a multi-step flow.
*   Before handing off a change, re-open the touched files once more and check for anything that slipped past the design-system rules above (raw Tailwind colors, `<img>` instead of `<NuxtImg>`, Options API, `<style scoped>` with plain CSS).

## Pre-Commit Review

Run this after verification passes and before staging, on everything the change touched. Not a separate request — a standing step on every non-trivial change.

1.  **Correctness** — for each new branch or condition, check what happens on the paths not taken (empty data, failed fetch, component unmounted mid-request). Confirm a shared symbol you changed still means the same thing to its other callers.
2.  **Reuse** — search `app/utils/**`, `app/composables/**`, and existing shared/UI components for something already doing the job before keeping a new one. Remove anything the change made unreachable (dead refs, unused props/emits, superseded composables).
3.  **Boundaries** — check each piece of new logic sits in the layer described above (rendering in components, pure logic in utils, reactive orchestration in composables, transport in composables/services rather than inline in components).
4.  **Design system** — re-check colors, fonts, icon usage, and `<NuxtImg>` usage against the Design System & Assets rules above.

Report what the review found and changed; "nothing to change" is a fine outcome on a small diff — say so rather than inventing a finding.

## Commit Rule

*   Before preparing a commit, ask whether a task or ticket ID exists.
*   Do not commit until explicitly asked to.
*   Run the Pre-Commit Review above before staging anything.
*   Stage files explicitly by name; only fall back to a broad add after checking status for unintended files (`.env`, build output, temp files).
*   Commit message format: `type: short description` (or `TICKET-ID type: short description` if a ticket exists), where `type` is one of `feat`, `fix`, `refactor`, `chore`, no trailing period.

## Response Format
*   Always provide the complete code when asked to write a component.
*   Explain complex concepts briefly, without unnecessary fluff.
*   If solving a task requires installing an npm package, always provide the installation command.
*   Please reply in Russian.
