<template>
  <button
    v-if="name"
    type="button"
    class="DocumentationNavigationItem"
    :class="name === store.activePage ? 'is-active' : ''"
    @click="setActiveElement(name)"
  >
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
  import { PropType } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import { TDocumentationBundles } from '@Bundles/DocumentationBundle/Supports/DocumentationNavigation.supports'
  import { useDocumentationStore } from '@Bundles/DocumentationBundle/Stores/Documentation.stores'

  defineProps({
    name: {
      type: String as PropType<TDocumentationBundles>,
      required: true,
    },
  })

  const { t } = useI18n()

  const store = useDocumentationStore()

  const setActiveElement = (name: TDocumentationBundles) => {
    store.changeActivePage(name)
  }
</script>

<i18n src="@Bundles/DocumentationBundle/Locales/Documentation.locales.json">
</i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/DocumentationBundle/Styles/DocumentationNavigationItem.styles.scss"
/>
