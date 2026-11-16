import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackMetaPageView } from '../utils/metaPixel';
import { hasConsent } from '../utils/cookieConsent';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Do not queue or push page_view events on initial render (current page is handled upon consent)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Only push dataLayer page_view and Meta PageView on later route navigations if analytics consent is granted
    if (hasConsent()) {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page_path: pathname + search,
          page_location: window.location.href,
          page_title: document.title
        });
      }

      // Track SPA PageView in Meta Pixel strictly after marketing consent
      trackMetaPageView();
    }
  }, [pathname, search]);

  return null;
}
