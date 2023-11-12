module.exports = {
  '**/*.{js,ts,vue}': ['pnpm --filter @windows98/eslint run lintfix:js'],
  '**/*.{scss,vue}': ['pnpm run lintfix:styles'],
  '*': ['pnpm run lintfix:prettier'],
}
