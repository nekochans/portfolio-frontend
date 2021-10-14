module.exports = {
  stories: [
    '../src/components/**/*.stories.@(tsx|mdx)',
    '../src/layouts/**/*.stories.@(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    'storybook-css-modules-preset',
  ],
};
