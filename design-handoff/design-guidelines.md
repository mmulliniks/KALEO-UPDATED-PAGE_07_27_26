# Kaleo Arts — Design Guidelines

> A single-source reference for the Kaleo Arts website. Written to be handed
> to a human designer, a copywriter, or dropped into an AI model as context
> to keep new work on-system.

---

## 1. What we're making

**Kaleo Arts** is a performing arts school in Oakland Township, Michigan.
"Kaleo" is Greek for *"to invite"* — that word is the north star of the whole
brand. Kids sing, dance, act, and write songs; grown-ups take classes too.
Programs span ages 3 through adult.

The site's job is to make a warm, high-craft first impression on parents
who are considering enrolling their kid. It should feel like a **playbill
crossed with an editorial magazine**, not a school website.

**Six programs** hang off the site, each with its own subpage:

| Program | Ages | Vibe |
|---|---|---|
| Kaleo Kids | K – 5th | Big flagship — musical theater troupe |
| Kazoo | 3 – 6 | First-steps music & movement |
| Songwriters | Middle–High | Original songwriting workshop |
| Classes | All ages | À-la-carte drop-ins |
| Private Lessons | All ages | 1:1 instruction — instrument, voice, discipline |
| Summer Camp | K – 6th, summer | One-week performance intensive |

**Three hub pages** support them: About, FAQ, Enroll.

---

## 2. Core design principle

> **Stage-lit editorial.**
>
> Dark theater as canvas. Warm, cinematic photography as the star.
> Serif display type as the marquee. Everything else — copy, controls,
> navigation — steps back to let the photos and the words do the talking.

If a design decision is ambiguous, ask: *"Would this feel at home in the
program booklet you'd get handed as you walked into a black-box theater?"*
If yes, keep it. If it feels like a corporate site, throw it out.

**Rules of thumb**

1. **Photos are the show.** Full-bleed heroes, wide crops, real kids on
   real stages. Never illustration, never stock.
2. **Type carries the emotion.** Serif italic in amber does the singing.
   Sans and mono are stagehands.
3. **Space is expensive.** 100–140px between sections. Big margins. If a
   section feels crowded, it is.
4. **Amber is a spotlight, not a house color.** Use it for one thing per
   section — a headline emphasis, or a button, or a plate label. Never
   several at once.
5. **One idea per section.** Don't stack five commitments, four values,
   and a testimonial into one screen. Break them out.

---

## 3. Voice & copy

### Tone
- **Warm, plain-spoken, a little theatrical.**
- Direct address ("you're invited," "your student," "we don't do auditions").
- Confident about our craft, humble about the kids' work.
- Faith-friendly but not gatekept — "You don't have to attend church to be
  part of Summer Camp."

### Language do / don't
- **Do** say *student, performer, cast, family, program, class.*
- **Don't** say *camper* (we changed this deliberately — everyone is a *student*),
  *customer, client, user, tuition* (say *price*), *learner.*
- **Do** name the founder (Renee Mulliniks) when the moment calls for it.
- **Do** use en-dashes freely and Oxford commas always.
- **Do** write short. Two-clause sentences. A period is a stage light.

### Headline formula
Every big headline follows the same three-move shape:

> **[Plain phrase], [*italic amber phrase*], [tail].**

Examples in the wild:

- "Where *creativity* shines, & *everyone* belongs."
- "Confidence, *on stage* and off."
- "Three things we *don't* do."
- "More than *performing*."
- "Five *ways* to join."

The italic phrase gets:
- `font-style: italic`
- `color: var(--amber)`
- Same weight as the rest (400 — not bold)

Never italicize a whole headline. The italic is a highlighter, not a font.

### Eyebrows (plate labels)
Every section opens with a small mono-caps label like a plate number in a
photography book:

> `Plate 03 · The approach`
> `Plate 04a · Now Showing`

Format: `Plate ## · Short phrase`. Small caps, amber, JetBrains Mono, tracked
out to `0.24em`. Preceded by a 40px amber rule.

