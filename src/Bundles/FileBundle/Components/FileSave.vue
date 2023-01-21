<template>
  <UIModal
    class="FileSave"
    :title="t('FileBundle.title-save')"
    :resize-window="false"
    :move-window="false"
    :width="320"
    :height="100"
    :modal-state="state"
    @close-modal="closeModal"
  >
    <div class="content">
      <UIInput
        id="file-save-name"
        class="input"
        :model-value="inputModelValue"
        :label-name="t('FileBundle.file-name')"
        label-position="left"
      />

      <UIButton>{{ t('FileBundle.save') }}</UIButton>

      <UISelect
        id="file-types"
        :options="MFilesTextTypes"
        :model-value="MFilesTextTypes[0].value"
      />

      <UIButton @click="closeModal">{{ t('FileBundle.cancel') }}</UIButton>
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

  const { t } = useI18n()

  const state = ref(true) as Ref<boolean>
  const inputModelValue = ref(t('FileBundle.untitled')) as Ref<string>

  const closeModal = (): void => {
    state.value = false
  }
</script>

<i18n src="@Bundles/FileBundle/Locales/File.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/FileBundle/Styles/FileSave.styles.scss';
</style>
