import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for Civiora Institutional Website.
 * Tests live deployed site by default or local preview when CIVIORA_BASE_URL is provided.
 */
const baseURL = process.env.CIVIORA_BASE_URL || 'https://civiora-ce87d.web.app';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
  ],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chromium',
      use: { ...devices['Pixel 5'] },
    },
  ],
});

