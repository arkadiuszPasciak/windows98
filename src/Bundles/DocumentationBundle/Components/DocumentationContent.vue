<template>
  <div class="DocumentationContent">
    <Markdown>
      <component :is="testFirst"></component>
    </Markdown>
  </div>
</template>

<script setup lang="ts">
  import Markdown from '@Bundles/MarkdownBundle/Components/Markdown.vue'
  import { testFirst } from '@Bundles/DocumentationBundle/Mocks/Documentation.mocks'
</script>

<style lang="scss" scoped>
  @import '@Bundles/DocumentationBundle/Styles/DocumentationContent.styles.scss';
</style>
