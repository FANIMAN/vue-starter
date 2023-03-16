import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'yygy1b',
  e2e: {
    baseUrl: 'http://localhost:8100',
    supportFile: false,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
