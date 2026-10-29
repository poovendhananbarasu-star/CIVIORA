import { hasConsent } from './cookieConsent';

let isInitialized = false;
let initialPageViewTracked = false;

/**
 * Initializes and injects the Meta Pixel script only if:
 * 1. The visitor has explicitly accepted cookies (hasConsent() is true)
 * 2. VITE_META_PIXEL_ID is defined and non-empty
 * 3. It hasn't already been initialized
 */
export function initMetaPixel() {
  if (typeof window === 'undefined') return;

  // 1. Consent check: Strictly require explicit user consent
  if (!hasConsent()) {
    return;
  }

  // 2. Pixel ID check: Must not be hardcoded
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  if (!pixelId || String(pixelId).trim() === '') {
    return;
  }

  // 3. Prevent duplicate initialization
  if (isInitialized || window._fbq) {
    return;
  }

  // Official Meta Pixel base snippet
  /* eslint-disable */
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  // Explicitly disable automatic PII extraction and form scraping
  window.fbq('set', 'autoConfig', false, pixelId);

  // Initialize WITHOUT any personal data / PII parameters
  window.fbq('init', pixelId);

  // Track one PageView after consent (Requirement 3)
  window.fbq('track', 'PageView');

  isInitialized = true;
  initialPageViewTracked = true;
}

/**
 * Returns whether the Meta Pixel is currently initialized and consented.
 * @returns {boolean}
 */
export function isMetaPixelInitialized() {
  return isInitialized && hasConsent();
}

/**
 * Tracks a PageView event on route navigation, only if initialized and consented.
 */
export function trackMetaPageView() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function' && isMetaPixelInitialized()) {
    if (initialPageViewTracked) {
      initialPageViewTracked = false;
      return;
    }
    window.fbq('track', 'PageView');
  }
}

/**
 * Tracks a Lead event ONLY after successful form submission.
 * Strictly NEVER sends form fields, names, emails, phones, or any PII.
 */
export function trackMetaLead() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function' && isMetaPixelInitialized()) {
    // Standard event without any user data / PII
    window.fbq('track', 'Lead');
  }
}
