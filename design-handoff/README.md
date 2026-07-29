# Kaleo Arts — designer handoff

This folder is the design system reference for the Kaleo Arts website.
Start with **`design-guidelines.html`** in a browser — that's the full
system, formatted the way the site itself looks.

## What's in here

```
design-guidelines.html    Full design system doc (open in browser)
design-guidelines.md      Same doc, plain markdown (for editors / AI context)
reference/
  kaleo-v3.css            The site's shipped stylesheet — every token,
                          spacing rule, and component style lives here
  chrome-v3.js            The site's one JS file — nav + footer source,
                          reveal + parallax behavior, video swap
README.md                 (this file)
```

## How to use it

1. **Read `design-guidelines.html` end to end.** It's ~15 minutes. The
   voice, color, typography, layout, imagery, and anti-patterns chapters
   are the load-bearing ones.
2. **When designing something new,** ask the three questions from Chapter 2:
   Would this feel at home in a playbill? Is amber doing exactly one job
   here? Are photos the show?
3. **When you want to check a real value** — a color hex, an exact type
   size, a component's classes — open `reference/kaleo-v3.css`. All
   tokens live in the `:root` block at the top; components below in the
   order they appear on the homepage.
4. **The shipped site** is a separate folder (`dist/` in the source
   project, or wherever your engineer hosted it). This handoff is just
   the *system* — the specimens live in the site itself.

## Key entry points in the CSS

- **`:root {}`** at the top of `kaleo-v3.css` — every color and spacing
  token. Change one here and it propagates everywhere.
- **`.hero-title`** — the marquee headline pattern.
- **`.plate-label`** — the mono eyebrow every section opens with.
- **`.section-h`** — big serif section titles.
- **`.btn.btn-primary` / `.btn-secondary`** — the two-button system.
- **`.reveal` + `.r-d1..r-d4`** — the scroll-in reveal pattern.

## Working with an AI

The `design-guidelines.md` file is written to be dropped into an AI as
context. Paste it in front of any prompt asking the AI to design or
write copy for Kaleo, and it will stay on system.

---

*Companion to `assets/kaleo-v3.css` in the shipped site. Last revised July 2026.*
