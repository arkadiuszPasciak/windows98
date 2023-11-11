module.exports = {
  '**/*.{js,ts,vue}': ['pnpm run lintfix:js'],
  '**/*.{scss,vue}': ['pnpm run lintfix:styles'],
  '*': ['pnpm run lintfix:prettier'],
}
