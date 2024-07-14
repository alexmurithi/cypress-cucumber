import { defineConfig } from 'cypress';
import setupNodeEvents from './plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: '**/*.feature*',
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 240000,
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
