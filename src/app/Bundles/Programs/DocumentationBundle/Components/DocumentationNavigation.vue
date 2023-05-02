<template>
  <div class="DocumentationNavigation">
    <DocumentationNavigationItem
      v-for="bundle in MDocumentations"
      :key="`bundles-${bundle}`"
      :name="bundle.name"
    />
  </div>
</template>

<script setup lang="ts">
  import DocumentationNavigationItem from '@APP|Bundles/DocumentationBundle/Components/DocumentationNavigationItem.vue'
  import { MDocumentations } from '@APP|Bundles/DocumentationBundle/Mocks/Documentation.mocks'
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/DocumentationBundle/Styles/DocumentationNavigation.styles.scss"
/>
