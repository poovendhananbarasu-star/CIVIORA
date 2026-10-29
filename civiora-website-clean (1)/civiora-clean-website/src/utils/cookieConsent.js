const COOKIE_CONSENT_KEY = 'civiora_cookie_consent';

/**
 * Retrieves the current cookie consent status from localStorage.
 * @returns {'accepted' | 'declined' | null}
 */
export function getCookieConsent() {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === 'accepted' || value === 'declined') {
      return value;
    }
    return null;
  } catch (err) {
    return null;
  }
}

/**
 * Saves cookie consent choice ('accepted' | 'declined').
 * @param {'accepted' | 'declined'} status 
 */
export function setCookieConsent(status) {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
  } catch (err) {
    // Graceful fallback if localStorage is unavailable
  }

  // Notify active listeners
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('civiora-consent-changed', { detail: { status } }));
  }
}

/**
 * Checks if the visitor has explicitly accepted analytics/marketing cookies.
 * @returns {boolean}
 */
export function hasConsent() {
  return getCookieConsent() === 'accepted';
}

/**
 * Triggers the cookie preferences banner to open for re-configuration.
 */
export function openCookieBanner() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-banner'));
  }
}
