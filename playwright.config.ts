import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,
  testDir: './tests',
  fullyParallel: false,
  // retries: process.env.CI ? 2 : 0,
  retries : 1,
  // workers: process.env.CI ? 1 : undefined,
  workers : 1,
  
  reporter: [
    ['html',{outputfolder:'..reports/html-report'}],
    ['allure-playwright', {outputfolder:'..reports/allure-report'}],
    ['list']
  ],
  use: {
   // baseURL: 'https://tutorialsninja.com/demo/',
    trace: 'on-first-retry',
    screenshot:'only-on-failure',
    video : 'retain-on-failure',
    //viewport:{width:1280, height:720},
    ignoreHTTPSErrors:true,
    permissions:['geolocation']
  },
  //grep:/@master/,

  projects: [
    {name: 'chromium',use: {channel: 'chrome',  viewport: { width: 1440, height: 900 } }, },
   // {name: 'firefox',use: { ...devices['Desktop Firefox'] }, },
   // {name: 'webkit',use: { ...devices['Desktop Safari'] },   },
  ],
});
