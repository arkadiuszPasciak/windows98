<template>
  <UIModal
    class="FileSave"
    :title="t('FileBundle.title-save')"
    :resize-window="false"
    :move-window="false"
    :width="320"
    :height="100"
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
        data-test="file-save-button-cancel"
        :label-name="t('FileBundle.save-as-type')"
        label-position="left"
      />

      <UIButton @click="$emit('closeModal')">
        {{ t('FileBundle.cancel') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { MFilesTextTypes } from '@Bundles/FileBundle/Mocks/File.mocks'
  import { saveFileOnUserDisk } from '@Bundles/FileBundle/Services/File.services'
  import {
    EFileTextTypes,
    TFileTextTypes,
  } from '@Bundles/FileBundle/Supports/File.supports'

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

<i18n src="@Bundles/FileBundle/Locales/File.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/FileBundle/Styles/FileSave.styles.scss';
</style>
