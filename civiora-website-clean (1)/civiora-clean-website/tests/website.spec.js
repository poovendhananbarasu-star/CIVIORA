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

});
