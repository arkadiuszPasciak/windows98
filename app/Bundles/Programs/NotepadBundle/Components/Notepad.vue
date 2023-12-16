<template>
  <UIModal
    class="Notepad"
    :title="t('NotepadBundle.title')"
    :resize-window="true"
    width="600px"
    height="450px"
    :modal-state="programStore.modalNotepad"
    @close-modal="closeModal"
  >
    <template #options>
      <UIModalNavigationItem
        data-test="notepad-save-file"
        @click="openSaveModal"
      >
        {{ t('NotepadBundle.save') }}
      </UIModalNavigationItem>

      <FileOpen v-model:text-file-value="textFileValue">
        <UIModalNavigationItem>
          {{ t('NotepadBundle.open') }}
        </UIModalNavigationItem>
      </FileOpen>
    </template>

    <div class="content">
      <FileSave
        class="file-save"
        :modal-state="notepadStore.modalSave"
        :content-value="textareaValue"
        @close-modal="closeSaveModal"
      />
      <UITextarea
        id="notepad-textarea"
        v-model:model-value="textareaValue"
        type="notepad"
        class="textarea"
        label-name=""
        :resize-window="true"
        :disabled="notepadStore.modalSave === true"
      />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIModal from '@APP|Bundles/UIModalBundle/Components/UIModal.vue'
  import UIModalNavigationItem from '@APP|Bundles/UIModalBundle/Components/UIModalNavigationItem.vue'
  import UITextarea from '@APP|Bundles/UITextareaBundle/Components/UITextarea.vue'
  import FileOpen from '@APP|Bundles/FileBundle/Components/FileOpen.vue'
  import FileSave from '@APP|Bundles/FileBundle/Components/FileSave.vue'
  import { useProgramStore } from '@APP|Bundles/ProgramBundle/Stores/Program.stores'
  import { useNotepadStore } from '@APP|Bundles/NotepadBundle/Stores/Notepad.stores'

  const { t } = useI18n()

  const programStore = useProgramStore()
  const notepadStore = useNotepadStore()

  const textareaValue = ref<string>(t('NotepadBundle.example'))
  const textFileValue = ref<null | string>(null)

  const closeModal = (): void => {
    programStore.updateNotepadModal(false)
  }

  const openSaveModal = (): void => {
    notepadStore.updateSaveModal(true)
  }

  const closeSaveModal = (): void => {
    notepadStore.updateSaveModal(false)
  }

  watch(textFileValue, async (newValue) => {
    if (newValue) {
      textareaValue.value = newValue
    }
  })
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/NotepadBundle/Styles/Notepad.styles.scss"
/>
