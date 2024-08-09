# Turborepo Svelte & Astro starter

1. Use Astro for your marketing pages, docs, and blog.
2. Sveltekit for your app.
3. Share a Svelte component library between them.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

#### Apps

- `astro`: an [Astro](https://astro.build/) app
- `sveltekit`: a [Sveltekit](https://kit.svelte.dev/) app

#### Packages

- `ui`: a [Svelte](https://svelte.dev/) component library shared by both `web` and `docs` applications
- `config-eslint`: `eslint` configurations (includes `eslint-plugin-svelte`, `eslint-plugin-astro`, and `eslint-config-prettier`)

> [!NOTE]  
> The [ESLint plugin](https://github.com/ota-meshi/eslint-plugin-astro) for Astro is **community maintained**.
> The offical [Astro Docs](https://docs.astro.build/en/editor-setup/#eslint) defer to the [plugin's docs](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
- [ESLint](https://eslint.org/) for code linting
