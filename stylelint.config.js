module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-prettier'],
  ignoreFiles: [
    '**/node_modules/**',
    '**/.next/**',
    '**/build/**',
    '**/coverage/**',
  ],
  customSyntax: 'postcss-syntax',
  rules: {
    'string-quotes': 'single',
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
};
