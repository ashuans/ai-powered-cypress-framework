import { describe, expect, it } from 'vitest';
import { generateTestDesign } from '../../src/ai/test-design-generator.js';
describe('test design generator', () => { it('returns reviewable scenarios in offline mode', async () => { const design = await generateTestDesign('User can reset a forgotten password'); expect(design.scenarios.length).toBeGreaterThan(0); expect(design.scenarios[0].id).toMatch(/^AT-/); }); });
