import { hasConsent } from './cookieConsent';

let isInitialized = false;
let initialPageViewTracked = false;

// Deduplication timestamp cache
const lastFormEvents = {
  form_start: 0,
  form_submit: 0,
};
const DEDUPE_WINDOW_MS = 2000;

/**
 * Creates a Proxy around an fbq instance to deduplicate form events,
 * strip any PII/form fields, and enforce consent on tracking calls.
 */
function createFbqProxy(targetFbq) {
  return new Proxy(targetFbq, {
    apply(target, thisArg, argArray) {
      const action = argArray[0];
      let eventName = null;
      let paramsIdx = -1;

      if (action === 'track' || action === 'trackCustom') {
        eventName = argArray[1];
        paramsIdx = 2;
      } else if (action === 'trackSingle' || action === 'trackSingleCustom') {
        eventName = argArray[2];
        paramsIdx = 3;
      }

      // Strictly enforce marketing consent on all tracking dispatches
      if (
        action === 'track' ||
        action === 'trackCustom' ||
        action === 'trackSingle' ||
        action === 'trackSingleCustom'
      ) {
        if (!hasConsent()) {
          return;
        }
      }

      // Deduplicate form_start and form_submit events
      if (eventName === 'form_start' || eventName === 'form_submit') {
        const now = Date.now();
        if (now - (lastFormEvents[eventName] || 0) < DEDUPE_WINDOW_MS) {
          // Drop duplicate call fired at same timestamp or within debounce window
          return;
        }
        lastFormEvents[eventName] = now;

        // Strict PII sanitization: Never transmit form values, names, emails, phones, or text
        if (paramsIdx > 0 && argArray[paramsIdx] && typeof argArray[paramsIdx] === 'object') {
          const cleanParams = {};
          const rawParams = argArray[paramsIdx];
          ['form_id', 'form_name', 'form_destination'].forEach((k) => {
            const val = rawParams[k];
            if (typeof val === 'string' && val.length < 100 && !val.includes('@') && !/\d{5,}/.test(val)) {
              cleanParams[k] = val;
            }
          });
          argArray[paramsIdx] = cleanParams;
        }
      }

      return Reflect.apply(target, thisArg, argArray);
    },
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      return Reflect.set(target, prop, value, receiver);
    },
  });
}

/**
 * Sets up the window.fbq interceptor with Object.defineProperty so that
 * any assignment to window.fbq (by Meta snippet, GTM, or third parties)
 * is automatically wrapped in our deduplication & privacy proxy.
 */
export function setupFbqProxy() {
  if (typeof window === 'undefined') return;

  if (window.__civioraFbqProxyInstalled) return;
  window.__civioraFbqProxyInstalled = true;

  let _fbqInternal = window.fbq ? createFbqProxy(window.fbq) : undefined;

  try {
    Object.defineProperty(window, 'fbq', {
      configurable: true,
      enumerable: true,
      get: () => _fbqInternal,
      set: (val) => {
        if (typeof val === 'function' && !val.__isCivioraDedupeProxy) {
          const proxy = createFbqProxy(val);
          proxy.__isCivioraDedupeProxy = true;
          _fbqInternal = proxy;
        } else {
          _fbqInternal = val;
        }
      },
    });
  } catch (e) {
    // Fallback if Object.defineProperty is locked
    if (typeof window.fbq === 'function' && !window.fbq.__isCivioraDedupeProxy) {
      window.fbq = createFbqProxy(window.fbq);
    }
  }
}

// Auto-install proxy on module load
setupFbqProxy();

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

  // Ensure proxy is installed
  setupFbqProxy();

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
