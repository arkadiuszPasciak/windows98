module.exports = {
  '../../../app/**/*.{js,ts,vue}': [
    'pnpm --filter @windows98/eslint run lintfix:js',
  ],
  '../../../app/**/*.{scss,vue}': [
    'pnpm --filter @windows98/stylelint run lintfix:styles',
  ],
  '../../../app/*': ['pnpm --filter @windows98/prettier run lintfix:prettier'],
}