### Micro-copy
- **Buttons:** verb + object. "Enroll today." "Explore programs." "Pick a program." Not "Click here" or "Learn more."
- **Ticker strip:** telegraphic, four-word phrases separated by diamonds. `Now Casting — Fall Session ◆ Sing · Dance · Act · Write ◆`
- **Photo captions:** treat them like plate captions in a book, not alt text. "Plate 03a · Community time."

---

## 4. Color

The palette lives as CSS custom properties in `assets/kaleo-v3.css`. All
tokens are in oklch for stable perceptual lightness — do not translate to hex
unless the export target requires it.

### Stage darks (backgrounds)

| Token | oklch | Use |
|---|---|---|
| `--stage` | `oklch(11% 0.018 260)` | The one true background. Every page. |
| `--stage-2` | `oklch(15% 0.02 260)` | Card / panel backgrounds one step up |
| `--stage-3` | `oklch(19% 0.022 260)` | Second-level nested panels |
| `--rule` | `oklch(28% 0.02 260)` | 1px section dividers |

All four sit on the same warm-blue hue (260°). They're *not* neutral — there's
a whisper of blue that reads as "theater" rather than "black modal."

### Creams (text)

| Token | oklch | Use |
|---|---|---|
| `--cream` | `oklch(96% 0.015 82)` | Primary text, headlines |
| `--cream-mute` | `oklch(82% 0.02 78)` | Body copy secondary lines, ledes |
| `--cream-fade` | `oklch(62% 0.02 260)` | Captions, fine print, disabled |
| `--bright` | `oklch(94% 0.028 82)` | Rare — call-out numbers, big stats |

Creams share the same warm yellow hue (~80°) so they harmonize with amber.
Never use pure white (`#ffffff`) — it looks like a bug on this palette.

### Amber (the spotlight)

| Token | oklch | Use |
|---|---|---|
| `--amber` | `oklch(75% 0.15 68)` | *The* accent. Italic emphasis, primary buttons, plate labels, hover states |
| `--amber-hot` | `oklch(68% 0.18 55)` | Deep amber for shadows, glows, edge cases |

**One amber per section.** Amber is a stage light — if you point five at one
scene it stops meaning anything. Pick the most important thing on the section
and let it wear the amber.

### Do / don't

- **Do** compose on `--stage`. Every page.
- **Do** let photos supply saturated color (the kids in orange "Chosen" tees,
  the pink stage lights, the blue smoke). The palette is deliberately quiet
  so the imagery can be loud.
- **Don't** add a green, purple, or teal. If you feel you need a second accent,
  the photo already has one.
- **Don't** use amber for body copy. It stops being a spotlight and becomes a
  headache.
- **Don't** add gradients as backgrounds. The only gradients on the site are
  photo scrims (dark-to-transparent overlays) — see §7.

---

## 5. Typography

Three type families, each with a clear role. They live in the same Google
Fonts bundle, loaded from every page.

### The three roles

| Role | Family | Weights | Where |
|---|---|---|---|
| **Display** | DM Serif Display | 400 (regular + italic) | Headlines, plate ledes, logo, ticker, blockquotes |
| **Body / UI** | Space Grotesk | 400, 500, 600, 700 | Paragraphs, buttons, nav, form fields |
| **Mono / label** | JetBrains Mono | 400, 500 | Plate labels, eyebrows, captions, meta strings |
| **Long-form serif** | Newsreader | 400–700 (opsz 6–72) | *Only* in longer editorial passages (About page pull-quotes). Do not use as headline face. |

### Rules

- **Never four typefaces on one page.** Newsreader appears only where DM
  Serif Display's tight tracking would fight long italic text.
- **Never mix weights inside one word.** Emphasis is *italic*, not bold.
- **Never all-caps a serif.** Only Space Grotesk and JetBrains Mono go
  uppercase, and only for labels/eyebrows.
