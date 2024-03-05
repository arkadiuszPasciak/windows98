module.exports = {
    extends: [
        "./typescript.config.js",
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended"
    ],
    plugins: [
        "vue",
        "@typescript-eslint",
    ],
    rules: {
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
    },
}