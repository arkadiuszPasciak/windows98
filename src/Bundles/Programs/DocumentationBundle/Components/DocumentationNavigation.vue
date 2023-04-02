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
  import DocumentationNavigationItem from '@Bundles/DocumentationBundle/Components/DocumentationNavigationItem.vue'
  import { MDocumentations } from '@Bundles/DocumentationBundle/Mocks/Documentation.mocks'
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/DocumentationBundle/Styles/DocumentationNavigation.styles.scss"
/>
