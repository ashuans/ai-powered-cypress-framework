import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';
export default defineConfig({ testDir: './tests/playwright', reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]], use: { baseURL: process.env.BASE_URL ?? 'https://example.com', trace: 'retain-on-failure' }, projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }] });
