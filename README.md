# bradleylignoski.com

Personal website and portfolio for Bradley Lignoski. Built with [Astro](https://astro.build)
on the [Astro Nano](https://github.com/markhorn-dev/astro-nano) theme (MIT), styled with
Tailwind CSS, with MDX content collections and KaTeX math rendering. Deployed to GitHub Pages.

## Local development

All commands run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Type-check (`astro check`) + build to `dist/`|
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint                                   |

## Tech notes

- **Framework:** Astro (static output).
- **Styling:** Tailwind CSS + `@tailwindcss/typography`.
- **Content:** MDX content collections in `src/content/` (`projects`, `teaching`).
- **Math:** `remark-math` + `rehype-katex`. The KaTeX stylesheet is imported in
  `src/components/Head.astro`, so `$...$` (inline) and `$$...$$` (display) render site-wide.
- **Deploy:** GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to
  GitHub Pages on every push to `main`. Custom domain is set via `public/CNAME`. See
  `DEPLOYMENT.md` for the one-time GitHub + registrar setup.

Customization scope was intentionally limited to content; the Astro Nano visual design is
used as-is. Teaching is implemented as a regular page (`src/pages/teaching.astro`) that lists
entries from the `teaching` content collection.

---

## Content authoring workflow

This is the guide for adding and updating content after the site is live. Routine content
updates require **no code changes** — just add or edit files and push.

### Where each kind of content lives

| Kind of content                                   | Location                              | Format                               |
| :------------------------------------------------ | :------------------------------------ | :----------------------------------- |
| Site chrome / layouts / nav                       | `src/components/`, `src/layouts/`     | `.astro` (template's domain; rarely touched) |
| Top-level pages (Home, About, Teaching, Climbing) | `src/pages/`                          | `.astro`                             |
| Project entries                                   | `src/content/projects/`               | `.mdx` (one file per project)        |
| Teaching artifacts                                | `src/content/teaching/`               | `.mdx`                               |
| PDFs (resume, CV, lecture notes, papers)          | `public/` (or subfolders)             | PDF, linked from pages               |
| Images and screenshots                            | `public/images/<slug>/`               | PNG / JPG / SVG / WebP               |
| Self-hosted video clips                           | `public/videos/<slug>/`               | MP4 (small clips; prefer YouTube embeds for large) |

### Adding a new project page with screenshots and a video

1. Create `src/content/projects/<slug>.mdx`.
2. Fill in the frontmatter (`title`, `description`, `date`, `tags`, optional `cover`, `demoURL`, `repoURL`).
3. Write the body in Markdown/MDX.
4. Drop screenshots into `public/images/<slug>/`.
5. Reference them with `![Caption](/images/<slug>/screenshot1.png)`.
6. For a video: embed a YouTube `<iframe>` in the MDX, or drop an `.mp4` into
   `public/videos/<slug>/` and use `<video src="/videos/<slug>/demo.mp4" controls />`.
7. `git commit && git push` — the deploy workflow rebuilds the site.

### Adding or updating a PDF (resume, CV, lecture notes, paper)

1. Drop the PDF into `public/` (or a subfolder like `public/teaching/`).
2. If it's a *replacement* (e.g., updated resume), keep the same filename so existing links keep working.
3. If it's *new*, add a link to it from the relevant page.
4. Push.

### Adding a teaching artifact

1. Create `src/content/teaching/<slug>.mdx`.
2. Fill in the frontmatter (`title`, `description`, `date`, `tags`) and set `draft: false`.
3. Write the body. It will appear in the Artifacts list on the Teaching page.
4. Push.

### Writing math notation in MDX

- Inline: `$E = mc^2$` renders inline.
- Display: `$$\int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2}$$` renders centered on its own line.
- Standard LaTeX math syntax works (Greek letters, fractions, integrals, matrices, `align`, etc.).
  Full-document LaTeX (TikZ, BibTeX) does not — render those externally and include as images/PDFs.
- If a `$` causes a parse error in MDX (rare, usually near JSX-like braces), escape it as `\$`.

### What NOT to do

- Don't convert PDFs to HTML by hand — link them as PDFs.
- Don't commit large video files (> ~10 MB); prefer YouTube/Vimeo embeds.
- Don't edit `src/components/` or `src/styles/` for routine content updates — those are template files, not content.

---

## Attribution

Built on [Astro Nano](https://github.com/markhorn-dev/astro-nano) by Mark Horn, used under the
MIT License (see `LICENSE`).
