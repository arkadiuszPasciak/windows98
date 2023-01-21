<template>
  <UIModal
    class="FileDownload"
    :title="t('FileBundle.title-download')"
    :resize-window="false"
    :move-window="false"
    :width="300"
    :height="225"
    :modal-state="state"
    @close-modal="closeModal"
  >
    <div class="content">
      <UIInput
        id="file-download-in"
        :model-value="t('FileBundle.downloads')"
        :label-name="t('FileBundle.download-in')"
        label-position="left"
        :disabled="true"
      />

      <UIInput
        id="file-download-name"
        :model-value="inputModelValue"
        :label-name="t('FileBundle.file-name')"
        label-position="left"
      />

      <UISelect
        id="file-types"
        :options="MFilesTextTypes"
        :model-value="MFilesTextTypes[0].value"
      />

      <UIButton>{{ t('FileBundle.download') }}</UIButton>

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
  @import '@Bundles/FileBundle/Styles/File.styles.scss';
</style>
