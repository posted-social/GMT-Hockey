# Posted Profiles

Custom link-in-bio pages for Posted Social SMM clients. Built with [Astro](https://astro.build), deployed on Cloudflare Pages.

## Project Structure

```
posted-profiles/
├── public/
│   └── images/
│       └── gmt/              ← Client-specific images
│           ├── pfp.jpg
│           ├── logo.png
│           ├── coach-jeff.jpg
│           └── ...
├── src/
│   ├── components/           ← Shared reusable pieces
│   │   ├── ProfileHeader.astro
│   │   ├── SocialIcons.astro
│   │   ├── LinkButton.astro
│   │   ├── CoachCard.astro
│   │   └── EmailCapture.astro
│   ├── layouts/
│   │   └── BaseLayout.astro  ← Wraps every page (head, footer, analytics)
│   ├── pages/
│   │   └── index.astro       ← GMT page (one file per client)
│   └── styles/
│       └── global.css        ← All shared styles
├── astro.config.mjs
└── package.json
```

## Adding a New Client

1. **Create an image folder:** `public/images/[client-slug]/`
   - Add their profile photo, logo, and any coach headshots

2. **Create a new page file:** `src/pages/[client-slug].astro`
   - Copy `src/pages/index.astro` as a starting point
   - Update all client-specific data: title, GA ID, accent color, webhook URL, socials, coaches, links
   - Remove or add sections as needed — each page is fully customizable

3. **Push to GitHub.** Cloudflare auto-deploys.

The page will be live at: `https://your-domain.com/[client-slug]`

## Editing Shared Components

When you update a component (e.g., change button hover style), it applies to **every client page** on next deploy.

- `global.css` — All visual styles. Override per-client via the `accentColor` prop on `BaseLayout`.
- `ProfileHeader.astro` — Profile image, name, tagline
- `SocialIcons.astro` — Row of social platform icons (supports: instagram, facebook, tiktok, youtube, twitter, linkedin)
- `LinkButton.astro` — Styled link with arrow hover effect
- `CoachCard.astro` — Coach tile with photo or initials fallback
- `EmailCapture.astro` — Email form that POSTs to a GHL webhook

## Local Development

```bash
npm install
npm run dev        # Starts local server at localhost:4321
npm run build      # Builds static output to dist/
```

## Cloudflare Pages Settings

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18+

## Per-Client Customization

Each client page controls:
- `accentColor` — Brand accent color (CSS variable override)
- `gaId` — Google Analytics measurement ID
- `footerLogoSrc` / `footerText` — Footer branding
- `WEBHOOK_URL` — GHL webhook for form submissions
- Page sections — Add, remove, or reorder freely
