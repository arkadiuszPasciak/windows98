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
  import UIText from '@APP|Bundles/UITextBundle/Components/UIText.vue'
  import { TDocumentationBundles } from '@APP|Bundles/DocumentationBundle/Supports/DocumentationNavigation.supports'
  import { useDocumentationStore } from '@APP|Bundles/DocumentationBundle/Stores/Documentation.stores'

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

<style
  lang="scss"
  scoped
  src="@APP|Bundles/DocumentationBundle/Styles/DocumentationNavigationItem.styles.scss"
/>
