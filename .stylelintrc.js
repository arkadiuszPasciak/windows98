module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard',
  ],
  rules: {
    'string-quotes': 'single',
    'color-hex-length': 'long',
    'at-rule-no-unknown': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
  },
}
