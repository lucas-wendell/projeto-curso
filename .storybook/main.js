// const { mergeConfig } = require('vite');
import { mergeConfig } from "vite";

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  features: {
    storyStoreV7: false,
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: (await import('../vite.config.js')).default.resolve,
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
