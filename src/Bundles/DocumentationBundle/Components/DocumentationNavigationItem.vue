<template>
  <button v-if="name" type="button" class="DocumentationNavigationItem">
    <img
      class="icon"
      width="16"
      height="16"
      :src="`/icons/applications/documentation-small.png`"
      :alt="t('DocumentationBundle.icon-description')"
    />
    <UIText class="text">{{ name }}</UIText>
  </button>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'

  defineProps({
    name: {
      type: String,
      required: true,
    },
  })

  const { t } = useI18n()
</script>

<i18n src="@Bundles/DocumentationBundle/Locales/Documentation.locales.json">
</i18n>

<style lang="scss" scoped>
  @import '@Bundles/DocumentationBundle/Styles/DocumentationNavigationItem.styles.scss';
</style>
