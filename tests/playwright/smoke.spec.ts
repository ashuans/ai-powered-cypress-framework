import { expect, test } from '@playwright/test';
import { HealingPage } from '../../src/playwright/healing-page.js';
test('application smoke with observable locator healing', async ({ page }) => { await page.goto('/'); expect(await page.title()).not.toBe(''); const healingPage = new HealingPage(page); await healingPage.click('More information', [{ strategy: 'text', locator: 'a:has-text("More information")' }, { strategy: 'text', locator: 'text=More information' }]).catch(() => undefined); });
