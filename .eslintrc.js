module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: '2021',
  },
  rules: {
    'vue/require-default-prop': 'off',
  },
}
