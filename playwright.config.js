

const config = {
  use: {
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use :{
        storageState: './config/storageState.json',
        browserName:'chromium',
        channel: 'chrome',
      }

    },
  ],
};

export default config;