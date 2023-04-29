<template>
  <div class="DocumentationContent">
    <Markdown>
      <template
        v-for="documentation in MDocumentations"
        :key="`documentation-${documentation.name}`"
      >
        <component
          :is="documentation.component"
          v-if="store.activePage === documentation.name"
        />
      </template>
    </Markdown>
  </div>
</template>

<script setup lang="ts">
  import Markdown from '@Bundles/MarkdownBundle/Components/Markdown.vue'
  import { MDocumentations } from '@Bundles/DocumentationBundle/Mocks/Documentation.mocks'
  import { useDocumentationStore } from '@Bundles/DocumentationBundle/Stores/Documentation.stores'

  const store = useDocumentationStore()
</script>

<style
  lang="scss"
  scoped
  src="@Bundles/DocumentationBundle/Styles/DocumentationContent.styles.scss"
/>
