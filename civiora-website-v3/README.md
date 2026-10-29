# CIVIORA Website

A premium, single-page scrolling website for **Civiora** — an institutional
solutions and coordination platform for schools, colleges and universities.

Built with **React + Vite**, styled with **Tailwind CSS**, icons from
**lucide-react**, and a **Firebase**-ready contact form (Firestore).

All content on this site comes directly from the approved Civiora brochure —
nothing has been invented (no fake stats, testimonials, partners or pricing).

---

## 1. Install dependencies

Requires Node.js 18+ and npm.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with hot
reload.

## 3. Configure Firebase (optional, for the contact form)

The site works perfectly well **without** Firebase — the "Book an
Appointment" form will simply show a note that submissions aren't enabled
yet, and the direct email/phone links always work regardless.

To enable form submissions to Firestore:

1. Create a project at [Firebase Console](https://console.firebase.google.com).
2. In your project, enable **Firestore Database** (in production or test
   mode — your choice).
3. Go to **Project Settings → General → Your apps**, add a **Web app**, and
   copy the config values shown.
4. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
5. Paste your Firebase config values into `.env`.
6. Restart the dev server (`npm run dev`) or rebuild.

Form submissions are written to a Firestore collection called
`appointmentRequests`.

**Security note:** the values in `.env` (`VITE_FIREBASE_*`) are the public
web SDK config, not secrets — this is normal for Firebase web apps. Still,
never commit your `.env` file (it's already git-ignored). Set proper
[Firestore security rules](https://firebase.google.com/docs/firestore/security/get-started)
before going to production, e.g. to allow only `create` (not `read`) on the
`appointmentRequests` collection from the public.

## 4. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## 5. Deploy to Firebase Hosting

1. Install the Firebase CLI (once, globally):
   ```bash
   npm install -g firebase-tools
   ```
2. Log in:
   ```bash
   firebase login
   ```
3. Open `.firebaserc` and replace `REPLACE_WITH_YOUR_FIREBASE_PROJECT_ID`
   with your actual Firebase project ID.
4. Build and deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

Your site will be live at `https://<your-project-id>.web.app`.

To connect your custom domain (`www.civiora.in`), go to **Firebase Console →
Hosting → Add custom domain** and follow the DNS verification steps.

---

## Project structure

```
civiora-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── firebase.json          # Firebase Hosting config
├── .firebaserc            # Firebase project alias (edit before deploying)
├── .env.example           # Copy to .env and fill in Firebase config
├── public/
│   └── favicon.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── firebase.js         # Firebase init (env-var driven, safe without config)
    ├── assets/             # Logo files
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx           # "The Need" section
        ├── Ecosystem.jsx
        ├── Pathways.jsx        # Schools / Colleges & Universities
        ├── HowItWorks.jsx      # Discover → Design → Connect → Govern → Measure
        ├── WhyCiviora.jsx
        ├── Network.jsx         # Curated Network of Expertise
        ├── Founder.jsx
        ├── ExamPerspective.jsx
        ├── FinalCTA.jsx        # Contact + appointment form
        ├── Footer.jsx
        └── Reveal.jsx          # Scroll-reveal animation wrapper
```

## Design notes

- **Colors:** deep navy (`#0B2A54` family) + gold (`#C9962A` family) + white,
  matching the approved Civiora brand palette. Defined as a full Tailwind
  color scale in `tailwind.config.js`.
- **Typography:** Playfair Display (headings) + Inter (body), loaded via
  Google Fonts in `index.html`.
- **No stock photography** — visuals are abstract line/shape work built in
  CSS/SVG, per the brand's design rules.
- **Animation:** subtle scroll-reveal (`Reveal.jsx`, IntersectionObserver-based),
  hover states on cards/buttons, animated hero background lines. Nothing
  aggressive or distracting.
- **Responsive:** mobile-first Tailwind breakpoints throughout; mobile nav
  collapses into a slide-down menu.
