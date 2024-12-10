import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'http://localhost:5173', // Local Front End URL
  },
  env: {
    API_URL:
      'https://bbmkuv7n53.execute-api.us-west-2.amazonaws.com/dev/resume', // API URL
  },
});
