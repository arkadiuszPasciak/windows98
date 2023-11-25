module.exports = {
  '../../../**/*.{js,ts,vue}': [
    'pnpm --filter @windows98/eslint run lintfix:js',
  ],
  '../../../**/*.{scss,vue}': [
    'pnpm --filter @windows98/stylelint run lintfix:styles',
  ],
  '../../../*': ['pnpm --filter @windows98/prettier run lintfix:prettier'],
}
