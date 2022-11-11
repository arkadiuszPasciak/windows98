<template>
  <UIModal
    class="Notepad"
    :title="t('Notepad.title')"
    :resize-window="true"
    :width="600"
    :height="450"
    :modal-state="programStore.modalCalculator"
    @close-modal="closeModal"
  >
    <div class="content">content will soon</div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'

  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateCalculatorModal(false)
  }

  const { t } = useI18n()
</script>

<i18n src="@Bundles/NotepadBundle/Locales/Notepad.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/NotepadBundle/Styles/Notepad.styles.scss';
</style>
