import Clarity from '@microsoft/clarity';
import { hasConsent } from './cookieConsent';

let isInitialized = false;

/**
 * Official Microsoft Clarity integration via @microsoft/clarity.
 * Requirements:
 * 1. Loads only after visitor explicitly accepts cookies (hasConsent() is true).
 * 2. Uses VITE_MICROSOFT_CLARITY_PROJECT_ID from environment.
 * 3. Never transmits PII, form values, names, emails, or phone numbers.
 * 4. Can be stopped and cookies purged if consent is withdrawn.
 */
export function initClarity() {
  if (typeof window === 'undefined') return;

  // 1. Consent check: Strictly require visitor consent
  if (!hasConsent()) {
    return;
  }

  // 2. Project ID check: Must be configured in environment
  const projectId = import.meta.env.VITE_MICROSOFT_CLARITY_PROJECT_ID;
  if (!projectId || String(projectId).trim() === '') {
    return;
  }

  // 3. Prevent duplicate initialization
  if (isInitialized || window.clarity) {
    return;
  }

  // 4. Initialize Microsoft Clarity via official package
  Clarity.init(String(projectId).trim());

  isInitialized = true;
}

/**
 * Returns whether Microsoft Clarity is currently initialized.
 */
export function isClarityInitialized() {
  return isInitialized && hasConsent();
}

/**
 * Removes Microsoft Clarity cookies from the browser if consent is withdrawn.
 */
function removeClarityCookies() {
  if (typeof document === 'undefined') return;

  // Known Microsoft Clarity and associated telemetry cookies
  const clarityCookiePrefixes = ['_clck', '_clsk', 'CLID', 'ANONCHK', 'MR', 'MUID', 'SM'];
  const hostname = window.location.hostname;
  const domainParts = hostname.split('.');
  const domainsToClear = [
    '',
    hostname,
    '.' + hostname,
    domainParts.length > 1 ? '.' + domainParts.slice(-2).join('.') : '',
  ];

  clarityCookiePrefixes.forEach((cookieName) => {
    domainsToClear.forEach((dom) => {
      const domainAttr = dom ? `; domain=${dom}` : '';
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainAttr}`;
      document.cookie = `${cookieName}=; max-age=0; path=/${domainAttr}`;
    });
  });
}

/**
 * Stops Clarity tracking and removes clarity cookies if visitor withdraws consent.
 */
export function stopClarity() {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.clarity === 'function') {
      window.clarity('stop');
    }
  } catch (err) {
    // Graceful handling
  }

  removeClarityCookies();
  isInitialized = false;
}
