import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppLayout } from './App.jsx';
import { SEOContext } from './context/SEOContext.jsx';
import { getAllBlogPosts } from './data/blogPosts.js';

import SinglePreviewPage from './pages/SinglePreviewPage.jsx';
import TrainingDevelopmentPage from './pages/TrainingDevelopmentPage.jsx';
import BlogListingPage from './pages/BlogListingPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsConditionsPage from './pages/TermsConditionsPage.jsx';
import CancellationRefundPolicyPage from './pages/CancellationRefundPolicyPage.jsx';
import GrievanceSupportPage from './pages/GrievanceSupportPage.jsx';

const SSR_PAGES = {
  SinglePreviewPage,
  TrainingDevelopmentPage,
  BlogListingPage,
  BlogPostPage,
  NotFoundPage,
  PrivacyPolicyPage,
  TermsConditionsPage,
  CancellationRefundPolicyPage,
  GrievanceSupportPage,
};

export function getPrerenderRoutes() {
  const staticRoutes = [
    '/',
    '/about',
    '/who-we-are',
    '/ecosystem',
    '/pathways',
    '/how-it-works',
    '/why-civiora',
    '/network',
    '/founder',
    '/contact',
    '/institutional-partnership',
    '/training-development',
    '/blog',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cancellation-refund-policy',
    '/grievance-support',
  ];

  const blogRoutes = getAllBlogPosts().map((post) => `/blog/${post.slug}`);
  return [...staticRoutes, ...blogRoutes];
}

export function render(url) {
  const seoCollector = { current: null };

  const html = renderToString(
    <React.StrictMode>
      <SEOContext.Provider value={seoCollector}>
        <StaticRouter location={url}>
          <AppLayout
            mobileMenuOpen={false}
            setMobileMenuOpen={() => {}}
            ssrPages={SSR_PAGES}
          />
        </StaticRouter>
      </SEOContext.Provider>
    </React.StrictMode>
  );

  return { html, seo: seoCollector.current };
}
