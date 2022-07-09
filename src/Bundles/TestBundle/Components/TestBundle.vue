<template>
  <p class="TestBundle">{{ t('TestBundle.hello') }}</p>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<i18n src="../Locales/TestBundle.locales.json"></i18n>

<style lang="scss" scoped></style>
