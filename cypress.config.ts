import { defineConfig } from 'cypress';
import 'dotenv/config';
export default defineConfig({ e2e: { baseUrl: process.env.BASE_URL ?? 'https://example.com', specPattern: 'cypress/e2e/**/*.cy.ts', supportFile: 'cypress/support/e2e.ts', video: false }, env: { API_BASE_URL: process.env.API_BASE_URL ?? 'https://api.example.com' } });