- **Body copy is 17px.** Do not go smaller for paragraph text; the site
  serves parents, not designers.
- **Line-height:** display 0.9–0.98 (tight, like a theater marquee), body
  1.5–1.55, mono 1.
- **Letter-spacing:** display gets `-0.03em` to `-0.045em` (optical
  compensation for large sizes). Mono labels get `+0.22em` to `+0.24em`
  (bold theatrical tracking).

### Size scale

| Class | Size | Use |
|---|---|---|
| `.hero-title` | `clamp(60px, 10vw, 180px)` | Landing marquee (4-line max, `line-height: 0.9`) |
| `.hero.hero-typo .hero-title` | `clamp(56px, 8.5vw, 148px)` | Subpage marquee (no hero photo, `line-height: 1.02` for 5+ line stacks) |
| `.section-h` | `clamp(48px, 7vw, 108px)` | Section title inside `.spread` |
| `.video-head h2`, `.approach-title` | `clamp(40px, 5vw, 76px)` | Mid-size headline |
| `.section-lede`, `.hero-caption` | 22px italic serif | Elegant paragraph lede |
| body | 17px | Everything else |
| `.plate-label`, `.hero-photo-caption` | 10–11px, tracked `0.22em`+ | Meta labels |

### Descender gotcha

The hero title animates each word up from below (`translateY(110%)`) and its
container clips with `overflow: hidden`. Combined with a tight `line-height:
0.9`, that clip line was cutting the tails off `j / p / g / y`. The fix
lives on `.hero-title .line` — `padding-bottom: 0.18em; margin-bottom:
-0.18em` — do not remove it, and mirror the pattern if you build another
line-clipped animation.

### Leading by hero variant

The two hero variants use different `line-height` on purpose:

- **`.hero-title`** (homepage, over a photo) is `0.9` — very tight, marquee
  feel, safe because the headline maxes out at 4 lines.
