import { defineConfig } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm run start',
    port: 4200,
  },
  testDir: 'src/tests',
  fullyParallel: true,
};

export default config;
