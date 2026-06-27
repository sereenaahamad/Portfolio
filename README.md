# Sereena Ahamad — Portfolio

A React + Vite + Tailwind CSS recreation of the portfolio design, with **Featured Work split into two
sections**: Front-End Development Projects and Creative Digital Designs.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/content.js        ← ALL the text, project lists, skills & experience live here
  components/
    Navbar.jsx
    Hero.jsx              ← intro, stats, signature avatar
    FeaturedWork.jsx      ← renders BOTH project sections
    ProjectCard.jsx        ← shared card used by both sections
    Skills.jsx
    About.jsx
    Experience.jsx
    CTA.jsx
    Footer.jsx
  App.jsx                  ← assembles all sections in order
```

## Where to edit things

Almost everything you'd want to change lives in **`src/data/content.js`**:

- `profile` — your name, title, hero copy, resume link, social links
- `stats` — the 4 stat cards (years of experience, projects, etc.)
- `frontendProjects` — first Featured Work section ("Front-End Development")
- `creativeDesigns` — second Featured Work section ("Creative Digital Designs")
- `skillGroups` — the skill pills, grouped by Development / Design
- `experience` — your work history timeline
- `about` — the About Me paragraph

Icons are referenced by name (e.g. `"icon": "Github"`) and pulled live from the
[lucide-react](https://lucide.dev/icons) icon set in `src/components/Icon.jsx` — browse that site for
any icon name you want to swap in.

## Adding real project images

Each project card currently shows a glowing icon in place of a screenshot (since this template ships
without your real images). To use real screenshots instead:

1. Drop your image files into `src/assets/` (create the folder).
2. In `ProjectCard.jsx`, replace the `<Icon ... />` line with an `<img src={project.image} ... />` tag.
3. Add an `image: 'path/to/file.png'` field to the relevant project objects in `content.js`.

## Adding your own photo

The hero's circular avatar is currently your initials inside a gradient orb (a deliberate placeholder).
To swap in a real photo, replace the inner `<div className="... bg-brand-gradient ...">` block in
`Hero.jsx` with an `<img>` tag pointing at your photo, keeping the `rounded-full` and `shadow-glow`
classes for the same glow effect.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)

## Deploying

This is a standard Vite app — deploy the `dist/` folder (after `npm run build`) to Vercel, Netlify,
GitHub Pages, or any static host.
