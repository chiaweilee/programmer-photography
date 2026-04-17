# programmer-photography

This repository contains a VitePress site with:

- Home page
- Guide section
- Blog section

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local dev server:

   ```bash
   npm run docs:dev
   ```

3. Build for production:

   ```bash
   npm run docs:build
   ```

4. Preview production build:

   ```bash
   npm run docs:preview
   ```

## Deploy to GitHub Pages

This repo is configured to deploy automatically to GitHub Pages using GitHub Actions.

1. In GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually in the Actions tab).

The site will be published at:

`https://chiaweilee.github.io/programmer-photography/`
