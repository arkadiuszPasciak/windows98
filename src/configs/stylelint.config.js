module.exports = {
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-recommended-scss'],
      rules: {
        'scss/operator-no-newline-after': null,
      },
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-recommended-vue'],
    },
  ],
  rules: {
    'color-hex-length': 'long',
    'at-rule-no-unknown': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
  },
}
