<template>
  <UIModal
    class="FileSave"
    :title="t('FileBundle.title-save')"
    :resize-window="false"
    :move-window="false"
    width="320px"
    height="100px"
    :modal-state="modalState"
    @close-modal="$emit('closeModal')"
  >
    <div class="content">
      <UIInput
        id="file-save-name"
        v-model:modelValue="fileNameModelValue"
        class="input"
        :label-name="t('FileBundle.file-name')"
        label-position="left"
      />

      <UIButton
        data-test="file-save-button-save"
        @click="saveFile"
      >
        {{ t('FileBundle.save') }}
      </UIButton>

      <UISelect
        id="file-types"
        v-model:model-value="selectTextTypeModelValue"
        class="select"
        :options="MFilesTextTypes"
        :label-name="t('FileBundle.save-as-type')"
        label-position="left"
      />

      <UIButton
        data-test="file-save-button-cancel"
        @click="$emit('closeModal')"
      >
        {{ t('FileBundle.cancel') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
import {
	EFileTextTypes,
	type TFileTextTypes,
} from "@APP/src/bundles/Programs/NotepadBundle/Supports/File.supports"
import { useFileManager } from "@APP/src/configs/app"
import type { IFilesTextTypes } from "@APP|Bundles/NotepadBundle/Supports/File.supports"
import UIButton from "@APP|Bundles/UIButtonBundle/Components/UIButton.vue"
import UIInput from "@APP|Bundles/UIInputBundle/Components/UIInput.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import UISelect from "@APP|Bundles/UISelectBundle/Components/UISelect.vue"
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const MFilesTextTypes = [
	{
		value: "text/txt;charset=utf-8;",
		name: "FileBundle.text-txt",
	},
	{
		value: "text/doc;charset=utf-8;",
		name: "FileBundle.text-doc",
	},
	{
		value: "text/csv;charset=utf-8;",
		name: "FileBundle.text-csv",
	},
	{
		value: "text/rtf;charset=utf-8;",
		name: "FileBundle.text-rtf",
	},
] as Array<IFilesTextTypes>

const props = defineProps({
	modalState: {
		type: Boolean,
		required: true,
	},
	contentValue: {
		type: String,
		required: true,
	},
})

defineEmits(["closeModal"])

const { t } = useI18n()
const fileManager = useFileManager()

const fileNameModelValue = ref<string>(t("FileBundle.untitled"))
const selectTextTypeModelValue = ref<TFileTextTypes>(MFilesTextTypes[0].value)

const saveFile = (): void => {
	fileManager.saveFile(
		props.contentValue,
		fileNameModelValue.value,
		EFileTextTypes.TXT,
	)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/NotepadBundle/Styles/FileSave.styles.scss"
/>
