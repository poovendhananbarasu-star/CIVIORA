# Civiora Engineering Fix Report: Lead Schema, Analytics, SEO & UX Overhaul

**Date:** 2026-11-16  
**Repository:** `CIVIORA/civiora-clean-website`  
**Test Suite:** Playwright E2E & Smoke Suite (28 tests passing across Desktop & Mobile)  
**Production Boundaries Respected:** Zero deployments triggered; no production Firestore rules published; no GTM container changes published; no credentials exposed.

---

## 1. Changed Files Summary

| File Path | Nature of Changes |
| :--- | :--- |
| [`firestore.rules`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/firestore.rules) | Expanded `isValidAppointmentRequest` to whitelist and validate optional `primaryRequirement` (`string`, 1–200 chars). Retained 12 core required fields, strict regex validations, and root default-deny. |
| [`src/firebase.js`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/firebase.js) | Removed the permission-denied fallback retry that deleted `primaryRequirement`. Established a single, direct Firestore write. Prepared Firebase App Check with `ReCaptchaEnterpriseProvider` in monitoring mode. |
| [`src/components/FinalCTA.jsx`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/components/FinalCTA.jsx) | Added client-side regex validation for email and telephone matching Firestore rules (`noValidate` on form). Added user-friendly field-level error messages. Replaced generic permission errors with actionable guidance. |
| [`src/pages/TrainingDevelopmentPage.jsx`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/pages/TrainingDevelopmentPage.jsx) | Added client validation matching Firestore schema for email and mobile (`noValidate` on form). Displayed field-level error feedback and friendly error messages. |
| [`index.html`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/index.html) | Removed duplicate pre-consent `gtag('config')` and direct `gtag.js` script tag. Made GTM the single owner of GA4, loaded strictly upon analytics consent. Marked early LCP preload with `id="civiora-early-lcp"`. Removed `<noscript>` GTM iframe to adhere strictly to prior-consent standards. |
| [`src/utils/cookieConsent.js`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/utils/cookieConsent.js) | Triggered `window.loadAnalytics()` dynamically upon analytics consent. Dispatched exactly one initial current-page `page_view` to `window.dataLayer` with an idempotency guard (`initialConsentPageViewSent`). |
| [`src/utils/metaPixel.js`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/utils/metaPixel.js) | Removed `initialPageViewTracked` skip flag. Initial consent tracks exactly one current-page `PageView`; subsequent route navigations trigger exactly one `PageView` via `trackMetaPageView()`. Maintained consent checks and zero PII. |
| [`src/components/ScrollToTop.jsx`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/components/ScrollToTop.jsx) | Skipped initial mount via `useRef(true)` to avoid pre-consent `page_view` queueing. Pushed single `page_view` events to `dataLayer` and triggered `trackMetaPageView()` strictly upon subsequent route transitions only when respective consent is granted. |
| [`src/App.jsx`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/App.jsx) | Permanently redirected legacy `/landing` and `/preview` routes to `/institutional-partnership` via `<Navigate replace />`. Dynamically adjusted floating WhatsApp button positioning above mobile cookie banner (`bottom-[calc(env(safe-area-inset-bottom)+14rem)] sm:bottom-6`). |
| [`src/pages/SinglePreviewPage.jsx`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/pages/SinglePreviewPage.jsx) | Explicitly set `canonicalUrl="/institutional-partnership"`. |
| [`firebase.json`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/firebase.json) | Added HTTP 301 edge redirects from `/landing` and `/preview` to `/institutional-partnership`. |
| [`public/robots.txt`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/public/robots.txt) | Removed `Disallow: /landing` and `Disallow: /preview` directives so search engine crawlers can fetch the routes and follow the HTTP 301 redirects to `/institutional-partnership`. |
| [`src/components/SEO.jsx`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/src/components/SEO.jsx) | Reused or updated the early LCP preload tag instead of creating multiple concurrent preload tags, guaranteeing strictly one LCP image preload in the DOM. |
| [`playwright.config.js`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/playwright.config.js) | Configured local `webServer` preview on port 4173 with HTML report output set to `'never'` to enable headless test execution. |
| [`tests/website.spec.js`](file:///c:/Users/TECHVITY/Documents/GitHub/CIVIORA/civiora-website-clean%20(1)/civiora-clean-website/tests/website.spec.js) | Added comprehensive test coverage: lead form validation, canonical redirects, script blocking before consent, pre-consent event suppression, deterministic post-consent and route-change page views (GA4 and Meta Pixel), robots.txt crawlability, mobile cookie banner clearance, and single LCP preload. |

---

## 2. Key Architecture & Technical Decisions

### Firestore Lead Schema & Form Validation
1. **Single Data Contract**: Added `primaryRequirement` to `firestore.rules` as an optional string bounded to 1–200 characters. Kept all 12 core institutional fields strictly required.
2. **Zero Retry Overhead**: Removed the catch block in `src/firebase.js` that deleted `primaryRequirement` upon permission denial. Submissions now execute in a single round-trip write.
3. **Field-Level Validation**: Implemented exact regex checks matching Firestore (`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` for email; `/^[+0-9() -]{5,50}$/` for telephone) before submission, combined with HTML5 `noValidate` to display friendly inline errors.
4. **Actionable UI Feedback**: Replaced generic `"permission-denied"` text with clear field-level validation messages pointing users directly to invalid inputs.

### Analytics & Privacy Compliance
1. **Single Ownership via GTM**: Removed direct `gtag.js` and `gtag('config', 'G-64DQH5MJD5')` invocations from `index.html` and `ScrollToTop.jsx`. GTM (`GTM-WKT9FM8B`) is now the single controller.
2. **Prior-Consent Compliance & No GTM Noscript**: Removed the GTM `<noscript>` iframe from `index.html`. GTM, Meta Pixel, and Microsoft Clarity do not execute or load before explicit user consent.
3. **No Pre-Consent dataLayer Queueing**: `ScrollToTop.jsx` skips the initial mount using `useRef(true)`, ensuring no `page_view` events are pushed to `dataLayer` before consent is granted.
4. **Deterministic Single Page Views**:
   - **GA4**: When analytics consent is accepted, `src/utils/cookieConsent.js` pushes a single current-page `page_view` to `dataLayer`. On subsequent route navigations, `ScrollToTop.jsx` pushes exactly one `page_view` if analytics consent is granted.
   - **Meta Pixel**: Removed the `initialPageViewTracked` skip mechanism. `initMetaPixel()` fires a single `PageView` for the current page upon marketing consent. Subsequent route navigations fire exactly one `PageView` via `trackMetaPageView()`.
5. **PII Sanitization**: Form submissions and tracking calls omit personal names, phone numbers, and emails.

### Route Canonicalization & SEO
1. **Canonical Endpoint**: Selected `https://civiora.co.in/institutional-partnership` as the authoritative public URL.
2. **Double-Layer Redirects**: Added HTTP 301 edge redirects in `firebase.json` for server-side redirection and `<Navigate to="/institutional-partnership" replace />` in `App.jsx` for client routing.
3. **Robots.txt & Crawlability**: Removed `Disallow: /landing` and `Disallow: /preview` from `public/robots.txt`. If those paths were disallowed, search engine bots would not fetch the URLs to receive the 301 redirects. Now bots follow the 301 directly to `/institutional-partnership`.
4. **Sitemap & Metadata**: Only `/institutional-partnership` is indexed and represented in `sitemap.xml`. Legacy routes carry canonical tags pointing to `/institutional-partnership`.

### UI Spacing & Performance
1. **Mobile Collision Elimination**: When `cookieBannerOpen` is active, the floating WhatsApp CTA elevates to `bottom-[calc(env(safe-area-inset-bottom)+14rem)] sm:bottom-6`. When closed, it smoothly rests at `bottom-6`.
2. **Single LCP Preload**: Unified the early byte-0 script in `index.html` and `SEO.jsx`. `SEO.jsx` updates `link#civiora-early-lcp` dynamically, ensuring only one LCP `<link rel="preload">` exists in `<head>`.

---

## 3. Test Results

Automated test execution via Playwright against the local production build (`npm run build && npx playwright test`):

```text
Running 28 tests using 4 workers

  ok [Desktop Chromium] Homepage loads with correct Title, Brand Logo, and Header Navigation
  ok [Desktop Chromium] Contact phone number displays official +91 81500 03810 across Footer and CTA
  ok [Desktop Chromium] Core Institutional routes load successfully without 404
  ok [Desktop Chromium] Training & Development page renders programme cards and Enquire CTA
  ok [Desktop Chromium] Cookie Consent Banner appears and allows interaction
  ok [Desktop Chromium] SEO & OpenGraph Metadata integrity check
  ok [Desktop Chromium] Internal Linking Architecture & Navigation Integrity
  ok [Desktop Chromium] Lead Form: field-level validation prevents invalid email and telephone submissions
  ok [Desktop Chromium] SEO: Canonical redirects from legacy /landing and /preview routes to /institutional-partnership
  ok [Desktop Chromium] Analytics & Consent: Scripts are blocked before consent and enabled after consent
  ok [Desktop Chromium] Analytics: No pre-consent page_view queueing, exactly one on consent, and one per route change
  ok [Desktop Chromium] SEO: robots.txt allows crawlers to follow 301 redirects for /landing and /preview
  ok [Desktop Chromium] UI: Mobile WhatsApp button offset stays clear of Cookie Banner
  ok [Desktop Chromium] Performance: Strictly one LCP image preload in DOM
  ok [Mobile Chromium]  Homepage loads with correct Title, Brand Logo, and Header Navigation
  ok [Mobile Chromium]  Contact phone number displays official +91 81500 03810 across Footer and CTA
  ok [Mobile Chromium]  Core Institutional routes load successfully without 404
  ok [Mobile Chromium]  Training & Development page renders programme cards and Enquire CTA
  ok [Mobile Chromium]  Cookie Consent Banner appears and allows interaction
  ok [Mobile Chromium]  SEO & OpenGraph Metadata integrity check
  ok [Mobile Chromium]  Internal Linking Architecture & Navigation Integrity
  ok [Mobile Chromium]  Lead Form: field-level validation prevents invalid email and telephone submissions
  ok [Mobile Chromium]  SEO: Canonical redirects from legacy /landing and /preview routes to /institutional-partnership
  ok [Mobile Chromium]  Analytics & Consent: Scripts are blocked before consent and enabled after consent
  ok [Mobile Chromium]  Analytics: No pre-consent page_view queueing, exactly one on consent, and one per route change
  ok [Mobile Chromium]  SEO: robots.txt allows crawlers to follow 301 redirects for /landing and /preview
  ok [Mobile Chromium]  UI: Mobile WhatsApp button offset stays clear of Cookie Banner
  ok [Mobile Chromium]  Performance: Strictly one LCP image preload in DOM

  28 passed (1.0m)
```

---

## 4. Manual Console & Administrative Actions Needed

When ready to promote these changes to production:

1. **Deploy Firestore Rules**:
   Run `firebase deploy --only firestore:rules` to release the updated `firestore.rules` containing the `primaryRequirement` validation.
2. **Google Tag Manager (GTM-WKT9FM8B)**:
   Ensure your GTM container has a GA4 Configuration Tag configured to trigger on the custom `page_view` event with Consent Mode v2 enabled. Do not inject direct duplicate GA4 config scripts.
3. **Firebase App Check (reCAPTCHA Enterprise)**:
   - Generate a Web Key for `civiora.co.in` in Google Cloud reCAPTCHA Enterprise.
   - Add `VITE_RECAPTCHA_ENTERPRISE_KEY=<key>` to production environment variables.
   - Keep App Check in **Monitoring Mode** in the Firebase Console for 7 days to review token success rates before clicking **Enforce**.
4. **Deploy Hosting**:
   Run `firebase deploy --only hosting` to publish the updated dist, 301 redirects, and `robots.txt`.

---

## 5. Rollout Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
| :--- | :---: | :---: | :--- |
| **Out-of-sync Firestore Rules Deployment** | Low | High | If frontend is deployed before `firestore.rules`, any form submission containing `primaryRequirement` would fail. **Mitigation**: Deploy `firestore:rules` *before* or *simultaneously with* hosting. |
| **GTM Container Misconfiguration** | Low | Medium | If GTM has no GA4 tag listening to the `page_view` event, pageviews will cease being recorded. **Mitigation**: Verify in GTM Preview mode that `page_view` dataLayer events successfully trigger the GA4 measurement tag. |
| **Aggressive App Check Enforcement** | Low | High | If App Check is enforced before tokens are distributed to visitors with cached JavaScript, legitimate requests could be rejected. **Mitigation**: App Check is configured strictly in monitoring mode; do not enforce until metrics verify 100% token acquisition. |