- **`.hero.hero-typo .hero-title`** (subpage, type-only) is `1.02` — the
  typographic hero is asked to carry 5-line stacks (e.g. About:
  *"Twenty years / of teaching / in this community, / one relationship /
  at a time."*) and at `0.9` the descenders on line N kiss the ascenders
  on line N+1. Do not tighten this back down without shortening the
  headline first.

---

## 6. Layout

### Grid & container

- **Two container widths**, both centered:
  - `.wrap` — 1440px max, 40px horizontal padding. Default.
  - `.wrap-lg` — 1600px max, 40px horizontal padding. Full-bleed hero, video
    section, cinematic parallax pull-quotes.
- **Vertical rhythm:** sections are `padding: 140px 0` (`.spread`), or
  `100px 0` when tight (`.spread.tight`). Ticker and hero break the pattern
  intentionally.

### Section anatomy

Every section follows the same rhythm — think of it as a play's scene structure:

```
┌─ Plate label ────────────────────────────┐  ← the eyebrow. always mono.
│                                          │
│  Section headline                        │  ← the title of the scene.
│  in serif display                        │
│                                          │
│  Optional italic serif lede that         │  ← the scene setter.
│  describes what this section is about.   │
│                                          │
│  [ Content zone — grid, cards, image ]   │  ← the beat.
│                                          │
└──────────────────────────────────────────┘
```

Do not skip the plate label. It's the through-line that makes the site read
as one book, not seven pages. Numbers ascend down each page (`Plate 01 →
Plate 07`) with letter suffixes for sub-plates (`Plate 03 → Plate 03a`).

### Named layouts (patterns that repeat)

- **`.hero` (photo)** — 100vh full-bleed image, three-line meta strip up
  top, monster serif headline center-left, italic caption + buttons at bottom.
- **`.hero.hero-typo`** — same skeleton but no photo. Two blurred amber/blue
  spotlights sit behind the type as "beams." Used on About, FAQ, Enroll.
- **`.video-section`** — 16:9 poster with amber play badge. Vimeo iframe is
  swapped in on click.
- **`.ticker`** — full-width scrolling italic serif strip in stage color,
  separators in amber diamonds.
- **`.commits`** — 3-column grid, each column a short vow ("No auditions to
  join," "No competitions," "No costume fees"). Bordered top+bottom by rules.
- **`.approach`** — 60/40 split: photo left, title + two paragraphs + a
  signature line right.
- **`.pullq`** — big cinematic parallax quote, photo left, italic quote right
  with an oversized amber quote mark.
- **`.programs`** — long list of program rows, each row a big serif name
  card. Hover reveals amber arrow.
- **`.stats`** — small evenly-spaced row of numeric brags (years, students,
  performances).
- **`.final`** — closing CTA panel just above footer. Always ends the page.
- **`.footer`** — brand mark left, contact/columns right, hairline rule.

### Responsive

Three breakpoints do the work:

- **≤ 960px** (`@media (max-width: 960px)`) — the "compact" tier. Every
  multi-column grid (`.commits`, `.voices`, `.approach`, `.pullq`,
  `.loc`, `.stats`, `.values`, `.price-panel`, `.footer-top`) collapses
  to a single column. Section padding drops from 140px to 80px. Wrap
  padding tightens from 40px to 20px. Inline nav links disappear; the
  hamburger appears. `.nav-inner` also gets `padding-right: 68px` so the
  inline Enroll CTA clears the fixed hamburger button.
- **≤ 720px** (`@media (max-width: 720px)`) — the phone-only pass.
  Purely additive on top of the compact tier. Two jobs:
  1. **Strip decorative small text** that reads as chrome on desktop but
     as clutter on a phone. All of these get `display: none`:
     `.plate-label`, `.hero-photo-caption`, `.hero-top-meta`,
     `.video-poster .poster-meta`, `.approach-img-wrap .img-caption`,
     `.pullq-caption`, `.rsvp-eye`, and the small mono eyebrows inside
     cards (`.form-eye`, `.ic-eye`, `.cc-eye`, `.price-eye`).
  2. **Tighten layout**: section padding drops to 64/48px, `.section-h`
     recaps to `clamp(36px, 9vw, 52px)`, portrait aspect ratios on
     `.approach-img-wrap` / `.pullq-img-wrap` (4/5) and `.voice` (1/1),
     `.program-row` collapses to a single-column stack (drops `.p-num`
     and `.p-arrow`), body copy floor at 16px, and `text-wrap: balance`
     on all headings to kill orphan words.
- **≤ 420px** (`@media (max-width: 420px)`) — smallest-phone floor.
  Hero titles pin to a hard 38px so a 4- or 5-line headline can't
  overflow an iPhone SE.

Between the two, `clamp()` on display type does the interpolation on its
own (`clamp(40px, 11vw, 60px)` on `.hero-title` below 960px). Never touch
the desktop `clamp()` values to fix a phone; add a mobile-tier override
instead — the desktop floor of 60/56px is deliberate for laptop widths.

**Rules of thumb:**
- Never suppress the hero photo on mobile — crop deeper (use
  `object-position` if needed).
- Never let a headline overflow horizontally. If it does at 390px,
  shorten it OR tighten the mobile clamp — don't add `overflow: hidden`.
- The ticker slows below 640px to keep scroll comfortable.

### Mobile navigation

Below 960px the horizontal nav collapses into a hamburger drawer:

- **`.nav-burger`** — three-line icon, right of the nav, 48×48 tap
  target. Toggles to an X when open.
- **`.mobile-menu`** — fixed full-screen dark drawer, blurred backdrop,
  amber section eyebrows (`Programs`, `More`), 28px serif links with
  `min-height: 52px` (comfortable tap targets), and a solid amber
  Enroll CTA at the bottom.
- The inline **`.nav-cta` Enroll pill stays visible** next to the
  hamburger so the primary action is always one tap away without
  opening the drawer.
- Closes on: link tap, Escape key, tapping the burger again.
- Body scroll is locked while the drawer is open.

If you add a page, update **both** the desktop `.nav-links` list AND the
`.mobile-menu` list in `chrome-v3.js`. They are hand-mirrored.

---

## 7. Imagery

Photography is the biggest lever on this site. Follow this or the whole
system flatlines.

### Sourcing

- Every image is from the actual Kaleo Arts stage archive. Naming lives in
  `assets/img/kaleo-XX.jpg`, `kk-web-XX.jpg`, `kazoo-XX.jpg`, etc.
- **Never use stock.** If a slot has no photo, use a placeholder (`<div
  class="approach-img-wrap"><img src="assets/img/PLACEHOLDER" …>`) and flag it
  for the client, don't fill it with a Unsplash headshot.
- **Never AI-generate a kid.** Ethical + editorial reasons.

### Selection criteria

Rank a candidate photo against these, in order:

1. **Emotional truth** — real joy, not posed. Loose bodies, half-open mouths,
   ribbons mid-fling.
2. **Stage lighting** — magenta / cyan / amber wash. If it looks like a
   classroom fluorescent, skip.
3. **Composition** — the subject looks *into* the layout, not out of it.
   Face turned toward the copy zone.
4. **Variety of skin tones and ages** — every page should show the range of
   who Kaleo actually serves.
5. **No duplication** — if a photo is already used on another page, do not
   reuse it. We maintain a strict "no image twice on the same site" rule
   for anchor slots (heroes, section leads). Small parallax bumpers can
   repeat once across pages.

### Treatment

- **Crop deep.** `object-position: center 30%` for most stage shots — heads
  live in the upper third, so this pushes them into the visible band.
- **Scrim heroes.** A double gradient sits over every full-bleed hero:
  - `linear-gradient(180deg, dark 0% → clear 30% → dark 65% → dark 100%)`
    plus a radial `ellipse at 50% 45%` for corner darkening.
  - This is what makes text legible without needing a translucent card.
- **Slow drift.** Hero images use a 22s alternating `transform: scale(1.08
  → 1.14) translate(-1%, -2%)`. It's a whisper of movement. Never crank
  the range higher — it starts feeling like a car ad.
- **Grain / vignette:** the scrim is our vignette. Do not add film grain,
  duotone, or "cinematic LUT" filters.

### Captions

Every anchor image gets a monospace caption in the corner: `Plate 01 ·
Kaleo Spark · Live performance`. Bottom-right for heroes, bottom-left for
section-embedded photos.

---

## 8. Components

The full inventory of built components lives in `assets/kaleo-v3.css`
(the "v3" system used by the current site — the older `kaleo.css` is
legacy). This section names them and describes when to reach for each.

### Navigation
- **`.nav`** — fixed, dark, glass-blurred. Collapses in height on scroll
  (`.nav.compact`). Amber pill CTA on the right, always says the current
  primary action ("Enroll").

### Buttons
- **`.btn.btn-primary`** — solid amber pill, dark text. The "go" button.
  One per section, tops.
- **`.btn.btn-secondary`** — outlined glass pill on the stage color. The
  "and also" option.
- Both come with a `→` SVG that slides 4px on hover. Do not remove the arrow.

### Cards / callouts
- **`.commit`** — plain-text vow with a small `No. 01` numeral above. Used
  in "Three things we don't do."
- **`.value`** — icon-less short-headline + short-body callout in a
  responsive grid.
- **`.contact-card`** — outlined dark card with an amber icon corner.
- **`.iclass-card`** — the registration portal card on the Enroll page.
  Distinct because it's linking out to a third-party tool.

### Editorial devices
- **`.plate-label`** — the mono eyebrow. Always the first thing in a section.
- **`.section-h`** — the big serif section title. Always immediately after
  the plate label.
- **`.section-lede`** — optional italic serif descriptor, 22px. Sits
  between headline and content.
- **`.pullq`** — the parallax pull-quote pattern.
- **`.ticker`** — the marquee strip.
- **`.heart-banner`** — the wide amber-bordered mission strip on the
  About page. Used once, ever.

### Media
- **`.video-frame` + `.video-poster`** — Vimeo poster that swaps in an
  iframe on click. Play button is a 96px amber circle with a halo.

### Forms
- **`.form-panel`** — dark cream-outlined card. Space Grotesk fields,
  amber focus rule. Enroll and Contact use this.

### Motion primitives
- **`.reveal`** — starting state `opacity: 0; translateY(30px)`. When
  `.in` is added (an IntersectionObserver inside `chrome-v3.js` handles
  this), it eases to visible over 1.1s. Delay modifiers `.r-d1` – `.r-d4`
  add 0.1s per step.
- **`data-parallax="0.05"` – `0.1`** on an image tells the shared
  parallax loop (also in `chrome-v3.js`) to translate it slightly on
  scroll. Only for anchor imagery — never on UI.

---

## 9. Motion

Motion on Kaleo is **theatrical, not techy.** Slow curtains, not fast dashboard.

- **Default easing:** `cubic-bezier(.22,.61,.36,1)` — a mild ease-out.
  It's the "curtain drop" curve.
- **Default duration:** 1.1s for reveals, 0.3s for hover state changes.
- **Hero word-rise:** each word `translateY(110%) → 0` with a staggered
  0.15s delay between words. Never rebuild this animation to bounce or
  overshoot.
- **Ticker:** 50s linear scroll. If you speed it up it becomes stressful.
- **Hero image drift:** 22s alternating scale + translate. See §7.
- **Hover:** buttons scale not — they swap background. Arrow slides right
  4px. Cards lift 2–4px with no rotation.

**Never**: shake, flip, zoom-in-and-out, or spin. This is a stage, not
a slot machine.

---

## 10. Accessibility

- Every hero has a real descriptive `alt` string (e.g. "A director stands
  with her back to the camera, script in hand, guiding a cast of students
  gathered around the stage"). No `alt=""` on content images.
- Color contrast: `--cream` on `--stage` is > 15:1. `--amber` on `--stage`
  is ~ 7:1. Both easily clear WCAG AA.
- Focus states on all interactive elements — a 2px amber outline offset 2px.
- The ticker has `aria-hidden="true"` — it's decorative.
- Video posters are real `<button>` elements. Not divs.
- Section landmarks are real `<section>` tags; the nav is a `<nav>`; the
  footer is a `<footer>`.
- Reduced-motion: if adding a new animation, respect
  `@media (prefers-reduced-motion: reduce)` — kill the drift and word-rise,
  keep only fade-in.

---

## 11. File & code conventions

- **`index.html` is the canonical home.** Older explorations (v1, v2-a/b/c,
  v3) were retired at ship — the shipped folder contains one `index.html`
  built from the v3 direction. Do not resurrect the variants.
- **`assets/kaleo-v3.css`** is the shared stylesheet. Every subpage links
  it. Page-specific CSS lives inline in `<style>` at the top of each
  page. (The `-v3` in the filename is a historical version tag — it is
  now simply *the* stylesheet.)
- **`assets/chrome-v3.js`** is the site's one JS file. It injects the
  shared nav + footer, runs scroll reveals, runs the parallax loop,
  swaps the Vimeo poster for an iframe on click, and toggles
  `.nav.compact` on scroll. If a page is missing the top bar, either
  this script didn't load or the `#nav-slot` div is missing from the
  page's HTML.
- **Body copy lives in the page HTML.** There is no separate `copy.js`
  extract in the shipped site — edit the copy where it renders. Nav and
  footer copy live in `chrome-v3.js` (single source of truth).
- **File naming for photos:** `kaleo-##.jpg` = general Kaleo Kids /
  Spark stage archive. `kk-web-##.jpg` and `kk-new-##.jpg` = shoots
  commissioned for the Kaleo Kids page. `kazoo-##.jpg` = Kazoo class
  shots. `songwriters-##.jpg` = Songwriters shoot. `lessons-*.jpg` =
  Private Lessons stills. `logo-*.png` = brand marks. Keep the pattern
  when adding new imagery.

---

## 12. Anti-patterns (things to actively avoid)

These are all things that would break the "stage-lit editorial" feel and
have been considered and rejected. If you're about to reach for one, stop.

- **Card grids with equal-size boxes.** Programs are a long-form list, not
  a bento box.
- **Full-color illustrations** to fill space. If it's not a photograph, it's
  a placeholder. The one exception is the logo mark.
- **Emoji.** Ever. Not in copy, not in labels, not as bullet points.
- **Gradients as backgrounds.** The only gradients are photo scrims.
- **Rounded corners on content cards.** Squared corners with hairline rules.
  Only pills and video badges round.
- **Drop shadows on flat UI.** Shadows are for the amber play badge and the
  logo mark's halo — and they're always warm amber, never neutral gray.
- **Icon soup.** SVG icons only appear where they carry meaning (button
  arrow, play triangle, contact-card corner). No decorative icons in
  headlines or list bullets.
- **Second accent color.** The one time we tried a teal it looked like
  a rebrand. Ambers only.
- **"Learn more" buttons.** Every CTA is a verb + object. "Enroll today,"
  "See the schedule," "Watch the reel."
- **Mid-sentence bold.** Emphasis is italic amber. Bold is reserved for
  Space Grotesk in specific structural roles (signatures, small caps
  numbers, form labels).
- **Auto-playing audio or video with sound.** The welcome video is a poster
  until the visitor clicks.

---

## 13. Where to look when you're stuck

| I need to… | Look at… |
|---|---|
| Understand the palette in code | `assets/kaleo-v3.css` `:root` block |
| See a headline structure in action | `index.html`, `.hero-title` |
| See the ticker & plate-label rhythm | `index.html`, section by section |
| See a subpage without a hero photo | `about.html` or `faq.html` (`.hero.hero-typo`) |
| See the video pattern | `index.html`, `.video-section` |
| See the parallax pull-quote pattern | `index.html`, `.pullq` |
| See the program subpage template | `spark-camp.html` or `kaleo-kids.html` |
| See the shared nav + footer source | `assets/chrome-v3.js` |

If you can't find an example of what you want to make, it probably
doesn't belong on the site.

---

---

## 14. Handoff — what's in the shipped folder

The designer receives one folder. Its layout is deliberately flat so a
non-engineer can open any file and see what it does.

```
index.html               homepage
about.html               about + founder
kaleo-kids.html          Kaleo Kids program
kazoo.html               Kazoo (ages 3–6)
songwriters.html         Songwriters
classes.html             Classes
private-lessons.html     Private Lessons
spark-camp.html          Summer Camp
enroll.html              enrollment
faq.html                 FAQ
404.html                 not-found

assets/
  kaleo-v3.css           shared stylesheet — every page links this
  chrome-v3.js           shared nav + footer + reveal/parallax/video swap
  img/                   photography, logos

robots.txt               crawl allowed
.nojekyll                so GitHub Pages doesn't run Jekyll
README.md                hosting notes
```

**Editing rules of thumb for the designer:**

- **Change a color, spacing token, or component style** → edit
  `assets/kaleo-v3.css` and it propagates to every page.
- **Change the nav or footer** → edit `assets/chrome-v3.js`. There is no
  per-page nav/footer HTML to hunt down.
- **Change body copy on a page** → open that page's HTML file. Every page
  is a single, self-contained document. Copy is inline.
- **Add a new page** → duplicate `spark-camp.html` (smallest program
  template), retitle, replace the body, and add its nav link to
  `chrome-v3.js`.
- **Add a new image** → drop into `assets/img/` following the naming
  convention above, then reference by relative path (`assets/img/…`).
  Nothing else to register.

---

*Last revised July 2026. Maintained alongside `assets/kaleo-v3.css`.*
