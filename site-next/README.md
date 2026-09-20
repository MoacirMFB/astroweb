# Moacir Fonseca Becker

Astro portfolio for [moacir.space](https://moacir.space), with English and Spanish pages.

Run these commands inside `site-next`:

```sh
npm ci
npm run dev
```

Build and check internal links, images, publication files, and page structure:

```sh
npm run build
python3 scripts/check-site.py
python3 scripts/generate-transfer.py
```

`src/components/HomePage.astro` assembles the continuous scrolling homepage. `ContentSections.astro` shares the research, projects, about, and contact sections with the retained standalone routes. Existing project, publication, award, education, and media records are in `src/data/en.ts` and `src/data/es.ts`. Shared styles are in `src/styles/site.css`.

The two paper pages retain their URLs and citation metadata. Homepage navigation uses section anchors. Older section bookmarks remain supported, including anchors inside expandable details. The sparse `public/space/stars.svg` image moves at 16% of the scroll speed. The stars and ambient video respect the system’s reduced-motion setting. Videos load only when visible and motion is enabled. Playback pauses offscreen and in background tabs. Project videos remain embedded in their expandable cards, with direct links to the originals.

Bennu media credits and conversion details are in `public/space/README.md`. The GitHub Pages workflow deploys pushes to `main` or `master`.
