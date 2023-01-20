<template>
  <UIModal
    class="FileDownload"
    :title="t('NotepadBundle.title-download')"
    :resize-window="false"
    :width="300"
    :height="300"
    :modal-state="state"
    @close-modal="closeModal"
  >
    <div class="content">
      <UIInput
        id="notepad-file-name"
        :model-value="inputModelValue"
        :label-name="t('NotepadBundle.file-name')"
        label-position="left"
      />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'

  const { t } = useI18n()

  const state = ref(false) as Ref<boolean>
  const inputModelValue = ref(t('NotepadBundle.untitled')) as Ref<string>

  const closeModal = (): void => {
    state.value = false
  }
</script>

<i18n src="@Bundles/FileBundle/Locales/File.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/FileBundle/Styles/File.styles.scss';
</style>
