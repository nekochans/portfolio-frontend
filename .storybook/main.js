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
  ],
};
