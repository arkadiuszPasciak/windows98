# Internationalization

In our application, we have implemented internationalization (i18n) to accommodate users who speak different languages and to provide a better user experience. To achieve this, we use the `vue-i18n` library and `@intlify/unplugin-vue-i18n` plugin, which together enable seamless integration of multi-language support in our Vue.js application. Currently, we support English and Polish languages. We maintain separate translation files for each bundle, containing key-value pairs that map to specific user interface elements and messages. When a user selects their preferred language, the application dynamically updates the displayed text to match their choice

## Tools

### [vue-i18n](https://kazupon.github.io/vue-i18n/)

Popular internationalization plugin for Vue.js applications. It allows us to manage translations, handle localization, and support language switching dynamically. With its easy-to-use API, we can efficiently organize and manage translations for our application's user interface elements, ensuring a smooth experience for users who prefer English or Polish.

### [@intlify/unplugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n#intlifyunplugin-vue-i18n)

To enhance the performance of our application and optimize the integration with Vite, we utilize the @intlify/unplugin-vue-i18n plugin. This plugin streamlines the handling of i18n in our Vue.js application, providing additional features such as on-the-fly translation updates and optimized bundle sizes. It also simplifies the configuration process, allowing us to focus on creating translations and managing language-specific content.
