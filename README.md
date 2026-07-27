# Kaleo Arts — website

Static site for Kaleo Arts, Oakland Township, MI.

## What's in here

```
index.html            homepage
about.html            about + founder
kaleo-kids.html       Kaleo Kids program
kazoo.html            Kazoo (ages 3–6) program
songwriters.html      Songwriters program
classes.html          Classes program
private-lessons.html  Private Lessons
spark-camp.html       Summer Camp
enroll.html           enrollment
faq.html              frequently asked questions
404.html              not-found page

assets/
  kaleo-v3.css        shared stylesheet (every subpage links this)
  chrome-v3.js        shared nav + footer + reveal/parallax behaviors
  img/                photography, logos
```

The nav and footer are injected by `assets/chrome-v3.js` from a single source
of truth — edit them there, not in each page.

## Hosting

The site is 100% static. Any static host will work.

### GitHub Pages

1. Push this folder to a new repo (or push and point Pages at this folder).
2. In the repo's **Settings → Pages**, set **Source** to the branch and
   folder that contain this `index.html` (usually `main` / `/`).
3. `.nojekyll` is present so GitHub Pages won't try to run Jekyll and skip
   files whose names start with `_`.
4. If you use a custom domain, add a `CNAME` file at the root with the
   domain on one line (e.g. `kaleoarts.org`), then point the DNS at
   `<user>.github.io` per GitHub's docs.

### Netlify / Vercel / Cloudflare Pages

Drag the folder into the dashboard, or connect the repo. No build command;
publish directory is the repo root.

## Local preview

Any static server will do:

```
python3 -m http.server 8080
# or
npx serve .
```

Then open http://localhost:8080

## Notes for future edits

- All pages share `assets/kaleo-v3.css` + `assets/chrome-v3.js`. Contact
  info, social links, and footer copy live in `chrome-v3.js` — one edit
  updates every page.
- The homepage's welcome-reel video is a Vimeo embed. The thumbnail is
  fetched at runtime via Vimeo oEmbed; a fallback poster (`kaleo-15.jpg`)
  is used until the network call resolves.
- The map embed and Vimeo oEmbed both require network access — they will
  appear blank on a fully offline preview but work anywhere on the open
  web.
