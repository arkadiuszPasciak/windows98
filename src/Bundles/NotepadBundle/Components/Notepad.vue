<template>
  <UIModal
    class="Notepad"
    :title="t('NotepadBundle.title')"
    :resize-window="true"
    :width="600"
    :height="450"
    :modal-state="programStore.modalNotepad"
    @close-modal="closeModal"
  >
    <div class="content">
      <FileDownload />
      <UITextarea
        id="notepad-textarea"
        type="notepad"
        class="textarea"
        :model-value="modelValue"
        label-name=""
        :resize-window="true"
      />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import UITextarea from '@Bundles/UIBundle/Components/UITextarea.vue'
  import FileDownload from '@Bundles/FileBundle/Components/FileDownload.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'

  const { t } = useI18n()
  const programStore = useProgramStore()

  const modelValue = ref(t('NotepadBundle.example')) as Ref<string>

  const closeModal = (): void => {
    programStore.updateNotepadModal(false)
  }
</script>

<i18n src="@Bundles/NotepadBundle/Locales/Notepad.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/NotepadBundle/Styles/Notepad.styles.scss';
</style>
