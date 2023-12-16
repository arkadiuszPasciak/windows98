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
  import { useProgramStore } from '@APP|Bundles/ProgramBundle/Stores/Program.stores'
  import DocumentationContent from '@APP|Bundles/DocumentationBundle/Components/DocumentationContent.vue'
  import DocumentationNavigation from '@APP|Bundles/DocumentationBundle/Components/DocumentationNavigation.vue'
  import UIModal from '@APP|Bundles/UIModalBundle/Components/UIModal.vue'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateDocumentationModal(false)
  }
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/DocumentationBundle/Styles/Documentation.styles.scss"
/>
