import { defineConfig } from "cypress";
import { setupNodeEvents } from "./plugin";

export default defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 240000,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
