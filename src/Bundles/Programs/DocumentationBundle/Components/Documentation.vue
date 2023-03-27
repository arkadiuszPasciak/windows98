<template>
  <UIModal
    class="Documentation"
    :title="t('DocumentationBundle.title')"
    :resize-window="false"
    width="700px"
    height="500px"
    :modal-state="programStore.modalDocumentation"
    @close-modal="closeModal"
  >
    <div class="content">
      <DocumentationNavigation />
      <DocumentationContent />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'
  import DocumentationContent from '@Bundles/DocumentationBundle/Components/DocumentationContent.vue'
  import DocumentationNavigation from '@Bundles/DocumentationBundle/Components/DocumentationNavigation.vue'
  import UIModal from '@Bundles/UIModalBundle/Components/UIModal.vue'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateDocumentationModal(false)
  }
</script>

<i18n src="@Bundles/DocumentationBundle/Locales/Documentation.locales.json">
</i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/DocumentationBundle/Styles/Documentation.styles.scss"
/>
