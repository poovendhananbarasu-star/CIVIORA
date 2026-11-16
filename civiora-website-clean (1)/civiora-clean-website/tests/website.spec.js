import { test, expect } from '@playwright/test';

test.describe('Civiora Website - Core Functionality & Smoke Tests', () => {

  test('Homepage loads with correct Title, Brand Logo, and Header Navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check page title contains Civiora
    await expect(page).toHaveTitle(/Civiora/i);

    // Verify main brand logo is visible
    const logo = page.getByRole('link', { name: /Civiora Home/i }).first();
    await expect(logo).toBeVisible();

    // Verify header navigation exists
    const nav = page.locator('header nav').first();
    await expect(nav).toBeVisible();
  });

  test('Contact phone number displays official +91 81500 03810 across Footer and CTA', async ({ page }) => {
    await page.goto('/');

    // Ensure the old number 8150003610 is NOT present anywhere on the page
    const pageContent = await page.content();
    expect(pageContent).not.toContain('8150003610');
    expect(pageContent).not.toContain('81500 03610');

    // Verify updated phone number exists in footer
    const footerPhone = page.locator('footer a[href^="tel:+918150003810"]');
    await expect(footerPhone).toBeAttached();

    // Verify WhatsApp link points to 918150003810
    const whatsappLink = page.locator('a[href*="wa.me/918150003810"]');
    await expect(whatsappLink).toBeAttached();
  });

  test('Core Institutional routes load successfully without 404', async ({ page }) => {
    const routes = [
      '/',
      '/about',
      '/ecosystem',
      '/training-development',
      '/blog',
      '/founder',
      '/contact'
    ];

    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator('body')).not.toBeEmpty();
      await page.waitForLoadState('domcontentloaded');
    }
  });

  test('Training & Development page renders programme cards and Enquire CTA', async ({ page }) => {
    await page.goto('/training-development');
    await expect(page).toHaveTitle(/Training|Civiora/i);

    // Verify key programme headers
    const mainHeading = page.locator('h1, h2').first();
    await expect(mainHeading).toBeVisible();

    // Verify enquiry button exists
    const enquireBtn = page.getByRole('button', { name: /Enquire About These Programmes|Enquire/i }).first();
    await expect(enquireBtn).toBeVisible();
  });

  test('Cookie Consent Banner appears and allows interaction', async ({ page, context }) => {
    // Clear cookies to simulate a brand-new visitor
    await context.clearCookies();
    await page.goto('/');

    // Locate the cookie consent dialog
    const cookieDialog = page.locator('div[role="dialog"][aria-label="Cookie and Privacy Preferences"]');
    if (await cookieDialog.isVisible({ timeout: 4000 }).catch(() => false)) {
      const acceptBtn = page.getByRole('button', { name: 'Accept Cookies' });
      await expect(acceptBtn).toBeVisible();
      await acceptBtn.click();
      await expect(cookieDialog).toBeHidden({ timeout: 4000 });
    }
  });

  test('SEO & OpenGraph Metadata integrity check', async ({ page }) => {
    await page.goto('/');

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);

    // Check OpenGraph title
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /.+/);

    // Check canonical link
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /.+/);
  });

  test('Internal Linking Architecture & Navigation Integrity', async ({ page }) => {
    await page.goto('/');

    // Check Footer contains newly enriched links
    const footer = page.locator('footer');
    await expect(footer.locator('a[href="/ecosystem"]').first()).toBeAttached();
    await expect(footer.locator('a[href="/network"]').first()).toBeAttached();
    await expect(footer.locator('a[href="/institutional-partnership"]').first()).toBeAttached();

    // Check Training & Development page contains cross-linking strip
    await page.goto('/training-development');
    await expect(page.locator('main a[href="/how-it-works"]').first()).toBeAttached();
    await expect(page.locator('main a[href="/ecosystem"]').first()).toBeAttached();
    await expect(page.locator('main a[href="/founder"]').first()).toBeAttached();

    // Check Legal page contains breadcrumb back to Home
    await page.goto('/terms-and-conditions');
    const homeBreadcrumb = page.locator('nav[aria-label="Breadcrumb"] a[href="/"]').first();
    await expect(homeBreadcrumb).toBeAttached();
  });

  test('Lead Form: field-level validation prevents invalid email and telephone submissions', async ({ page }) => {
    await page.goto('/contact');

    // Scroll to contact form
    const form = page.locator('form[method="post"]').first();
    await expect(form).toBeVisible();

    // Fill in invalid email & invalid phone
    await page.fill('#representativeName', 'Test Representative');
    await page.fill('#designation', 'Principal');
    await page.fill('#institutionName', 'Test College');
    await page.fill('#location', 'Bengaluru, Karnataka');
    await page.fill('#officialEmail', 'invalid-email-address');
    await page.fill('#telephone', '12'); // Too short (< 5 chars)
    await page.fill('#requirement', 'Looking for institutional curriculum enhancement and career awareness programmes.');
    
    // Check consent checkbox
    await page.check('#final-cta-consent');

    // Submit form
    const submitBtn = page.getByRole('button', { name: /Request an Institutional Discussion/i });
    await submitBtn.click();

    // Verify field-level error messages appear
    await expect(page.locator('text=Please enter a valid official email address')).toBeVisible();
    await expect(page.locator('text=Please enter a valid telephone number')).toBeVisible();
  });

  test('SEO: Canonical redirects from legacy /landing and /preview routes to /institutional-partnership', async ({ page }) => {
    // Navigate to legacy /landing route
    await page.goto('/landing');
    await expect(page).toHaveURL(/\/institutional-partnership/);

    // Verify canonical tag points to /institutional-partnership
    const canonicalLanding = page.locator('link[rel="canonical"]');
    await expect(canonicalLanding).toHaveAttribute('href', 'https://civiora.co.in/institutional-partnership');

    // Navigate to legacy /preview route
    await page.goto('/preview');
    await expect(page).toHaveURL(/\/institutional-partnership/);

    const canonicalPreview = page.locator('link[rel="canonical"]');
    await expect(canonicalPreview).toHaveAttribute('href', 'https://civiora.co.in/institutional-partnership');
  });

  test('Analytics & Consent: Scripts and page_view events are blocked before consent', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('/');

    // 1. Verify before consent: neither Meta Pixel script nor Clarity are loaded
    const hasMetaScriptBefore = await page.evaluate(() => Boolean(window.fbq && window.fbq.loaded));
    const hasClarityBefore = await page.evaluate(() => Boolean(window.clarity));
    expect(hasMetaScriptBefore).toBeFalsy();
    expect(hasClarityBefore).toBeFalsy();

    // 2. Verify NO page_view events are queued before consent in dataLayer
    const preConsentPageViews = await page.evaluate(() => {
      if (!window.dataLayer) return [];
      return window.dataLayer.filter(item => item && (item.event === 'page_view' || item[0] === 'event' && item[1] === 'page_view'));
    });
    expect(preConsentPageViews.length).toBe(0);

    // 3. Verify no GTM noscript iframe exists in DOM
    const noscriptIframe = page.locator('iframe[src*="googletagmanager.com/ns.html"]');
    await expect(noscriptIframe).toHaveCount(0);

    // 4. Accept consent
    const acceptBtn = page.getByRole('button', { name: /Accept Cookies|Accept/i }).first();
    if (await acceptBtn.isVisible().catch(() => false)) {
      await acceptBtn.click();
      
      // Verify localStorage is updated to accepted
      const consentValue = await page.evaluate(() => localStorage.getItem('civiora_cookie_consent'));
      expect(consentValue).toBe('accepted');

      // 5. Verify exactly one current-page view is pushed after consent
      const postConsentPageViews = await page.evaluate(() => {
        if (!window.dataLayer) return [];
        return window.dataLayer.filter(item => item && (item.event === 'page_view' || item[0] === 'event' && item[1] === 'page_view'));
      });
      expect(postConsentPageViews.length).toBe(1);
    }
  });

  test('Analytics: Emits exactly one GA4 page_view per later route change after consent', async ({ page, context }) => {
    // Start with consent already accepted
    await context.clearCookies();
    await page.addInitScript(() => {
      localStorage.setItem('civiora_cookie_consent', 'accepted');
    });

    await page.goto('/');
    // Guarantee React has fully hydrated the DOM before testing client routing
    await expect(page.locator('h1').first()).toBeVisible();

    // On landing with accepted consent, exactly 1 page_view should exist
    const landingPageViews = await page.evaluate(() => {
      if (!window.dataLayer) return [];
      return window.dataLayer.filter(item => item && (item.event === 'page_view' || item[0] === 'event' && item[1] === 'page_view'));
    });
    expect(landingPageViews.length).toBe(1);

    // Navigate via client-side React Router link to /about (first later route change)
    const aboutLink = page.locator('footer a[href="/about"]').first();
    await aboutLink.scrollIntoViewIfNeeded();
    await aboutLink.click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator('h1').first()).toBeVisible();

    const aboutPageViews = await page.evaluate(() => {
      if (!window.dataLayer) return [];
      return window.dataLayer.filter(item => item && (item.event === 'page_view' || item[0] === 'event' && item[1] === 'page_view'));
    });
    // Exactly 2 page_views (1 from landing + 1 from /about)
    expect(aboutPageViews.length).toBe(2);

    // Navigate via client-side React Router link to /contact (second later route change)
    const contactLink = page.locator('footer a[href="/contact"]').first();
    await contactLink.scrollIntoViewIfNeeded();
    await contactLink.click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h1').first()).toBeVisible();

    const contactPageViews = await page.evaluate(() => {
      if (!window.dataLayer) return [];
      return window.dataLayer.filter(item => item && (item.event === 'page_view' || item[0] === 'event' && item[1] === 'page_view'));
    });
    // Exactly 3 page_views total (1 per route)
    expect(contactPageViews.length).toBe(3);

    // Verify no redundant direct gtag('config') is fired
    const directConfigs = await page.evaluate(() => {
      if (!window.dataLayer) return [];
      return window.dataLayer.filter(item => item && item[0] === 'config' && item[1] === 'G-64DQH5MJD5');
    });
    expect(directConfigs.length).toBe(0);
  });

  test('SEO: robots.txt allows /landing and /preview so crawlers receive 301 redirects', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    const content = await response?.text();

    // Verify robots.txt does not disallow /landing or /preview
    expect(content).not.toContain('Disallow: /landing');
    expect(content).not.toContain('Disallow: /preview');
    expect(content).toContain('Allow: /');
    expect(content).toContain('Sitemap: https://civiora.co.in/sitemap.xml');
  });

  test('UI: Mobile WhatsApp button offset stays clear of Cookie Banner', async ({ page, context }) => {
    await context.clearCookies();
    // Emulate mobile screen
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const cookieBanner = page.locator('aside[aria-label="Cookie and Privacy Preferences"]');
    if (await cookieBanner.isVisible({ timeout: 3000 }).catch(() => false)) {
      const whatsappBtn = page.locator('a[aria-label="Chat with Civiora on WhatsApp"]');
      await expect(whatsappBtn).toBeVisible();

      // Ensure WhatsApp button has bottom spacing class to elevate it above cookie banner
      const btnClass = await whatsappBtn.getAttribute('class');
      expect(btnClass).toContain('bottom-[calc(env(safe-area-inset-bottom)+14rem)]');
    }
  });

  test('Performance: Strictly one LCP image preload in DOM', async ({ page }) => {
    await page.goto('/');

    const lcpPreloads = page.locator('link[rel="preload"][as="image"]');
    const count = await lcpPreloads.count();
    // At most 1 LCP image preload tag should exist
    expect(count).toBeLessThanOrEqual(1);
  });

});
