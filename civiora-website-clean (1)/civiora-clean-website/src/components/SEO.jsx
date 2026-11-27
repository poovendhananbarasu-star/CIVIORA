import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEOCollector } from '../context/SEOContext';

const SITE_CANONICAL_DOMAIN = 'https://civiora.co.in';

export function resolveCanonicalUrl(canonicalUrl, pathname) {
  if (!canonicalUrl) {
    const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    return `${SITE_CANONICAL_DOMAIN}${cleanPath}`;
  }
  if (canonicalUrl.startsWith('/')) {
    return `${SITE_CANONICAL_DOMAIN}${canonicalUrl}`;
  }
  return canonicalUrl;
}

export function buildBreadcrumbSchema(pathname, pageTitle) {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (cleanPath === '/') return null;

  const segments = cleanPath.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_CANONICAL_DOMAIN}/`,
    },
  ];

  let currentPath = '';
  segments.forEach((seg, idx) => {
    currentPath += `/${seg}`;
    const isLast = idx === segments.length - 1;
    const formatted = seg
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    const label = isLast && pageTitle ? pageTitle.split('|')[0].trim() : formatted;
    items.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: label,
      item: `${SITE_CANONICAL_DOMAIN}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

/**
 * Lightweight dynamic SEO component for managing title, meta description,
 * canonical link, OpenGraph tags, and JSON-LD structured data per route.
 * Also supports synchronous collection during SSR/SSG pre-rendering.
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
  const seoCollector = useSEOCollector();
  const canonical = resolveCanonicalUrl(canonicalUrl, location.pathname);
  const breadcrumbSchema = buildBreadcrumbSchema(location.pathname, title);
  const combinedSchema = structuredData
    ? breadcrumbSchema
      ? [structuredData, breadcrumbSchema]
      : structuredData
    : breadcrumbSchema;

  if (seoCollector && typeof window === 'undefined') {
    seoCollector.current = {
      title: title || 'Civiora | Institutional Learning & Career Partnerships',
      description: description || '',
      canonical,
      structuredData: combinedSchema || null,
      noindex,
      preloadImage: preloadImage || null,
      preloadMobileImage: preloadMobileImage || null,
    };
  }

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
    updateMeta('meta[property="og:url"]', 'property', 'og:url', canonical);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // 6. Preload LCP Image if specified for this route (guarantee strictly one LCP image preload in DOM)
    const isMobileViewport = typeof window !== 'undefined' && (window.matchMedia('(max-width: 768px)').matches || window.innerWidth <= 768);
    const resolvedLcpImage = isMobileViewport ? (preloadMobileImage || preloadImage) : (preloadImage || preloadMobileImage);

    // Clean up any legacy dual preload tags
    const oldMobile = document.querySelector('link#route-lcp-preload-mobile');
    if (oldMobile) oldMobile.remove();
    const oldDesktop = document.querySelector('link#route-lcp-preload-desktop');
    if (oldDesktop) oldDesktop.remove();

    let preloadLink = document.querySelector('link#civiora-early-lcp') || document.querySelector('link#route-lcp-preload');
    if (resolvedLcpImage) {
      if (!preloadLink) {
        preloadLink = document.createElement('link');
        preloadLink.id = 'route-lcp-preload';
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.setAttribute('type', 'image/webp');
        preloadLink.setAttribute('fetchpriority', 'high');
        document.head.appendChild(preloadLink);
      }
      preloadLink.setAttribute('href', resolvedLcpImage);
    } else if (preloadLink) {
      preloadLink.remove();
    }

    // 7. Inject Structured Data (JSON-LD) if provided
    let scriptTag = document.querySelector('#seo-structured-data');
    if (combinedSchema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'seo-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(combinedSchema);
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
