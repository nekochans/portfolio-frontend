const webpack = require('webpack');

module.exports = {
  stories: [
    '../src/components/**/*.stories.@(tsx|mdx)',
    '../src/layouts/**/*.stories.@(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    'storybook-addon-next',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    );

    return config;
  },
};
