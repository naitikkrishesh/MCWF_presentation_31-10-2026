# MCWF Simulation for Single-Qubit Operation: Thesis Presentation

## Run
```bash
npm install
npm run dev
```
Open the printed local URL. Press **F** for fullscreen.

## Keys
→ / Space next · ← previous · Home / End first / last · F fullscreen · Esc exit fullscreen

## Edit content (one file)
Everything is in `src/data/presentationContent.js`:
- **Names, date, logo path:** the `meta` object.
- **Slide order:** the `order` array (also remove ids to drop slides).
- **Text:** each slide's `points` array.
- **Equations:** LaTeX strings in `equations`. Use an array of strings to reveal steps one by one. Inline math: `<InlineMath latex="\sigma_z" />` from `components/EquationBlock.jsx`.
- **Figures:** `figures: [{ src: 'plots/my-plot.png', label: '...', caption: '...' }]`.

## Add images / plots / diagrams
Drop files into `public/assets/{logos,diagrams,plots,images,backgrounds}` (SVG, PNG, JPG), then set `src` relative to `public/assets/`. Missing files show a placeholder, never a broken image. Aspect ratio is preserved; nothing is cropped.

## Structure
- `components/` shared parts (layout, equations, figures, navigation, progress)
- `slides/` one file per slide; slides 2-9 read from the content file, slides 1 and 10 are custom
- Colours and fonts: `tailwind.config.js`

## Notes
- The slide is a fixed 1920x1080 stage scaled to fit any screen (16:9).
- Fonts load from Google Fonts: open the deck once online before a venue with no internet, or self-host the fonts.
- Equations on slides 3-4 are textbook placeholders. Verify them against your notation.
