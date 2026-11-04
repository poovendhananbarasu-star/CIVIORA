import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_CANONICAL_DOMAIN = 'https://civiora.co.in';

/**
 * Lightweight dynamic SEO component for managing title, meta description,
 * canonical link, OpenGraph tags, and JSON-LD structured data per route.
 */
export default function SEO({
  title,
  description,
  canonicalUrl,
  structuredData,
  noindex = false,
  preloadImage,
  preloadMobileImage,
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create a meta tag
    const updateMeta = (selector, attributeName, attributeValue, content) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content || '');
    };

    // 2. Robots Index / Noindex Directive
    if (noindex) {
      updateMeta('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow');
    } else {
      updateMeta('meta[name="robots"]', 'name', 'robots', 'index, follow');
    }

    // 3. Update Description
    if (description) {
      updateMeta('meta[name="description"]', 'name', 'description', description);
      updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
      updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    // 4. Update OG & Twitter Title
    if (title) {
      updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
      updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }

    // 5. Update Canonical URL & OG URL (Always resolve to production canonical domain)
    let canonical = canonicalUrl;
    if (!canonical) {
      const cleanPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
      canonical = `${SITE_CANONICAL_DOMAIN}${cleanPath}`;
    } else if (canonical.startsWith('/')) {
      canonical = `${SITE_CANONICAL_DOMAIN}${canonical}`;
    }

    updateMeta('meta[property="og:url"]', 'property', 'og:url', canonical);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // 6. Preload LCP Image if specified for this route
    let preloadDesktop = document.querySelector('link#route-lcp-preload-desktop');
    let preloadMobile = document.querySelector('link#route-lcp-preload-mobile');

    if (preloadMobileImage) {
      if (!preloadMobile) {
        preloadMobile = document.createElement('link');
        preloadMobile.id = 'route-lcp-preload-mobile';
        preloadMobile.rel = 'preload';
        preloadMobile.as = 'image';
        preloadMobile.setAttribute('type', 'image/webp');
        preloadMobile.setAttribute('fetchpriority', 'high');
        preloadMobile.setAttribute('media', '(max-width: 768px)');
        document.head.appendChild(preloadMobile);
      }
      preloadMobile.setAttribute('href', preloadMobileImage);
    } else if (preloadMobile) {
      preloadMobile.remove();
    }

    if (preloadImage) {
      if (!preloadDesktop) {
        preloadDesktop = document.createElement('link');
        preloadDesktop.id = 'route-lcp-preload-desktop';
        preloadDesktop.rel = 'preload';
        preloadDesktop.as = 'image';
        preloadDesktop.setAttribute('type', 'image/webp');
        preloadDesktop.setAttribute('fetchpriority', 'high');
        if (preloadMobileImage) {
          preloadDesktop.setAttribute('media', '(min-width: 769px)');
        }
        document.head.appendChild(preloadDesktop);
      }
      preloadDesktop.setAttribute('href', preloadImage);
    } else if (preloadDesktop) {
      preloadDesktop.remove();
    }

    // 7. Inject Structured Data (JSON-LD) if provided
    let scriptTag = document.querySelector('#seo-structured-data');
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'seo-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      const mob = document.querySelector('link#route-lcp-preload-mobile');
      if (mob) mob.remove();
      const dsk = document.querySelector('link#route-lcp-preload-desktop');
      if (dsk) dsk.remove();
    };
  }, [title, description, canonicalUrl, structuredData, noindex, preloadImage, preloadMobileImage, location.pathname]);

  return null;
}
