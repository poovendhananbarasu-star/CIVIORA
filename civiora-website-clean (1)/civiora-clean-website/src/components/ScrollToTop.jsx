import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackMetaPageView } from '../utils/metaPixel';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-LKJW6S5J5G', {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title
      });
    }

    // Track SPA PageView in Meta Pixel if consented
    trackMetaPageView();
  }, [pathname, search]);

  return null;
}
