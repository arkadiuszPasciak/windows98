<template>
  <div class="DocumentationNavigation">
    <DocumentationNavigationItem
      v-for="bundle in MDocumentationNavigationList"
      :key="`bundles-${bundle}`"
      :name="bundle"
    />
  </div>
</template>

<script setup lang="ts">
  import DocumentationNavigationItem from '@Bundles/DocumentationBundle/Components/DocumentationNavigationItem.vue'
  import { MDocumentationNavigationList } from '@Bundles/DocumentationBundle/Mocks/DocumentationNavigation'
</script>

<style lang="scss" scoped>
  @import '@Bundles/DocumentationBundle/Styles/DocumentationNavigation.styles.scss';
</style>
