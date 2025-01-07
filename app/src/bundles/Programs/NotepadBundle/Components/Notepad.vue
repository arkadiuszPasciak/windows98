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

      <UIModalNavigationItem @click="openFile">
        {{ t('NotepadBundle.open') }}
      </UIModalNavigationItem>
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
import { useProgramStore } from "@APP/src/bundles/App/ProgramBundle/Stores/Program.stores"
import { useNotepadStore } from "@APP/src/bundles/Programs/NotepadBundle/Stores/Notepad.stores"
import { useFileManager } from "@APP/src/configs/app"
import FileSave from "@APP|Bundles/NotepadBundle/Components/FileSave.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import UIModalNavigationItem from "@APP|Bundles/UIModalBundle/Components/UIModalNavigationItem.vue"
import UITextarea from "@APP|Bundles/UITextareaBundle/Components/UITextarea.vue"
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const fileManager = useFileManager()
const { t } = useI18n()
const programStore = useProgramStore()
const notepadStore = useNotepadStore()

const textareaValue = ref<string>(t("NotepadBundle.example"))

const closeModal = (): void => {
	programStore.updateNotepadModal(false)
}

const openSaveModal = (): void => {
	notepadStore.updateSaveModal(true)
}

const closeSaveModal = (): void => {
	notepadStore.updateSaveModal(false)
}

const openFile = async (): Promise<void> => {
	const result = await fileManager.openFile()

	console.log(result)

	textareaValue.value = result
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/NotepadBundle/Styles/Notepad.styles.scss"
/>
