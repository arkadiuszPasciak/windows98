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

      <UIButton data-test="file-save-button-save" @click="saveFile">
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
  import { ref, Ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@APP|Bundles/UIButtonBundle/Components/UIButton.vue'
  import UIInput from '@APP|Bundles/UIInputBundle/Components/UIInput.vue'
  import UIModal from '@APP|Bundles/UIModalBundle/Components/UIModal.vue'
  import UISelect from '@APP|Bundles/UISelectBundle/Components/UISelect.vue'
  import { MFilesTextTypes } from '@APP|Bundles/FileBundle/Mocks/File.mocks'
  import { saveFileOnUserDisk } from '@APP|Bundles/FileBundle/Services/File.services'
  import {
    EFileTextTypes,
    TFileTextTypes,
  } from '@APP|Bundles/FileBundle/Supports/File.supports'

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

  defineEmits(['closeModal'])

  const { t } = useI18n()

  const fileNameModelValue = ref(t('FileBundle.untitled')) as Ref<string>

  const selectTextTypeModelValue = ref(
    MFilesTextTypes[0].value,
  ) as Ref<TFileTextTypes>

  const saveFile = (): void => {
    saveFileOnUserDisk(
      props.contentValue,
      fileNameModelValue.value,
      EFileTextTypes.TXT,
    )
  }
</script>

<i18n src="@APP|Bundles/FileBundle/Locales/File.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/FileBundle/Styles/FileSave.styles.scss"
/>
