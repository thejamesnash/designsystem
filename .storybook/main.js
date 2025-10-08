

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-essentials',
    '@storybook/addon-docs', 
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  "docs": {
    "autodocs": true
  }
};
export default config;