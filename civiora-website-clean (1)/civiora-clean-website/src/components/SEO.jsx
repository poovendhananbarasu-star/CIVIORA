import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight dynamic SEO component for managing title, meta description,
 * canonical link, OpenGraph tags, and JSON-LD structured data per route.
 */
export default function SEO({
  title,
  description,
  canonicalUrl,
  structuredData,
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

    // 2. Update Description
    if (description) {
      updateMeta('meta[name="description"]', 'name', 'description', description);
      updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
      updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    // 3. Update OG Title
    if (title) {
      updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
      updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }

    // 4. Update Canonical URL & OG URL
    const canonical = canonicalUrl || `${window.location.origin}${location.pathname}`;
    updateMeta('meta[property="og:url"]', 'property', 'og:url', canonical);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // 5. Inject Structured Data (JSON-LD) if provided
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
  }, [title, description, canonicalUrl, structuredData, location.pathname]);

  return null;
}
