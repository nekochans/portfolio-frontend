module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**', '**/.next/**', '**/coverage/**'],
  rules: {
    'string-quotes': 'single',
    'function-whitespace-after': null,
  },
};
