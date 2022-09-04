module.exports = {
  '**/*.{js,ts,vue}': ['npm run lintfix:js'],
  '**/*.{scss,vue}': ['npm run lintfix:styles'],
  '*': ['npm run lintfix:prettier'],
}
